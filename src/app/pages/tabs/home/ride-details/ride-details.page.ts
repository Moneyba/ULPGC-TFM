import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Request} from '../../../../shared/models/Request';
import {RequestService} from '../../../../core/services/request.service';
import {Ride} from '../../../../shared/models/Ride';
import {User} from '../../../../shared/models/User';
import {State} from '../../../../shared/ui.utils';
import {Chat} from '../../../../shared/models/Chat';
import {ChatService} from '../../../../core/services/chat.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {UserService} from '../../../../core/services/user.service';
import {RideService} from '../../../../core/services/ride.service';
import DirectionsRequest = google.maps.DirectionsRequest;
import DirectionsService = google.maps.DirectionsService;
import {MapsAPILoader} from '@agm/core';
import {ToastController} from '@ionic/angular';


@Component({
    selector: 'app-ride-details',
    templateUrl: './ride-details.page.html',
    styleUrls: ['./ride-details.page.scss'],
})
export class RideDetailsPage implements OnInit {
    public ride: Ride;
    private currentUser: User;
    public user: User;
    public isBooked = false;
    public availableSeats: number;

    private latitude: number;
    private longitude: number;
    private zoom: number;
    private direction: DirectionsRequest;
    private directionsService = new DirectionsService();
    public duration;
    public distance;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private requestService: RequestService,
                private chatService: ChatService,
                private userService: UserService,
                private rideService: RideService,
                private db: AngularFireDatabase,
                private mapsAPILoader: MapsAPILoader,
                private toastController: ToastController
    ) {
        this.currentUser = this.userService.user.getValue();

        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.ride = this.router.getCurrentNavigation().extras.state.ride;
                this.getAvailableSeats();
            }
        });

        this.mapsAPILoader.load().then(() => {
            this.getDirection();
        });
    }

    ngOnInit() {
        this.getUser();
        this.checkBooking();
    }

    public getDirection(): void {
        this.direction = {
            origin: this.ride.origin,
            destination: this.ride.destination,
            travelMode: google.maps.TravelMode.DRIVING
        };

        this.directionsService.route(this.direction, result => {
            this.duration = result.routes[0].legs[0].duration.text;
            this.distance = result.routes[0].legs[0].distance.text;
        });
    }

    private getUser(): void {
        this.userService.getUser(this.ride.userId).subscribe(user =>
            this.user = user);
    }

    private getAvailableSeats(): void {
        let bookedSeats = 0;
        if (this.ride.seatedUserIds) {
            bookedSeats = this.ride.seatedUserIds.length;
        }
        this.availableSeats = this.ride.numberOfSeats - bookedSeats;
    }

    public createRequest(): void {
        const request: Request = {
            userId: this.currentUser.id,
            dateTime: new Date(),
            ride: this.ride,
            state: State.pending
        };
        this.requestService.createRequest(request).then(async () => {
            const toast = await this.toastController.create({
                message: 'You have booked this ride succesfully! :)',
                duration: 2000,
                position: 'bottom',
                animated: true,
            });
            toast.present();
            this.router.navigateByUrl('tabs');
        });
    }

    public goToDriverDetailsPage(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                userId: this.ride.userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    }

    public contactTheDriver(): void {
        let chat: Chat = {
            passengerUser: this.currentUser.id,
            driverUser: this.ride.userId,
            rideId: this.ride.id
        };

        this.chatService.getChatByRideId(this.ride.id).subscribe((chats: Chat[]) => {
            if (chats[0]) {
                chat = chats[0];
                const navigationExtras: NavigationExtras = {
                    state: {
                        chatId: chat.id
                    }
                };
                this.router.navigate(['chat'], navigationExtras);
            } else {
                chat.id = this.db.createPushId();
                this.chatService.createChat(chat).then(result => {
                    const navigationExtras: NavigationExtras = {
                        state: {
                            chatId: chat.id
                        }
                    };
                    this.router.navigate(['chat'], navigationExtras);
                });
            }
        });

    }

    private checkBooking(): void {
    /*    if (this.ride.seatedUserIds) {
            this.ride.seatedUserIds.forEach(userId => {
                if (userId === this.currentUser.id) {
                    this.isBooked = true;
                }
            });
        }*/
        this.requestService.getRequestsByRideId(this.ride.id).subscribe(requests =>
        requests.forEach((request: Request) => {
            if (request.userId === this.currentUser.id && request.state !== State.refused) {
                this.isBooked = true;
            }
        }));
    }


}

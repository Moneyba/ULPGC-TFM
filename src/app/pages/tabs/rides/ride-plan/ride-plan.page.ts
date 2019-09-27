import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Ride} from '../../../../shared/models/Ride';
import {Request} from '../../../../shared/models/Request';
import {RideService} from '../../../../core/services/ride.service';
import {RequestService} from '../../../../core/services/request.service';
import {State} from '../../../../shared/ui.utils';
import {RidePage} from '../ride/ride.page';
import {AlertController, ModalController, PopoverController, ToastController} from '@ionic/angular';
import {User} from '../../../../shared/models/User';
import {UserService} from '../../../../core/services/user.service';
import {RidePopoverComponent} from './ride-popover/ride-popover.component';
import DirectionsRequest = google.maps.DirectionsRequest;
import DirectionsService = google.maps.DirectionsService;
import {MapsAPILoader} from '@agm/core';

@Component({
    selector: 'app-ride-plan',
    templateUrl: './ride-plan.page.html',
    styleUrls: ['./ride-plan.page.scss'],
})
export class RidePlanPage implements OnInit {
    public ride: Ride = null;
    public request: Request = null;
    public rideTimeDate;
    public driver: User;
    public passengers: User[] = [];

    public requests = [];

    public currentUser: User;

    dataReturned: any;

    public latitude: number;
    public longitude: number;
    public zoom: number;
    public direction: DirectionsRequest;
    private directionsService = new DirectionsService();
    public duration;
    public distance;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private rideService: RideService,
                private requestSerivce: RequestService,
                private modalController: ModalController,
                private userService: UserService,
                private requestService: RequestService,
                public popoverController: PopoverController,
                private mapsAPILoader: MapsAPILoader,
                private alertController: AlertController) {
        this.currentUser = this.userService.user.getValue();
        this.route.queryParams.subscribe(params => {

            if (this.router.getCurrentNavigation().extras.state) {
                const rideId = this.router.getCurrentNavigation().extras.state.rideId;
                this.getRide(rideId);

            }
        });


    }

    ngOnInit() {

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

    private getRide(rideId: string) {
        this.rideService.getRide(rideId).subscribe(ride => {
            this.ride = ride;
            this.rideTimeDate = new Date(this.ride.dateTime);
            this.getPassengers();
            this.getRequests();
            this.mapsAPILoader.load().then(() => {
                this.getDirection();
            });
        });
    }

    private getPassengers(): void {
        this.passengers = [];
        if (this.ride.seatedUserIds) {
            this.ride.seatedUserIds.forEach((userId, index) => {
                this.userService.getUser(userId).subscribe(user => this.passengers[index] = user);
            });
        }
    }

    public goToUserDetailsPage(userId: string): void {
        const navigationExtras: NavigationExtras = {
            state: {
                userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    }

    public editRide(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                ride: this.ride
            }
        };
        this.router.navigate(['ride-form'], navigationExtras);

    }


    async openModal() {
        const modal = await this.modalController.create({
            component: RidePage,
            componentProps: {
                ride: this.ride
            }
        });


        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
                // alert('Modal Sent Data :'+ dataReturned);
            }
        });

        return await modal.present();
    }


    public acceptBooking(request: Request): void {
        console.log(request.ride.numberOfSeats);
        if (this.ride.numberOfSeats > this.passengers.length) {
            if (!this.ride.seatedUserIds) {
                this.ride.seatedUserIds = [];
            }
            this.ride.seatedUserIds.push(request.userId);
            request.state = State.accepted;
            request.ride = this.ride;
            this.requestService.updateRequest(request);
            this.rideService.updateRide(this.ride).then(() => this.getRide(this.ride.id));

        }
    }

    public refuseBooking(request: Request): void {
        request.state = State.refused;
        this.requestService.updateRequest(request);
    }

    public deleteUserFromRide(user: User): void {
       this.requests.forEach((request: Request) => {
           if (request.userId === user.id) {
               request.state = State.refused;
               request.ride = this.ride;
               this.requestService.updateRequest(request);
               this.ride.seatedUserIds = this.ride.seatedUserIds.filter(userId => userId !== user.id);
               this.rideService.updateRide(request.ride).then(() => this.getRide(this.ride.id));
           }
       });
    }

    public   async presentAlertConfirm(user) {
        const alert = await this.alertController.create({
            header: 'Remove Passenger',
            message: 'Are you sure you want to remove this passenger?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.deleteUserFromRide(user);
                    }
                }
            ]
        });

        await alert.present();
    }


    public getRequests(): void {
        this.requestService.getRequestsByRideId(this.ride.id).subscribe(requests => {
                this.requests = requests;
                requests.forEach((request: Request, index) => this.getUser(request.userId, index));
                console.log(requests);
            }
        );
    }

    public getUser(userId, index): void {
        console.log(userId);
        this.userService.getUser(userId).subscribe(user => this.requests[index].user = user);
    }

    public goToChatNotification(notification: Request): void {
        const navigationExtras: NavigationExtras = {
            state: {
                notification
            }
        };
        this.router.navigate(['notification'], navigationExtras);
    }

    public async presentPopover(event: any) {
        const popover = await this.popoverController.create({
            component: RidePopoverComponent,
            event,
            componentProps: {
                ride: this.ride
            }

        });
        return await popover.present();
    }

}

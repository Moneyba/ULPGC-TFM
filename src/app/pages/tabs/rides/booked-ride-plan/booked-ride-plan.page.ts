import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {User} from '../../../../shared/models/User';
import {Request} from '../../../../shared/models/Request';
import {UserService} from '../../../../core/services/user.service';
import {RidePage} from '../ride/ride.page';
import {AlertController, ModalController} from '@ionic/angular';
import {MapsAPILoader} from '@agm/core';
import DirectionsRequest = google.maps.DirectionsRequest;
import DirectionsService = google.maps.DirectionsService;
import {RequestService} from '../../../../core/services/request.service';
import {Chat} from '../../../../shared/models/Chat';
import {ChatService} from '../../../../core/services/chat.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-booked-ride-plan',
  templateUrl: './booked-ride-plan.page.html',
  styleUrls: ['./booked-ride-plan.page.scss'],
})
export class BookedRidePlanPage implements OnInit {
  public request: Request;
  public driver: User;
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
              private modalController: ModalController,
              private userService: UserService,
              private requestService: RequestService,
              private mapsAPILoader: MapsAPILoader,
              private chatService: ChatService,
              private db: AngularFireDatabase,
              private alertController: AlertController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const requestId = this.router.getCurrentNavigation().extras.state.requestId;
        console.log(requestId);
        this.getRequest(requestId);
      }
    });


  }

  ngOnInit() {
  }

  private getRequest(requestId: string): void {
    this.requestService.getRequest(requestId).subscribe(request => {
      this.request = request;
      console.log(this.request);
      this.getDriver();
      this.getAvaliableSeats();
      this.mapsAPILoader.load().then(() => {
        this.getDirection();
      });
    });
  }

  public getDirection(): void {
    this.direction = {
      origin: this.request.ride.origin,
      destination: this.request.ride.destination,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(this.direction, result => {
      this.duration = result.routes[0].legs[0].duration.text;
      this.distance = result.routes[0].legs[0].distance.text;
    });
  }

  private getDriver(): void {
    this.userService.getUser(this.request.ride.userId).subscribe(user => this.driver = user);
  }

  private getAvaliableSeats(): void {
    const seatsNumber = this.request.ride.numberOfSeats;
    let passengerNumber = 0;
    if (this.request.ride.seatedUserIds) {
        passengerNumber = this.request.ride.seatedUserIds.length;
    }
    this.availableSeats = seatsNumber - passengerNumber;
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: RidePage,
      componentProps: {
        ride: this.request.ride
      }
    });

    return await modal.present();
  }

  public goToDriverDetailsPage(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        userId: this.request.ride.userId
      }
    };
    this.router.navigate(['public-profile'], navigationExtras);
  }

  public contactTheDriver(): void {
    let chat: Chat = {
      passengerUser: this.request.userId,
      driverUser: this.driver.id,
      rideId: this.request.ride.id
    };

    this.chatService.getChatByRideId(this.request.ride.id).subscribe((chats: Chat[]) => {
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

  public deleteRequest(): void {

    // Send notification to driver

    this.requestService.deleteRequest(this.request.id).then(() =>
        this.router.navigate(['tabs/tabs/rides']));
  }

  public   async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cancel Ride',
      message: 'Are you sure you want to cancel this ride?',
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
            this.deleteRequest();
          }
        }
      ]
    });

    await alert.present();
  }

}

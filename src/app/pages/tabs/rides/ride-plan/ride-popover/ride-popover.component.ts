import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AlertController, NavParams, PopoverController} from '@ionic/angular';
import {Ride} from '../../../../../shared/models/Ride';
import {RideService} from '../../../../../core/services/ride.service';

@Component({
  selector: 'app-ride-popover',
  templateUrl: './ride-popover.component.html',
  styleUrls: ['./ride-popover.component.scss'],
})
export class RidePopoverComponent implements OnInit {

  private ride: Ride

  constructor(private router: Router,
              private navParams: NavParams,
              private popoverController: PopoverController,
              private rideService: RideService,
              private alertController: AlertController) {
    this.ride = this.navParams.data.ride;
  }

  ngOnInit() {}

  public editRide(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        ride: this.ride
      }
    };
    this.popoverController.dismiss();

    this.router.navigate(['ride-form'], navigationExtras);
  }

  public deleteRide(): void {
    if (this.ride.seatedUserIds) {
      // Send notification to passengers
    }
    this.popoverController.dismiss();
    this.rideService.deleteRide(this.ride.id).then(() => this.router.navigateByUrl('tabs/tabs/rides'));
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
          handler: () => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.deleteRide();
          }
        }
      ]
    });

    await alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/User';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {RewardProduct} from '../../../../shared/models/RewardProduct';
import {RewardService} from '../../../../core/services/reward.service';
import {Ride} from '../../../../shared/models/Ride';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-rewards-catalog',
  templateUrl: './rewards-catalog.page.html',
  styleUrls: ['./rewards-catalog.page.scss'],
})
export class RewardsCatalogPage implements OnInit {
  public showSearchContainer = false;
  public currentUser: User;
  public rewards: RewardProduct[];

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private rewardService: RewardService,
      private alertController: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentUser = this.router.getCurrentNavigation().extras.state.user;
      }
    });
    this.getRewards();
  }

  ngOnInit() {
  }

  private getRewards(): void {
    this.rewardService.getRewards().subscribe(rewards => this.rewards = rewards);
  }


  public changePointsBoxState(): void {
    this.showSearchContainer = !this.showSearchContainer;
  }

  public goToRewardDetailsPage(reward: RewardProduct): void {
    const navigationExtras: NavigationExtras = {
      state: {
        reward,
        user: this.currentUser
      }
    };
    this.router.navigate(['reward-details'], navigationExtras);
  }

  public editReward(reward: RewardProduct): void {
    const navigationExtras: NavigationExtras = {
      state: {
        reward
      }
    };
    this.router.navigate(['reward-form'], navigationExtras);
  }


  public   async presentAlertConfirm(rewardId: string) {
    const alert = await this.alertController.create({
      header: 'Cancel Ride',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.rewardService.deleteReward(rewardId);
          }
        }
      ]
    });

    await alert.present();
  }
}

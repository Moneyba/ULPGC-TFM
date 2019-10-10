import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {User} from '../../../shared/models/User';
import {NavigationExtras, Router} from '@angular/router';
import {ModalController, PopoverController} from '@ionic/angular';
import {ProfilePopoverComponent} from './profile-popover/profile-popover.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    public currentUser: User;

    public constructor(

        private userService: UserService,
        private router: Router,
        public popoverController: PopoverController

    ) {
    }

    public ngOnInit(): void {
    }

    ionViewWillEnter() {
        this.currentUser = this.userService.user.getValue();
    }

    public goToPublicProfilePage(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                userId: this.currentUser.id
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    }

    public gotoRatingsPage(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                user: this.currentUser
            }
        };
        this.router.navigate(['ratings'], navigationExtras);
    }

    public gotoRewardsCatalogPage(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                user: this.currentUser
            }
        };
        this.router.navigate(['rewards-catalog'], navigationExtras);
    }

  /*  public gotoSetup(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                user: this.currentUser
            }
        };
        this.router.navigate(['initial-setup'], navigationExtras);
    }*/

    public async presentPopover(event: any) {
        const popover = await this.popoverController.create({
            component: ProfilePopoverComponent,
            event,
            componentProps: {
                user: this.currentUser
            }

        });
        return await popover.present();
    }
}

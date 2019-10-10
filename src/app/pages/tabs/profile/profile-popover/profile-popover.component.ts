import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {NavParams, PopoverController} from '@ionic/angular';
import {User} from '../../../../shared/models/User';
import {FirebaseAuthentication} from '@ionic-native/firebase-authentication/ngx';
import {EmailComposer} from '@ionic-native/email-composer/ngx';

@Component({
    selector: 'app-profile-popover',
    templateUrl: './profile-popover.component.html',
    styleUrls: ['./profile-popover.component.scss'],
})
export class ProfilePopoverComponent implements OnInit {

    public currentUser: User;

    constructor(private router: Router,
                private navParams: NavParams,
                private popoverController: PopoverController,
                private emailComposer: EmailComposer,
                private firebaseAuthentication: FirebaseAuthentication
    ) {
        this.currentUser = this.navParams.data.user;
    }

    ngOnInit() {
    }


    public gotoProfileFormPage(): void {
        const navigationExtras: NavigationExtras = {
            state: {
                user: this.currentUser
            }
        };
        this.popoverController.dismiss();
        this.router.navigate(['profile-form'], navigationExtras);

    }

    public logout(): void {
        this.popoverController.dismiss();
        this.firebaseAuthentication.signOut();
        this.router.navigateByUrl('login');
    }

    private contact(): void {
        const email = {
            to: 'moneybahr@gmail.com',
            isHtml: true
        };
        this.emailComposer.open(email);
    }


}

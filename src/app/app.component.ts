import {Component} from '@angular/core';

import {Platform, ToastController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {FcmService} from './core/services/fcm.service';
import {FirebaseAuthentication} from '@ionic-native/firebase-authentication/ngx';
import {NavigationExtras, Router} from '@angular/router';
import {UserService} from './core/services/user.service';
import {TranslateConfigService} from './core/services/translate-config.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private firebaseAuthentication: FirebaseAuthentication,
        private fcmService: FcmService,
        private userService: UserService,
        private router: Router,
        private toastController: ToastController,
        private translateConfigService: TranslateConfigService
    ) {
        this.initializeApp();
    }

    public initializeApp(): void {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.notificationSetup();
            this.configureAuth();
            this.translateConfigService.getDefaultLanguage();
        });

    }

    private notificationSetup(): void {
        this.fcmService.listenToNotifications().subscribe(
            msg => {
                console.log(msg);
                if (msg.tap === true) {
                    if (msg.type === 'request') {
                        const navigationExtras: NavigationExtras = {
                            state: {
                                rideId: msg.rideId
                            }
                        };
                        this.router.navigate(['ride-plan'], navigationExtras);
                    }
                    if (msg.type === 'requestState') {
                        const navigationExtras: NavigationExtras = {
                            state: {
                                requestId: msg.requestId
                            }
                        };
                        this.router.navigate(['booked-ride-plan'], navigationExtras);
                    }
                    if (msg.type === 'chatMessage') {
                        const navigationExtras: NavigationExtras = {
                            state: {
                                chatId: msg.chatId
                            }
                        };
                        this.router.navigate(['chat'], navigationExtras);
                    }
                    if (msg.type === 'rating') {
                        const navigationExtras: NavigationExtras = {
                            state: {
                                userId: msg.userId
                            }
                        };
                        this.router.navigate(['public-profile'], navigationExtras);
                    }

                }
                if (this.platform.is('ios')) {
                    this.presentToast(msg.aps.alert);
                } else {
                    this.presentToast(msg.body);
                }
            });
    }

    private async presentToast(message): Promise<any> {
        const toast = await this.toastController.create({
            message,
            duration: 3000
        });
        toast.present();
    }

    private configureAuth(): void {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#ffffff');
            this.splashScreen.hide();
            if (this.platform.is('cordova')) {
                this.firebaseAuthentication.onAuthStateChanged().subscribe(async user => {
                    console.log(user);
                    if (user) {
                        this.userService.setLoggedUID(user.uid);
                        this.fcmService.setToken(user.uid);
                        this.userService.getLoggedUser().subscribe(loggedUser => {
                            if (!loggedUser.name) {
                                this.router.navigateByUrl('initial-setup');
                            } else {
                                this.router.navigateByUrl('tabs');
                            }
                        });
                    } else {
                        this.router.navigateByUrl('login');
                    }
                }, e => {
                    console.error(e);
                });
            }
        });
    }

}

import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import {FcmService} from '../../core/services/fcm.service';
import {Platform} from '@ionic/angular';
import {FirebaseAuthentication} from '@ionic-native/firebase-authentication/ngx';
import {LoadingService} from '../../core/services/loading.service';
import {Slides} from 'ionic-angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private loginForm: FormGroup;


    public phoneNumber: string;
    public phoneSent: boolean;
    public verificationID: string;
    public confirmationCode: any;
    public isSpinner: boolean;
    @ViewChild(Slides) slides: Slides;

    public constructor(private formBuilder: FormBuilder,
                       private authService: AuthService,
                       private router: Router,
                       private fcmService: FcmService,
                       private platform: Platform,
                       private fireAuth: FirebaseAuthentication,
    ) {
        this.isSpinner = false;
    }

    ngOnInit() {
        this.createLoginForm();

    }

    ionViewWillEnter() {
        this.phoneNumber = null;
        this.phoneSent = false;
        this.verificationID = null;
        this.confirmationCode = null;

    }

    private createLoginForm(): void {
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required]
        });
    }


    async logIn() {
        this.isSpinner = true;

        if (this.phoneNumber && this.phoneNumber.length > 0 && this.phoneNumber.includes('+')) {
            const phoneExists = await this.authService.checkPhone(this.phoneNumber).catch(e => {
                console.error(e);
                this.isSpinner = false;
            });
            console.log(phoneExists);
            if (phoneExists && phoneExists.length > 0) {
                if (this.platform.is('ios')) {
                    this.verificationID = await this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000).catch(e => {
                        console.error(e);
                        // alert(JSON.stringify(e));
                        this.isSpinner = false;
                    });
                } else if (this.platform.is('android')) {
                    const {verificationId} = await this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000).catch(e => {
                        console.error(e);
                        // alert(JSON.stringify(e));
                        this.isSpinner = false;
                    });
                    this.verificationID = verificationId;
                }
                console.log(this.platform);
                this.verificationID = await this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000);
                this.isSpinner = false;
                this.phoneSent = true;
                console.log('si');
            } else {
                console.log(this.phoneNumber);
                this.authService.createUser({
                    phoneNumber: this.phoneNumber
                }).then(async () => {
                    this.verificationID = await this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000);
                    this.isSpinner = false;
                    this.phoneSent = true;
                });
            }
        } else {
            console.log('no');
        }
    }

    public async sendCode(): Promise<any> {
        this.isSpinner = true;


        await this.fireAuth.signInWithVerificationId(this.verificationID, this.confirmationCode);

        // await this.fireAuth.signInAndRetrieveDataWithCredential(credential).catch(e => {
        //     console.error(e);
        //     this.utils.dissmissLoading();
        // });


        this.isSpinner = false;
    }
}

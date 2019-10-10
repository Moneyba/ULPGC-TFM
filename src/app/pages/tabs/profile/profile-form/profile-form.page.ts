import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/User';
import {UserService} from '../../../../core/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, ModalController, NavController, NavParams} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {UtilsService} from '../../../../core/services/utils.service';
import {LoadingService} from '../../../../core/services/loading.service';
import {TranslateConfigService} from '../../../../core/services/translate-config.service';
import {FirebaseAuthentication} from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {

  public currentUser: User;
  public profileForm: FormGroup;
  public photoHasChanged = false;
  public selectedLanguage: string;
  public photo: string;

  constructor(
      private userService: UserService,
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private utilsService: UtilsService,
      private loadingService: LoadingService,
      private camera: Camera,
      private translateConfigService: TranslateConfigService,
      private alertController: AlertController) {
    this.selectedLanguage = this.translateConfigService.getLanguage();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentUser = this.router.getCurrentNavigation().extras.state.user;
        this.photo = this.currentUser.photo;
      }
    });
  }

  ngOnInit() {
    this.createProfileForm();
  }

  public createProfileForm(): void {
    this.profileForm = this.fb.group({
      name: [this.currentUser.name, Validators.required],
      phoneNumber: [this.currentUser.phoneNumber],
      photo: [this.photo],
      carDetails: [this.currentUser.carDetails ? this.currentUser.carDetails : null]

    });
  }


  public async updateUser() {
    const user: User = {
      id: this.currentUser.id,
      name: this.profileForm.get('name').value,
      photo: this.profileForm.get('photo').value,
      carDetails: this.profileForm.get('carDetails').value
    };
    this.userService.updateUser(user).then(() => {
      this.router.navigate(['tabs/tabs/profile']);
    });
  }

  public async uploadNewPhoto(): Promise<void> {
    const cameraOptions: CameraOptions = await this.utilsService.actionSheetCameraOptions();
    const preview = await this.camera.getPicture(cameraOptions);
    const base64Image = 'data:image / jpeg;base64,' + preview;
    this.loadingService.presentLoading();
    const preset = 'gfllyeot';
    const url = await this.utilsService.uploadBase64ImageToCloudinary(base64Image, preset);
    this.loadingService.dissmissLoading();
    this.photo = url;
    this.profileForm.get('photo').setValue(url);
    this.photoHasChanged = true;
  }

  public deleteUser(): void {
    this.userService.deleteUser(this.currentUser.id);
  }

  public languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  public   async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Delete Account',
      message: 'Are you sure you want to delete your account?',
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
            this.deleteUser();
          }
        }
      ]
    });

    await alert.present();
  }


}

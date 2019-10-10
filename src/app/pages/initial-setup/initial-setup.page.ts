import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../shared/models/User';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {UserService} from '../../core/services/user.service';
import {UtilsService} from '../../core/services/utils.service';
import {LoadingService} from '../../core/services/loading.service';
import {Slides} from 'ionic-angular';

@Component({
  selector: 'app-initial-setup',
  templateUrl: './initial-setup.page.html',
  styleUrls: ['./initial-setup.page.scss'],
})
export class InitialSetupPage implements OnInit {
  public setUpForm: FormGroup;
  public currentUser: User;
  public photoHasChanged = false;
  public photo: string;
  @ViewChild('slides') slides: Slides;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private userService: UserService,
      private utilsService: UtilsService,
      private loadingService: LoadingService,
      private camera: Camera
  ) {
    //this.currentUser = this.userService.user.getValue();
    this.userService.getLoggedUser().subscribe( user => {
      this.currentUser = user;
      this.photo = this.currentUser ? this.currentUser.photo : '/assets/icon/favicon.jpg';
    });
  }

  ngOnInit() {
    this.createSetupForm();
  }

  public createSetupForm(): void {
    this.setUpForm = this.fb.group({
      name: [this.currentUser ? this.currentUser.name : '', Validators.required],
      photo: [this.photo]
    });
  }

  public updateUser() {
    const user: User = {
      id: this.currentUser.id,
      name: this.setUpForm.get('name').value,
      photo: this.setUpForm.get('photo').value,
      averageRating: 0,
      numberOfRatings: 0,
      isAdmin: false,
      points: {
        currentPoints: 0,
        blockedPoints: 0,
        exchangedPoints: 0
      }
    };
    this.userService.updateUser(user).then(() => {
      this.router.navigateByUrl('tabs');
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
    this.currentUser.photo = url;
    this.photoHasChanged = true;
  }


}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilsService} from '../../../../../core/services/utils.service';
import {LoadingService} from '../../../../../core/services/loading.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {User} from '../../../../../shared/models/User';
import {RewardProduct} from '../../../../../shared/models/RewardProduct';
import {RewardService} from '../../../../../core/services/reward.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-reward',
    templateUrl: './reward-form-page.component.html',
    styleUrls: ['./reward-form-page.component.scss'],
})
export class RewardFormPage implements OnInit {

    public rewardForm: FormGroup;
    public photoHasChanged = false;
    public photo = '/assets/icon/favicon.jpg';
    private reward: RewardProduct;
    public isSpinning = false;

    constructor(private utilsService: UtilsService,
                private loadingService: LoadingService,
                private camera: Camera,
                private fb: FormBuilder,
                private rewardService: RewardService,
                private route: ActivatedRoute,
                private router: Router) {
       this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.reward = this.router.getCurrentNavigation().extras.state.reward;
                this.photo = this.reward ? this.reward.photo : '/assets/icon/favicon.jpg';
            }
        });
    }

    ngOnInit() {
        this.createRewardForm();
    }

    public createRewardForm(): void {
        this.rewardForm = this.fb.group({
            name: [this.reward ? this.reward.name : null, Validators.required],
            photo: [this.photo],
            points: [this.reward ? this.reward.points : null],
            stock: [this.reward ? this.reward.stock : null],
            description: [this.reward ? this.reward.description : null]
        });
    }


    public createReward(): void {
        const reward: RewardProduct = {
            name: this.rewardForm.get('name').value,
            photo: this.rewardForm.get('photo').value,
            points: this.rewardForm.get('points').value,
            stock: this.rewardForm.get('stock').value,
            description: this.rewardForm.get('description').value,

        };
        this.rewardService.createReward(reward).then(() => {
            this.router.navigate(['rewards-catalog']);
        });
    }

    public editReward(): void {
        const reward: RewardProduct = {
            id: this.reward.id,
            name: this.rewardForm.get('name').value,
            photo: this.photo,
            points: this.rewardForm.get('points').value,
            stock: this.rewardForm.get('stock').value,
            description: this.rewardForm.get('description').value,

        };
        this.rewardService.updateReward(reward).then(() => {
            this.router.navigate(['rewards-catalog']);
        });
    }

    public async uploadNewPhoto(): Promise<void> {
        const cameraOptions: CameraOptions = await this.utilsService.actionSheetCameraOptions();
        const preview = await this.camera.getPicture(cameraOptions);
        const base64Image = 'data:image / jpeg;base64,' + preview;
        this.isSpinning = true;
        const preset = 'gfllyeot';
        const url = await this.utilsService.uploadBase64ImageToCloudinary(base64Image, preset);
        this.isSpinning = false;
        this.photo = url;
        this.photoHasChanged = true;
    }

}

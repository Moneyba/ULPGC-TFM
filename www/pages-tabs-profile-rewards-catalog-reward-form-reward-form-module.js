(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-profile-rewards-catalog-reward-form-reward-form-module"],{

/***/ "./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title *ngIf=\"!reward?.id\">New Reward</ion-title>\n    <ion-title *ngIf=\"reward?.id\">Edit Reward</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"rewardForm\">\n    <div class=\"reward-photo\" padding-top>\n      <ion-avatar>\n        <img [src]=\"photo\" (click)=\"uploadNewPhoto()\">\n      </ion-avatar>\n    </div>\n    <ion-item>\n      <ion-label>Display Name</ion-label>\n      <ion-input formControlName=\"name\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Points</ion-label>\n      <ion-input formControlName=\"points\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Stock</ion-label>\n      <ion-input formControlName=\"stock\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input formControlName=\"description\"></ion-input>\n    </ion-item>\n\n\n  </form>\n\n</ion-content>\n<ion-footer >\n  <ion-button expand=\"full\" type=\"submit\" (click)=\"createReward()\" margin-bottom\n              [disabled]=\"rewardForm.invalid\" *ngIf=\"!reward?.id\">\n    Save\n  </ion-button>\n  <ion-button expand=\"full\" type=\"submit\" (click)=\"editReward()\" margin-bottom\n              [disabled]=\"rewardForm.invalid\" *ngIf=\"reward?.id\">\n    Save\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reward-photo ion-avatar {\n  margin: 0 auto;\n  width: 200px;\n  height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9yZXdhcmRzLWNhdGFsb2cvcmV3YXJkLWZvcm0vcmV3YXJkLWZvcm0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9wcm9maWxlL3Jld2FyZHMtY2F0YWxvZy9yZXdhcmQtZm9ybS9yZXdhcmQtZm9ybS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucmV3YXJkLXBob3RvIGlvbi1hdmF0YXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RewardFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardFormPage", function() { return RewardFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/utils.service */ "./src/app/core/services/utils.service.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _core_services_reward_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/reward.service */ "./src/app/core/services/reward.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RewardFormPage = /** @class */ (function () {
    function RewardFormPage(utilsService, loadingService, camera, fb, rewardService, route, router) {
        var _this = this;
        this.utilsService = utilsService;
        this.loadingService = loadingService;
        this.camera = camera;
        this.fb = fb;
        this.rewardService = rewardService;
        this.route = route;
        this.router = router;
        this.photoHasChanged = false;
        this.photo = '/assets/icon/favicon.jpg';
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.reward = _this.router.getCurrentNavigation().extras.state.reward;
                _this.photo = _this.reward ? _this.reward.photo : '/assets/icon/favicon.jpg';
            }
        });
    }
    RewardFormPage.prototype.ngOnInit = function () {
        this.createRewardForm();
    };
    RewardFormPage.prototype.createRewardForm = function () {
        this.rewardForm = this.fb.group({
            name: [this.reward ? this.reward.name : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            photo: [this.photo],
            points: [this.reward ? this.reward.points : null],
            stock: [this.reward ? this.reward.stock : null],
            description: [this.reward ? this.reward.description : null]
        });
    };
    RewardFormPage.prototype.createReward = function () {
        var _this = this;
        var reward = {
            name: this.rewardForm.get('name').value,
            photo: this.rewardForm.get('photo').value,
            points: this.rewardForm.get('points').value,
            stock: this.rewardForm.get('stock').value,
            description: this.rewardForm.get('description').value,
        };
        this.rewardService.createReward(reward).then(function () {
            _this.router.navigate(['tabs/tabs/profile']);
        });
    };
    RewardFormPage.prototype.editReward = function () {
        var _this = this;
        var reward = {
            id: this.reward.id,
            name: this.rewardForm.get('name').value,
            photo: this.photo,
            points: this.rewardForm.get('points').value,
            stock: this.rewardForm.get('stock').value,
            description: this.rewardForm.get('description').value,
        };
        this.rewardService.updateReward(reward).then(function () {
            _this.router.navigate(['tabs/tabs/profile']);
        });
    };
    RewardFormPage.prototype.uploadNewPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions, preview, base64Image, preset, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utilsService.actionSheetCameraOptions()];
                    case 1:
                        cameraOptions = _a.sent();
                        return [4 /*yield*/, this.camera.getPicture(cameraOptions)];
                    case 2:
                        preview = _a.sent();
                        base64Image = 'data:image / jpeg;base64,' + preview;
                        this.loadingService.presentLoading();
                        preset = 'gfllyeot';
                        return [4 /*yield*/, this.utilsService.uploadBase64ImageToCloudinary(base64Image, preset)];
                    case 3:
                        url = _a.sent();
                        this.loadingService.dissmissLoading();
                        this.photo = url;
                        this.photoHasChanged = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    RewardFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reward',
            template: __webpack_require__(/*! ./reward-form-page.component.html */ "./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.html"),
            styles: [__webpack_require__(/*! ./reward-form-page.component.scss */ "./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_reward_service__WEBPACK_IMPORTED_MODULE_6__["RewardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RewardFormPage);
    return RewardFormPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RewardFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardFormPageModule", function() { return RewardFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reward_form_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reward-form-page.component */ "./src/app/pages/tabs/profile/rewards-catalog/reward-form/reward-form-page.component.ts");







var routes = [
    {
        path: '',
        component: _reward_form_page_component__WEBPACK_IMPORTED_MODULE_6__["RewardFormPage"]
    }
];
var RewardFormPageModule = /** @class */ (function () {
    function RewardFormPageModule() {
    }
    RewardFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reward_form_page_component__WEBPACK_IMPORTED_MODULE_6__["RewardFormPage"]]
        })
    ], RewardFormPageModule);
    return RewardFormPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-profile-rewards-catalog-reward-form-reward-form-module.js.map
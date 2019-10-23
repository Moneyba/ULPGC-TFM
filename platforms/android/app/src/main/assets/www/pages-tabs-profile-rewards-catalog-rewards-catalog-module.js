(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-profile-rewards-catalog-rewards-catalog-module"],{

/***/ "./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.module.ts ***!
  \******************************************************************************/
/*! exports provided: RewardsCatalogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsCatalogPageModule", function() { return RewardsCatalogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rewards_catalog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewards-catalog.page */ "./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _rewards_catalog_page__WEBPACK_IMPORTED_MODULE_6__["RewardsCatalogPage"]
    }
];
var RewardsCatalogPageModule = /** @class */ (function () {
    function RewardsCatalogPageModule() {
    }
    RewardsCatalogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rewards_catalog_page__WEBPACK_IMPORTED_MODULE_6__["RewardsCatalogPage"]]
        })
    ], RewardsCatalogPageModule);
    return RewardsCatalogPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{ 'REWARDS.rewards' | translate:params }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"points-button-container\">\n    <ion-button text-center fill=clear (click)=\"changePointsBoxState()\">\n      <ion-card-title>{{currentUser.points.currentPoints}}<span id=\"pts\"> pts</span></ion-card-title>\n\n        <ion-icon name=\"arrow-dropdown\" *ngIf=\"!showSearchContainer\"></ion-icon>\n        <ion-icon name=\"arrow-dropup\" *ngIf=\"showSearchContainer\"></ion-icon>\n\n    </ion-button>\n  </div>\n  <div [hidden]=\"!showSearchContainer\" class=\"points-container\">\n    <ion-item>\n      <ion-label>{{ 'REWARDS.earned' | translate:params }}:\n        {{currentUser.points.currentPoints + currentUser.points.blockedPoints + currentUser.points.exchangedPoints}} pts</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{ 'REWARDS.used' | translate:params }}: {{currentUser.points.exchangedPoints}} pts</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{ 'REWARDS.onHold' | translate:params }}: {{currentUser.points.blockedPoints}} pts</ion-label>\n    </ion-item>\n  </div>\n  <ion-list *ngFor=\"let reward of rewards\" class=\"list-rewards\">\n    <ion-item-sliding>\n      <ion-item (click)=\"goToRewardDetailsPage (reward)\" class=\"chat-item\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"reward.photo\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{reward.name}}</h3>\n          <p>{{ 'REWARDS.exchange' | translate:params }} {{reward.points}} pts</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options *ngIf=\"currentUser?.isAdmin\"  side=\"end\">\n        <ion-item-option color=\"success\" (click)=\"editReward(reward)\">\n          <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"presentAlertConfirm(reward.id)\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab *ngIf=\"currentUser?.isAdmin\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button expand=\"block\" color=\"secondary\" (click)=\"addReward()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".points-button-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  height: auto;\n  margin-top: 20px; }\n  .points-button-container ion-card-title {\n    font-size: 35px; }\n  .points-button-container ion-card-title #pts {\n      text-transform: lowercase;\n      font-size: 18px; }\n  .points-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  margin: 0 20px; }\n  .list-rewards {\n  margin-right: 20px;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9yZXdhcmRzLWNhdGFsb2cvcmV3YXJkcy1jYXRhbG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBSmxCO0lBTUksZUFBZSxFQUFBO0VBTm5CO01BUU0seUJBQXlCO01BQ3pCLGVBQWUsRUFBQTtFQUtyQjtFQUNFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBO0VBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9wcm9maWxlL3Jld2FyZHMtY2F0YWxvZy9yZXdhcmRzLWNhdGFsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50cy1idXR0b24tY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBpb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgI3B0cyB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxufVxuXG4ucG9pbnRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4ubGlzdC1yZXdhcmRze1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.ts ***!
  \****************************************************************************/
/*! exports provided: RewardsCatalogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsCatalogPage", function() { return RewardsCatalogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_reward_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/reward.service */ "./src/app/core/services/reward.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RewardsCatalogPage = /** @class */ (function () {
    function RewardsCatalogPage(router, route, rewardService, alertController) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.rewardService = rewardService;
        this.alertController = alertController;
        this.showSearchContainer = false;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.currentUser = _this.router.getCurrentNavigation().extras.state.user;
                console.log(_this.currentUser);
            }
        });
        this.getRewards();
    }
    RewardsCatalogPage.prototype.ngOnInit = function () {
    };
    RewardsCatalogPage.prototype.getRewards = function () {
        var _this = this;
        this.rewardService.getRewards().subscribe(function (rewards) { return _this.rewards = rewards; });
    };
    RewardsCatalogPage.prototype.changePointsBoxState = function () {
        this.showSearchContainer = !this.showSearchContainer;
    };
    RewardsCatalogPage.prototype.goToRewardDetailsPage = function (reward) {
        var navigationExtras = {
            state: {
                reward: reward,
                user: this.currentUser
            }
        };
        this.router.navigate(['reward-details'], navigationExtras);
    };
    RewardsCatalogPage.prototype.addReward = function () {
        this.router.navigateByUrl('reward-form');
    };
    RewardsCatalogPage.prototype.editReward = function (reward) {
        var navigationExtras = {
            state: {
                reward: reward
            }
        };
        this.router.navigate(['reward-form'], navigationExtras);
    };
    RewardsCatalogPage.prototype.presentAlertConfirm = function (rewardId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eliminar Recompensa',
                            message: '¿Estás seguro de que quiere eliminar este producto?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Sí',
                                    handler: function () {
                                        _this.rewardService.deleteReward(rewardId);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RewardsCatalogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rewards-catalog',
            template: __webpack_require__(/*! ./rewards-catalog.page.html */ "./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.html"),
            styles: [__webpack_require__(/*! ./rewards-catalog.page.scss */ "./src/app/pages/tabs/profile/rewards-catalog/rewards-catalog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_reward_service__WEBPACK_IMPORTED_MODULE_3__["RewardService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], RewardsCatalogPage);
    return RewardsCatalogPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-profile-rewards-catalog-rewards-catalog-module.js.map
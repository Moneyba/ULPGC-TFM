(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-profile-rewards-catalog-reward-details-reward-details-module"],{

/***/ "./src/app/core/services/reward-request.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/reward-request.service.ts ***!
  \*********************************************************/
/*! exports provided: RewardRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardRequestService", function() { return RewardRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var RewardRequestService = /** @class */ (function () {
    function RewardRequestService(db) {
        this.db = db;
        this.collectionEndPoint = 'rewardRequests';
    }
    RewardRequestService.prototype.createRequest = function (request) {
        request.id = this.db.createPushId();
        return this.db.object(this.collectionEndPoint + "/" + request.id).set(request);
    };
    RewardRequestService.prototype.updateRequest = function (request) {
        return this.db.object(this.collectionEndPoint + "/" + request.id).update(request);
    };
    RewardRequestService.prototype.getRequests = function () {
        return this.db.list(this.collectionEndPoint).valueChanges();
    };
    RewardRequestService.prototype.getRequestsByRewardId = function (rewardId) {
        return this.db.list(this.collectionEndPoint, function (ref) { return ref.orderByChild('rewardId').equalTo(rewardId); }).valueChanges();
    };
    RewardRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], RewardRequestService);
    return RewardRequestService;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.module.ts ***!
  \********************************************************************************************/
/*! exports provided: RewardDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardDetailsPageModule", function() { return RewardDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reward_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reward-details.page */ "./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _reward_details_page__WEBPACK_IMPORTED_MODULE_6__["RewardDetailsPage"]
    }
];
var RewardDetailsPageModule = /** @class */ (function () {
    function RewardDetailsPageModule() {
    }
    RewardDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reward_details_page__WEBPACK_IMPORTED_MODULE_6__["RewardDetailsPage"]]
        })
    ], RewardDetailsPageModule);
    return RewardDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>{{ 'REWARDS.rewardDetails' | translate:params }}</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <div class=\"reward-photo\" padding-top>\n            <ion-avatar>\n                <img [src]=\"reward.photo\">\n            </ion-avatar>\n        </div>\n        <div text-center>\n            <h2>{{reward.name}}*</h2>\n            <ion-label class=\"reward-points-text\">-{{reward.points}} pts</ion-label>\n        </div>\n\n        <ion-item lines=\"none\">\n            <ion-label>{{ 'REWARDS.description' | translate:params }}: {{reward.description}}</ion-label>\n\n        </ion-item>\n\n        <p margin=\"0 10px\">*While it lasts</p>\n\n        <div text-center  *ngIf=\"currentUser?.isAdmin\">\n            <ion-button (click)=\"exchange()\" [disabled]=\"currentUser.points.currentPoints < reward.points\">\n                {{ 'REWARDS.exchange' | translate:params }} {{reward.points}} pts\n            </ion-button>\n        </div>\n    </ion-card>\n\n    <div class=\"exchange-button\" *ngIf=\"!currentUser?.isAdmin\">\n        <ion-button (click)=\"exchange()\" [disabled]=\"currentUser.points.currentPoints < reward.points\">\n            {{ 'REWARDS.exchange' | translate:params }} {{reward.points}} pts\n        </ion-button>\n    </div>\n\n    <ion-list *ngIf=\"requests && currentUser?.isAdmin\">\n        <ion-list-header>{{ 'REWARDS.requests' | translate:params }}</ion-list-header>\n        <ion-item-sliding *ngFor=\"let request of requests\">\n            <ion-item>\n                <ion-avatar slot=\"start\" (click)=\"goToUserDetailsPage(request.userId)\">\n                    <img [src]=\"request.user?.photo\">\n                </ion-avatar>\n                <ion-label>\n                    <h3>{{request.user?.name}}</h3>\n                    <label> <a> Status: </a>{{request.state}}</label>\n                </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"success\" (click)=\"acceptRequest(request, request.user)\"\n                                 [disabled]=\"request.state == 'ACCEPTED'\">\n                    <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon>\n                </ion-item-option>\n                <ion-item-option color=\"danger\" (click)=\"refuseRequest(request, request.user)\"\n                                 [disabled]=\"request.state == 'REFUSED'\">\n                    <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  padding: 10px;\n  height: 70%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n  ion-card .reward-photo ion-avatar {\n    margin: 0 auto;\n    width: 200px;\n    height: 200px; }\n  ion-card .reward-points-text {\n    font-size: 20px; }\n  .request-button {\n  font-size: 20px; }\n  .exchange-button {\n  height: 23%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9yZXdhcmRzLWNhdGFsb2cvcmV3YXJkLWRldGFpbHMvcmV3YXJkLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNDQUE4QjtVQUE5Qiw4QkFBOEIsRUFBQTtFQUxoQztJQVFJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBVmpCO0lBY0ksZUFBZSxFQUFBO0VBSW5CO0VBQ0UsZUFBZSxFQUFBO0VBR2pCO0VBQ0UsV0FBVztFQUNYLHFCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9wcm9maWxlL3Jld2FyZHMtY2F0YWxvZy9yZXdhcmQtZGV0YWlscy9yZXdhcmQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLnJld2FyZC1waG90byBpb24tYXZhdGFyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5yZXdhcmQtcG9pbnRzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG59XG4ucmVxdWVzdC1idXR0b24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5leGNoYW5nZS1idXR0b24ge1xuICBoZWlnaHQ6IDIzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.ts ***!
  \******************************************************************************************/
/*! exports provided: RewardDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardDetailsPage", function() { return RewardDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_reward_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/reward-request.service */ "./src/app/core/services/reward-request.service.ts");
/* harmony import */ var _shared_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/ui.utils */ "./src/app/shared/ui.utils.ts");
/* harmony import */ var _core_services_reward_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/reward.service */ "./src/app/core/services/reward.service.ts");







var RewardDetailsPage = /** @class */ (function () {
    function RewardDetailsPage(route, router, userService, rewardService, rewardRequestService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.rewardService = rewardService;
        this.rewardRequestService = rewardRequestService;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.reward = _this.router.getCurrentNavigation().extras.state.reward;
                _this.currentUser = _this.router.getCurrentNavigation().extras.state.user;
            }
        });
    }
    RewardDetailsPage.prototype.ngOnInit = function () {
        this.getRequests();
    };
    RewardDetailsPage.prototype.exchange = function () {
        this.currentUser.points.currentPoints -= this.reward.points;
        this.currentUser.points.blockedPoints += this.reward.points;
        this.createRequest();
        this.userService.updateUser(this.currentUser);
    };
    RewardDetailsPage.prototype.createRequest = function () {
        var _this = this;
        var request = {
            dateTime: new Date().getTime(),
            rewardId: this.reward.id,
            userId: this.currentUser.id,
            state: _shared_ui_utils__WEBPACK_IMPORTED_MODULE_5__["State"].pending
        };
        this.rewardRequestService.createRequest(request).then(function () {
            return _this.router.navigate(['rewards-catalog']);
        });
    };
    RewardDetailsPage.prototype.getRequests = function () {
        var _this = this;
        this.rewardRequestService.getRequestsByRewardId(this.reward.id).subscribe(function (requests) {
            _this.requests = requests;
            requests.forEach(function (request, index) { return _this.getUser(request.userId, index); });
        });
    };
    RewardDetailsPage.prototype.getUser = function (userId, index) {
        var _this = this;
        this.userService.getUser(userId).subscribe(function (user) { return _this.requests[index].user = user; });
    };
    RewardDetailsPage.prototype.goToUserDetailsPage = function (userId) {
        var navigationExtras = {
            state: {
                userId: userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    RewardDetailsPage.prototype.acceptRequest = function (request, user) {
        var _this = this;
        if (this.reward.stock > 0) {
            request.state = _shared_ui_utils__WEBPACK_IMPORTED_MODULE_5__["State"].accepted;
            this.reward.stock--;
            user.points.currentPoints -= this.reward.points;
            user.points.exchangedPoints += this.reward.points;
            user.points.blockedPoints -= this.reward.points;
            this.rewardRequestService.updateRequest(request);
            this.rewardService.updateReward(this.reward);
            this.userService.updateUser(user).then(function () { return _this.getRequests(); });
        }
    };
    RewardDetailsPage.prototype.refuseRequest = function (request, user) {
        var _this = this;
        request.state = _shared_ui_utils__WEBPACK_IMPORTED_MODULE_5__["State"].refused;
        user.points.currentPoints += this.reward.points;
        user.points.blockedPoints -= this.reward.points;
        this.rewardRequestService.updateRequest(request);
        this.userService.updateUser(user).then(function () { return _this.getRequests(); });
    };
    RewardDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reward-details',
            template: __webpack_require__(/*! ./reward-details.page.html */ "./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.html"),
            styles: [__webpack_require__(/*! ./reward-details.page.scss */ "./src/app/pages/tabs/profile/rewards-catalog/reward-details/reward-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _core_services_reward_service__WEBPACK_IMPORTED_MODULE_6__["RewardService"],
            _core_services_reward_request_service__WEBPACK_IMPORTED_MODULE_4__["RewardRequestService"]])
    ], RewardDetailsPage);
    return RewardDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-profile-rewards-catalog-reward-details-reward-details-module.js.map
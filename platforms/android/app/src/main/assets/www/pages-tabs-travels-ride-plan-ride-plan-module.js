(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-travels-ride-plan-ride-plan-module"],{

/***/ "./src/app/pages/tabs/travels/ride-plan/ride-plan.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/travels/ride-plan/ride-plan.module.ts ***!
  \******************************************************************/
/*! exports provided: RidePlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePlanPageModule", function() { return RidePlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ride_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ride-plan.page */ "./src/app/pages/tabs/travels/ride-plan/ride-plan.page.ts");







var routes = [
    {
        path: '',
        component: _ride_plan_page__WEBPACK_IMPORTED_MODULE_6__["RidePlanPage"]
    }
];
var RidePlanPageModule = /** @class */ (function () {
    function RidePlanPageModule() {
    }
    RidePlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ride_plan_page__WEBPACK_IMPORTED_MODULE_6__["RidePlanPage"]]
        })
    ], RidePlanPageModule);
    return RidePlanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/travels/ride-plan/ride-plan.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/travels/ride-plan/ride-plan.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ride Plan</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>{{rideTimeDate | date:'dd MMM h:mm'}} </ion-card-subtitle>\n      <ion-card-title>{{ride.originName}}\n        <ion-icon name=\"arrow-round-forward\"></ion-icon>\n        {{ride.destinationName}}\n      </ion-card-title>\n      <ion-item>\n        <ion-avatar>\n          <img [src]=\"driver?.photo || '/assets/icon/favicon.png'\">\n        </ion-avatar>\n        <ion-label>\n          {{driver?.name}}\n        </ion-label>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-label>Passengers:</ion-label>\n      <ion-list *ngIf=\"isDriver\" lines>\n        <ion-item *ngFor=\"let user of ride.seatedUsers\" (click)=\"goToUserDetailsPage(user.id)\">\n          <ion-avatar>\n            <img [src]=\"user?.photo || '/assets/icon/favicon.png'\">\n          </ion-avatar>\n          <ion-label>\n            {{user?.name}}\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"!ride.seatedUsers\">\n          <ion-label>No passengers</ion-label>\n        </ion-item>\n\n\n      </ion-list>\n      <ion-list *ngIf=\"!isDriver\" lines=\"none\">\n        <ion-item>\n          <ion-label>{{ride.numberOfSeats}} seats available</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>status: {{request?.state}} </ion-label>\n        </ion-item>\n      </ion-list>\n\n\n      <ion-button (click)=\"editRide()\" *ngIf=\"isDriver\">Edit Ride</ion-button>\n      <ion-button  (click)=\"delete()\">Cancel Ride</ion-button>\n\n    <ion-button (click)=\"openModal()\" *ngIf=\"ride.seatedUserIds\">Start trip</ion-button>\n\n      <!-- <p *ngIf=\"dataReturned\">{{dataReturned}}</p>-->\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let request of requests\" (click)=\"goToChatNotification(request)\">\n    <ion-card-content>\n      <ion-avatar>\n        <img src=\"{{request.user?.photo}}\">\n      </ion-avatar>\n      <ion-label>{{request.user?.name}}</ion-label>\n      <ion-label>Status: {{request.state}}</ion-label>\n      <br>\n      <ion-button (click)=\"acceptBooking()\">Accept</ion-button>\n      <ion-button (click)=\"refuseBooking()\">Refuse</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/travels/ride-plan/ride-plan.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/travels/ride-plan/ride-plan.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdHJhdmVscy9yaWRlLXBsYW4vcmlkZS1wbGFuLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tabs/travels/ride-plan/ride-plan.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/travels/ride-plan/ride-plan.page.ts ***!
  \****************************************************************/
/*! exports provided: RidePlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePlanPage", function() { return RidePlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");
/* harmony import */ var _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/request.service */ "./src/app/core/services/request.service.ts");
/* harmony import */ var _ride_ride_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ride/ride.page */ "./src/app/pages/tabs/travels/ride/ride.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");








var RidePlanPage = /** @class */ (function () {
    function RidePlanPage(route, router, rideService, requestSerivce, modalController, userService, requestService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.rideService = rideService;
        this.requestSerivce = requestSerivce;
        this.modalController = modalController;
        this.userService = userService;
        this.requestService = requestService;
        this.ride = null;
        this.request = null;
        this.requests = [];
        this.currentUser = this.userService.user.getValue();
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.isDriver = _this.router.getCurrentNavigation().extras.state.isDriver;
                var rideId = _this.router.getCurrentNavigation().extras.state.rideId;
                _this.getRide(rideId);
                _this.rideTimeDate = new Date(_this.ride.dateTime);
                _this.userService.getUser(_this.ride.userId).subscribe(function (user) {
                    return _this.driver = user;
                });
            }
        });
    }
    RidePlanPage.prototype.ngOnInit = function () {
        if (this.currentUser.id === this.ride.userId) {
            this.getRequests();
        }
    };
    RidePlanPage.prototype.getRide = function (rideId) {
        var _this = this;
        this.rideService.getRide(rideId).subscribe(function (ride) {
            return _this.ride = ride;
        });
    };
    RidePlanPage.prototype.goToUserDetailsPage = function (userId) {
        var navigationExtras = {
            state: {
                userId: userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    RidePlanPage.prototype.editRide = function () {
        var navigationExtras = {
            state: {
                ride: this.ride
            }
        };
        this.router.navigate(['ride-form'], navigationExtras);
    };
    RidePlanPage.prototype.delete = function () {
        if (this.isDriver) {
            this.deleteRide();
        }
        else {
            this.deleteRequest();
        }
    };
    RidePlanPage.prototype.deleteRide = function () {
        var _this = this;
        if (this.ride.seatedUserIds) {
            // Send notification to passengers
        }
        this.rideService.deleteRide(this.ride.id).then(function () {
            return _this.router.navigate(['tabs']);
        });
    };
    RidePlanPage.prototype.deleteRequest = function () {
        // Send notification to driver
        var _this = this;
        this.requestSerivce.deleteRequest(this.request.id).then(function () {
            return _this.router.navigate(['tabs']);
        });
    };
    RidePlanPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _ride_ride_page__WEBPACK_IMPORTED_MODULE_5__["RidePage"],
                            componentProps: {
                                ride: this.ride
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.dataReturned = dataReturned.data;
                                // alert('Modal Sent Data :'+ dataReturned);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /*
      public acceptBooking(): void {
        this.request.ride.seatedUserIds = [];
        if (this.request.ride.numberOfSeats > 0) {
          this.request.ride.numberOfSeats--;
        }
        this.request.ride.seatedUserIds.push(this.request.userId);
        this.rideService.updateRide(this.request.ride);
        this.request.state = State.accepted;
        this.requestService.updateRequest(this.request);
    
      }
    
      public refuseBooking(): void {
        this.request.state = State.refused;
        this.requestService.updateRequest(this.request);
      }*/
    RidePlanPage.prototype.getRequests = function () {
        var _this = this;
        this.requestService.getRequestsByRideId(this.ride.id).subscribe(function (requests) {
            _this.requests = requests;
            requests.forEach(function (request, index) { return _this.getUser(request.userId, index); });
            console.log(requests);
        });
    };
    RidePlanPage.prototype.getUser = function (userId, index) {
        var _this = this;
        console.log(userId);
        this.userService.getUser(userId).subscribe(function (user) { return _this.requests[index].user = user; });
    };
    RidePlanPage.prototype.goToChatNotification = function (notification) {
        var navigationExtras = {
            state: {
                notification: notification
            }
        };
        this.router.navigate(['notification'], navigationExtras);
    };
    RidePlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ride-plan',
            template: __webpack_require__(/*! ./ride-plan.page.html */ "./src/app/pages/tabs/travels/ride-plan/ride-plan.page.html"),
            styles: [__webpack_require__(/*! ./ride-plan.page.scss */ "./src/app/pages/tabs/travels/ride-plan/ride-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_3__["RideService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]])
    ], RidePlanPage);
    return RidePlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-travels-ride-plan-ride-plan-module.js.map
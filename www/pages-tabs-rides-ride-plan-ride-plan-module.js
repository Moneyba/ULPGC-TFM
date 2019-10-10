(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-rides-ride-plan-ride-plan-module"],{

/***/ "./src/app/core/services/ride.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/ride.service.ts ***!
  \***********************************************/
/*! exports provided: RideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideService", function() { return RideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var RideService = /** @class */ (function () {
    function RideService(db) {
        this.db = db;
        this.collectionEndPoint = 'rides';
    }
    RideService.prototype.createRide = function (ride) {
        ride.id = this.db.createPushId();
        return this.db.object(this.collectionEndPoint + "/" + ride.id).set(ride);
    };
    RideService.prototype.updateRide = function (ride) {
        return this.db.object(this.collectionEndPoint + "/" + ride.id).update(ride);
    };
    RideService.prototype.deleteRide = function (rideId) {
        return this.db.object(this.collectionEndPoint + "/" + rideId).remove();
    };
    RideService.prototype.getRides = function () {
        return this.db.list(this.collectionEndPoint, function (ref) { return ref.orderByChild('dateTime')
            .startAt(new Date().getTime()); }).valueChanges();
    };
    RideService.prototype.getRidesByUserId = function (userId) {
        return this.db.list(this.collectionEndPoint, function (ref) { return ref.orderByChild('userId').equalTo(userId); }).valueChanges();
    };
    RideService.prototype.getRide = function (rideId) {
        return this.db.object(this.collectionEndPoint + "/" + rideId).valueChanges();
    };
    RideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], RideService);
    return RideService;
}());



/***/ }),

/***/ "./src/app/pages/tabs/rides/ride-plan/ride-plan.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/rides/ride-plan/ride-plan.module.ts ***!
  \****************************************************************/
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
/* harmony import */ var _ride_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ride-plan.page */ "./src/app/pages/tabs/rides/ride-plan/ride-plan.page.ts");
/* harmony import */ var _ride_popover_ride_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ride-popover/ride-popover.component */ "./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");










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
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBEavHbLwLZhyr1L8psKmof-84BlLqbRn8',
                    libraries: ['places']
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_9__["AgmDirectionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ride_plan_page__WEBPACK_IMPORTED_MODULE_6__["RidePlanPage"], _ride_popover_ride_popover_component__WEBPACK_IMPORTED_MODULE_7__["RidePopoverComponent"]],
            entryComponents: [_ride_popover_ride_popover_component__WEBPACK_IMPORTED_MODULE_7__["RidePopoverComponent"]]
        })
    ], RidePlanPageModule);
    return RidePlanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/rides/ride-plan/ride-plan.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/rides/ride-plan/ride-plan.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Ride Plan</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-icon id=\"icon-more\" name=\"md-more\" slot=\"end\" (click)=\"presentPopover($event)\"></ion-icon>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <div class=\"map\">\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" [streetViewControl]=\"false\"\n                     [zoomControl]=\"false\">\n                <agm-direction *ngIf=\"direction\" [origin]=\"direction.origin\"\n                               [destination]=\"direction.destination\"></agm-direction>\n                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" *ngIf=\"!direction\"></agm-marker>\n            </agm-map>\n            <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button>\n                    <ion-icon name=\"pin\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </div>\n        <ion-item>\n            <label>Date and time: {{ride?.dateTime | date:'dd MMM h:mm'}}</label>\n        </ion-item>\n        <ion-item>\n            <label>{{ride?.originName}} - {{ride?.destinationName}}</label>\n        </ion-item>\n\n        <ion-list>\n            <ion-list-header>Passengers ({{passengers.length}} / {{ride?.numberOfSeats}})</ion-list-header>\n            <ion-item class=\"card-driver-container\" *ngFor=\"let user of passengers\">\n                <div class=\"user-info\"  (click)=\"goToUserDetailsPage(user?.id)\">\n                    <ion-avatar>\n                        <img [src]=\"user?.photo\">\n                    </ion-avatar>\n                    <label>\n                        {{user?.name}}\n                    </label>\n                </div>\n\n                <div class=\"request-buttons-container\">\n\n                    <ion-chip color=\"danger\" (click)=\"presentAlertConfirm(user)\">\n                        <ion-label>Remove</ion-label>\n                    </ion-chip>\n                </div>\n            </ion-item>\n\n            <ion-item *ngIf=\"!ride?.seatedUserIds\">\n                <ion-label>No passengers</ion-label>\n            </ion-item>\n        </ion-list>\n        <div class=\"footer\" *ngIf=\"ride?.seatedUserIds\">\n            <ion-button (click)=\"openModal()\">Start ride</ion-button>\n        </div>\n    </ion-card>\n\n    <ion-card mode=\"md\" *ngIf=\"requests\">\n        <ion-card-content>\n            <ion-list>\n                <ion-list-header>Requests</ion-list-header>\n                <ion-item class=\"card-driver-container\" *ngFor=\"let request of requests\">\n                    <div class=\"user-info\" (click)=\"goToUserDetailsPage(request.userId)\">\n                        <ion-avatar>\n                            <img [src]=\"request.user?.photo\">\n                        </ion-avatar>\n                        <label>{{request.user?.name}}</label>\n                        <label> <a> Status: </a>{{request.state}}</label>\n                    </div>\n\n                    <div class=\"request-buttons-container\" >\n\n                        <ion-icon (click)=\"acceptBooking(request)\" class=\"accept-button\" name=\"checkmark\"\n                                  color=\"success\" *ngIf=\"request.state === 'PENDING'\"></ion-icon>\n                        <ion-icon name=\"close\" color=\"danger\" (click)=\"refuseBooking(request)\"\n                                  *ngIf=\"request.state === 'PENDING'\"></ion-icon>\n\n                        <ion-chip color=\"success\" (click)=\"acceptBooking(request)\" *ngIf=\"request.state === 'REFUSED'\">\n                            <ion-label>Accept</ion-label>\n                        </ion-chip>\n\n                    </div>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/rides/ride-plan/ride-plan.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/rides/ride-plan/ride-plan.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card-driver-container {\n  display: -webkit-flex;\n  display: flex; }\n\n:host agm-map {\n  height: 300px; }\n\n:host .card-driver-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n\n:host .card-driver-container .user-info {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center;\n    width: 100%; }\n\n:host .card-driver-container .user-info ion-avatar {\n      width: 35px;\n      height: 35px; }\n\n:host .card-driver-container .user-info label {\n      margin-left: 10px; }\n\n:host .footer {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  margin: 10px; }\n\n:host .request-buttons-container {\n  display: -webkit-flex;\n  display: flex; }\n\n:host .request-buttons-container .accept-button {\n    --background: #0ec254;\n    text-align: center; }\n\n:host .request-buttons-container ion-icon {\n    font-size: 25px; }\n\n:host #icon-more {\n  font-size: 20px;\n  margin-right: 5px; }\n\n:host ion-button {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvcmlkZXMvcmlkZS1wbGFuL3JpZGUtcGxhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxxQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFIakI7RUFPSSxhQUFhLEVBQUE7O0FBUGpCO0VBV0kscUJBQWE7RUFBYixhQUFhO0VBQ2Isc0NBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQVpsQztJQWVNLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVyxFQUFBOztBQWpCakI7TUFvQlEsV0FBVztNQUNYLFlBQVksRUFBQTs7QUFyQnBCO01BeUJRLGlCQUFpQixFQUFBOztBQXpCekI7RUErQkkscUJBQWE7RUFBYixhQUFhO0VBQ2IsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFsQ2hCO0VBc0NJLHFCQUFhO0VBQWIsYUFBYSxFQUFBOztBQXRDakI7SUF5Q00scUJBQWE7SUFDYixrQkFBa0IsRUFBQTs7QUExQ3hCO0lBNkNNLGVBQWUsRUFBQTs7QUE3Q3JCO0VBbURJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFwRHJCO0VBd0RJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvcmlkZXMvcmlkZS1wbGFuL3JpZGUtcGxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgLmNhcmQtZHJpdmVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIGFnbS1tYXAge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICAuY2FyZC1kcml2ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC51c2VyLWluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5yZXF1ZXN0LWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmFjY2VwdC1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMGVjMjU0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICB9XG5cblxuICAjaWNvbi1tb3JlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/rides/ride-plan/ride-plan.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/rides/ride-plan/ride-plan.page.ts ***!
  \**************************************************************/
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
/* harmony import */ var _shared_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui.utils */ "./src/app/shared/ui.utils.ts");
/* harmony import */ var _ride_ride_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ride/ride.page */ "./src/app/pages/tabs/rides/ride/ride.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _ride_popover_ride_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ride-popover/ride-popover.component */ "./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");










var DirectionsService = google.maps.DirectionsService;

var RidePlanPage = /** @class */ (function () {
    function RidePlanPage(route, router, rideService, requestSerivce, modalController, userService, requestService, popoverController, mapsAPILoader, alertController) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.rideService = rideService;
        this.requestSerivce = requestSerivce;
        this.modalController = modalController;
        this.userService = userService;
        this.requestService = requestService;
        this.popoverController = popoverController;
        this.mapsAPILoader = mapsAPILoader;
        this.alertController = alertController;
        this.ride = null;
        this.request = null;
        this.passengers = [];
        this.requests = [];
        this.directionsService = new DirectionsService();
        this.currentUser = this.userService.user.getValue();
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                var rideId = _this.router.getCurrentNavigation().extras.state.rideId;
                _this.getRide(rideId);
            }
        });
    }
    RidePlanPage.prototype.ngOnInit = function () {
    };
    RidePlanPage.prototype.getDirection = function () {
        var _this = this;
        this.direction = {
            origin: this.ride.origin,
            destination: this.ride.destination,
            travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsService.route(this.direction, function (result) {
            _this.duration = result.routes[0].legs[0].duration.text;
            _this.distance = result.routes[0].legs[0].distance.text;
        });
    };
    RidePlanPage.prototype.getRide = function (rideId) {
        var _this = this;
        this.rideService.getRide(rideId).subscribe(function (ride) {
            _this.ride = ride;
            _this.rideTimeDate = new Date(_this.ride.dateTime);
            _this.getPassengers();
            _this.getRequests();
            _this.mapsAPILoader.load().then(function () {
                _this.getDirection();
            });
        });
    };
    RidePlanPage.prototype.getPassengers = function () {
        var _this = this;
        this.passengers = [];
        if (this.ride.seatedUserIds) {
            this.ride.seatedUserIds.forEach(function (userId, index) {
                _this.userService.getUser(userId).subscribe(function (user) { return _this.passengers[index] = user; });
            });
        }
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
    RidePlanPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _ride_ride_page__WEBPACK_IMPORTED_MODULE_6__["RidePage"],
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
    RidePlanPage.prototype.acceptBooking = function (request) {
        var _this = this;
        console.log(request.ride.numberOfSeats);
        if (this.ride.numberOfSeats > this.passengers.length) {
            if (!this.ride.seatedUserIds) {
                this.ride.seatedUserIds = [];
            }
            this.ride.seatedUserIds.push(request.userId);
            request.state = _shared_ui_utils__WEBPACK_IMPORTED_MODULE_5__["State"].accepted;
            request.ride = this.ride;
            this.requestService.updateRequest(request);
            this.rideService.updateRide(this.ride).then(function () { return _this.getRide(_this.ride.id); });
        }
    };
    RidePlanPage.prototype.refuseBooking = function (request) {
        request.state = _shared_ui_utils__WEBPACK_IMPORTED_MODULE_5__["State"].refused;
        this.requestService.updateRequest(request);
    };
    RidePlanPage.prototype.deleteUserFromRide = function (user) {
        var _this = this;
        this.requests.forEach(function (request) {
            if (request.userId === user.id) {
                request.state = _shared_ui_utils__WEBPACK_IMPORTED_MODULE_5__["State"].refused;
                request.ride = _this.ride;
                _this.requestService.updateRequest(request);
                _this.ride.seatedUserIds = _this.ride.seatedUserIds.filter(function (userId) { return userId !== user.id; });
                _this.rideService.updateRide(request.ride).then(function () { return _this.getRide(_this.ride.id); });
            }
        });
    };
    RidePlanPage.prototype.presentAlertConfirm = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Remove Passenger',
                            message: 'Are you sure you want to remove this passenger?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.deleteUserFromRide(user);
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
    RidePlanPage.prototype.presentPopover = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _ride_popover_ride_popover_component__WEBPACK_IMPORTED_MODULE_9__["RidePopoverComponent"],
                            event: event,
                            componentProps: {
                                ride: this.ride
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RidePlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ride-plan',
            template: __webpack_require__(/*! ./ride-plan.page.html */ "./src/app/pages/tabs/rides/ride-plan/ride-plan.page.html"),
            styles: [__webpack_require__(/*! ./ride-plan.page.scss */ "./src/app/pages/tabs/rides/ride-plan/ride-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_3__["RideService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"],
            _agm_core__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], RidePlanPage);
    return RidePlanPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-list-header>Ride options</ion-list-header>\n  <ion-item button (click)=\"editRide()\">Edit Ride</ion-item>\n  <ion-item button (click)=\"presentAlertConfirm()\">Delete Ride</ion-item>\n</ion-list>\n"

/***/ }),

/***/ "./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvcmlkZXMvcmlkZS1wbGFuL3JpZGUtcG9wb3Zlci9yaWRlLXBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RidePopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePopoverComponent", function() { return RidePopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");





var RidePopoverComponent = /** @class */ (function () {
    function RidePopoverComponent(router, navParams, popoverController, rideService, alertController) {
        this.router = router;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.rideService = rideService;
        this.alertController = alertController;
        this.ride = this.navParams.data.ride;
    }
    RidePopoverComponent.prototype.ngOnInit = function () { };
    RidePopoverComponent.prototype.editRide = function () {
        var navigationExtras = {
            state: {
                ride: this.ride
            }
        };
        this.popoverController.dismiss();
        this.router.navigate(['ride-form'], navigationExtras);
    };
    RidePopoverComponent.prototype.deleteRide = function () {
        var _this = this;
        if (this.ride.seatedUserIds) {
            // Send notification to passengers
        }
        this.popoverController.dismiss();
        this.rideService.deleteRide(this.ride.id).then(function () { return _this.router.navigateByUrl('tabs/tabs/rides'); });
    };
    RidePopoverComponent.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Ride',
                            message: 'Are you sure you want to cancel this ride?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.deleteRide();
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
    RidePopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ride-popover',
            template: __webpack_require__(/*! ./ride-popover.component.html */ "./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.html"),
            styles: [__webpack_require__(/*! ./ride-popover.component.scss */ "./src/app/pages/tabs/rides/ride-plan/ride-popover/ride-popover.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_4__["RideService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RidePopoverComponent);
    return RidePopoverComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-rides-ride-plan-ride-plan-module.js.map
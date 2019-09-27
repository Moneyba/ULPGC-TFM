(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-home-ride-details-ride-details-module"],{

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

/***/ "./src/app/pages/tabs/home/ride-details/ride-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-details/ride-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: RideDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideDetailsPageModule", function() { return RideDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ride_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ride-details.page */ "./src/app/pages/tabs/home/ride-details/ride-details.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");









var routes = [
    {
        path: '',
        component: _ride_details_page__WEBPACK_IMPORTED_MODULE_6__["RideDetailsPage"]
    }
];
var RideDetailsPageModule = /** @class */ (function () {
    function RideDetailsPageModule() {
    }
    RideDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBEavHbLwLZhyr1L8psKmof-84BlLqbRn8',
                    libraries: ['places']
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_8__["AgmDirectionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ride_details_page__WEBPACK_IMPORTED_MODULE_6__["RideDetailsPage"]]
        })
    ], RideDetailsPageModule);
    return RideDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/home/ride-details/ride-details.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-details/ride-details.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Ride Details</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <div class=\"map\">\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" [streetViewControl]=\"false\"\n                     [zoomControl]=\"false\">\n                <agm-direction *ngIf=\"direction\" [origin]=\"direction.origin\"\n                               [destination]=\"direction.destination\"></agm-direction>\n                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" *ngIf=\"!direction\"></agm-marker>\n            </agm-map>\n            <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button>\n                    <ion-icon name=\"pin\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </div>\n        <ion-item class=\"card-driver-container\">\n            <div class=\"user-info\" (click)=\"goToDriverDetailsPage()\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"user?.photo\">\n                </ion-avatar>\n                <div class=\"user-name\">\n                    <label>{{user?.name}}</label>\n                    <div>\n                        <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n                        <label>{{user?.averageRating}}/5 ({{user?.numberOfRatings}})</label>\n                    </div>\n                </div>\n            </div>\n            <ion-button (click)=\"contactTheDriver()\">Contact</ion-button>\n        </ion-item>\n        <ion-item>\n            <label>From: {{ride.originName}}</label>\n        </ion-item>\n        <ion-item>\n            <label>To: {{ride.destinationName}}</label>\n        </ion-item>\n        <ion-item>\n            <label>Date and time: {{ride?.dateTime | date:'dd MMM h:mm'}}</label>\n        </ion-item>\n        <ion-item >\n            <label>Seats Available: {{availableSeats}}/{{ride?.numberOfSeats}}</label>\n            <label *ngIf=\"availableSeats == 0\" id=\"no-seats-text\" slot=\"end\">no seats available</label>\n        </ion-item>\n\n        <div class=\"footer\" *ngIf=\"!isBooked && availableSeats > 0 && ride.userId != currentUser.id\">\n            <ion-button (click)=\"createRequest()\">Book</ion-button>\n        </div>\n        <p *ngIf=\"isBooked\" text-center>You have already booked this ride ;)</p>\n    </ion-card>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/tabs/home/ride-details/ride-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-details/ride-details.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card agm-map {\n  height: 300px; }\n\nion-card .card-driver-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n\nion-card .card-driver-container .user-info {\n    margin: 10px;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center;\n    width: 100%; }\n\nion-card .card-driver-container .user-info ion-avatar {\n      width: 35px;\n      height: 35px; }\n\nion-card .card-driver-container .user-info .user-name {\n      margin-left: 10px;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-flex-direction: column;\n              flex-direction: column; }\n\nion-card #no-seats-text {\n  color: red; }\n\nion-card .footer {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9yaWRlLWRldGFpbHMvcmlkZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGFBQWEsRUFBQTs7QUFIakI7RUFPSSxxQkFBYTtFQUFiLGFBQWE7RUFDYixzQ0FBOEI7VUFBOUIsOEJBQThCLEVBQUE7O0FBUmxDO0lBV00sWUFBWTtJQUNaLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVyxFQUFBOztBQWRqQjtNQWlCUSxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQWxCcEI7TUFzQlEsaUJBQWlCO01BQ2pCLHFCQUFhO01BQWIsYUFBYTtNQUNiLDhCQUFzQjtjQUF0QixzQkFBc0IsRUFBQTs7QUF4QjlCO0VBK0JJLFVBQVUsRUFBQTs7QUEvQmQ7RUFvQ0kscUJBQWE7RUFBYixhQUFhO0VBQ2IsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9yaWRlLWRldGFpbHMvcmlkZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcblxuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLmNhcmQtZHJpdmVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAudXNlci1pbmZvIHtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgfVxuXG4gICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAjbm8tc2VhdHMtdGV4dCB7XG4gICAgY29sb3I6IHJlZDtcblxuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tabs/home/ride-details/ride-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-details/ride-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: RideDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideDetailsPage", function() { return RideDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/request.service */ "./src/app/core/services/request.service.ts");
/* harmony import */ var _shared_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/ui.utils */ "./src/app/shared/ui.utils.ts");
/* harmony import */ var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/chat.service */ "./src/app/core/services/chat.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var DirectionsService = google.maps.DirectionsService;


var RideDetailsPage = /** @class */ (function () {
    function RideDetailsPage(route, router, requestService, chatService, userService, rideService, db, mapsAPILoader, toastController) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.chatService = chatService;
        this.userService = userService;
        this.rideService = rideService;
        this.db = db;
        this.mapsAPILoader = mapsAPILoader;
        this.toastController = toastController;
        this.isBooked = false;
        this.directionsService = new DirectionsService();
        this.currentUser = this.userService.user.getValue();
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.ride = _this.router.getCurrentNavigation().extras.state.ride;
                _this.getAvailableSeats();
            }
        });
        this.mapsAPILoader.load().then(function () {
            _this.getDirection();
        });
    }
    RideDetailsPage.prototype.ngOnInit = function () {
        this.getUser();
        this.checkBooking();
    };
    RideDetailsPage.prototype.getDirection = function () {
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
    RideDetailsPage.prototype.getUser = function () {
        var _this = this;
        console.log(this.ride);
        this.userService.getUser(this.ride.userId).subscribe(function (user) {
            return _this.user = user;
        });
    };
    RideDetailsPage.prototype.getAvailableSeats = function () {
        var bookedSeats = 0;
        if (this.ride.seatedUserIds) {
            bookedSeats = this.ride.seatedUserIds.length;
        }
        this.availableSeats = this.ride.numberOfSeats - bookedSeats;
    };
    RideDetailsPage.prototype.createRequest = function () {
        var _this = this;
        var request = {
            userId: this.currentUser.id,
            dateTime: new Date(),
            ride: this.ride,
            state: _shared_ui_utils__WEBPACK_IMPORTED_MODULE_4__["State"].pending
        };
        this.requestService.createRequest(request).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'You have booked this ride succesfully! :)',
                            duration: 2000,
                            position: 'bottom',
                            animated: true,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.router.navigateByUrl('tabs');
                        return [2 /*return*/];
                }
            });
        }); });
    };
    RideDetailsPage.prototype.goToDriverDetailsPage = function () {
        var navigationExtras = {
            state: {
                userId: this.ride.userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    RideDetailsPage.prototype.contactTheDriver = function () {
        var _this = this;
        var chat = {
            passengerUser: this.currentUser.id,
            driverUser: this.ride.userId,
            rideId: this.ride.id
        };
        this.chatService.getChatByRideId(this.ride.id).subscribe(function (chats) {
            if (chats[0]) {
                chat = chats[0];
                var navigationExtras = {
                    state: {
                        chatId: chat.id
                    }
                };
                _this.router.navigate(['chat'], navigationExtras);
            }
            else {
                chat.id = _this.db.createPushId();
                _this.chatService.createChat(chat).then(function (result) {
                    var navigationExtras = {
                        state: {
                            chatId: chat.id
                        }
                    };
                    _this.router.navigate(['chat'], navigationExtras);
                });
            }
        });
    };
    RideDetailsPage.prototype.checkBooking = function () {
        var _this = this;
        /*    if (this.ride.seatedUserIds) {
                this.ride.seatedUserIds.forEach(userId => {
                    if (userId === this.currentUser.id) {
                        this.isBooked = true;
                    }
                });
            }*/
        this.requestService.getRequestsByRideId(this.ride.id).subscribe(function (requests) {
            return requests.forEach(function (request) {
                if (request.userId === _this.currentUser.id && request.state !== _shared_ui_utils__WEBPACK_IMPORTED_MODULE_4__["State"].refused) {
                    _this.isBooked = true;
                }
            });
        });
    };
    RideDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ride-details',
            template: __webpack_require__(/*! ./ride-details.page.html */ "./src/app/pages/tabs/home/ride-details/ride-details.page.html"),
            styles: [__webpack_require__(/*! ./ride-details.page.scss */ "./src/app/pages/tabs/home/ride-details/ride-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"],
            _core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_8__["RideService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["MapsAPILoader"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]])
    ], RideDetailsPage);
    return RideDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-home-ride-details-ride-details-module.js.map
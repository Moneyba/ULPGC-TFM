(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-rides-booked-ride-plan-booked-ride-plan-module"],{

/***/ "./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.module.ts ***!
  \******************************************************************************/
/*! exports provided: BookedRidePlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookedRidePlanPageModule", function() { return BookedRidePlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _booked_ride_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booked-ride-plan.page */ "./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");









var routes = [
    {
        path: '',
        component: _booked_ride_plan_page__WEBPACK_IMPORTED_MODULE_6__["BookedRidePlanPage"]
    }
];
var BookedRidePlanPageModule = /** @class */ (function () {
    function BookedRidePlanPageModule() {
    }
    BookedRidePlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_booked_ride_plan_page__WEBPACK_IMPORTED_MODULE_6__["BookedRidePlanPage"]]
        })
    ], BookedRidePlanPageModule);
    return BookedRidePlanPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Ride Plan</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <div class=\"map\">\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" [streetViewControl]=\"false\"\n                     [zoomControl]=\"false\">\n                <agm-direction *ngIf=\"direction\" [origin]=\"direction.origin\"\n                               [destination]=\"direction?.destination\"></agm-direction>\n                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" *ngIf=\"!direction\"></agm-marker>\n            </agm-map>\n            <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button>\n                    <ion-icon name=\"pin\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </div>\n        <ion-item class=\"card-driver-container\">\n            <div class=\"user-info\" (click)=\"goToDriverDetailsPage()\">\n                <ion-avatar>\n                    <img [src]=\"driver?.photo\">\n                </ion-avatar>\n                <div class=\"user-name\">\n                    <label>{{driver?.name}}</label>\n                    <div>\n                        <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n                        <label>{{driver?.averageRating}}/5 ({{driver?.numberOfRatings}})</label>\n                    </div>\n                </div>\n            </div>\n\n            <ion-button (click)=\"contactTheDriver()\">Contact</ion-button>\n        </ion-item>\n        <ion-item>\n            <label>Date and time: {{request?.ride.dateTime | date:'dd MMM h:mm'}}</label>\n        </ion-item>\n        <ion-item>\n            <label>{{request?.ride.originName}} - {{request?.ride.destinationName}}</label>\n        </ion-item>\n        <ion-item>\n            <ion-label><a>Available seats: </a>{{request?.ride.numberOfSeats}}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label><a>Status: </a>{{request?.state}} </ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label (click)=\"presentAlertConfirm()\" fill=\"clear\" color=\"danger\">Cancel Ride</ion-label>\n        </ion-item>\n\n\n        <div class=\"footer\">\n            <ion-button (click)=\"openModal()\">Start ride</ion-button>\n        </div>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card-driver-container {\n  display: -webkit-flex;\n  display: flex; }\n\n:host agm-map {\n  height: 300px; }\n\n:host .card-driver-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between; }\n\n:host .card-driver-container .user-info {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center;\n    width: 100%; }\n\n:host .card-driver-container .user-info ion-avatar {\n      width: 35px;\n      height: 35px; }\n\n:host .card-driver-container .user-info .user-name {\n      margin-left: 10px;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-flex-direction: column;\n              flex-direction: column; }\n\n:host .footer {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  margin: 10px; }\n\n:host .request-buttons-container {\n  display: -webkit-flex;\n  display: flex; }\n\n:host .request-buttons-container ion-fab-button {\n    --box-shadow: none;\n    width: 35px;\n    height: 35px;\n    margin: 5px; }\n\n:host .request-buttons-container .accept-button {\n    --background: #0ec254; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvcmlkZXMvYm9va2VkLXJpZGUtcGxhbi9ib29rZWQtcmlkZS1wbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFhO0VBQWIsYUFBYSxFQUFBOztBQUZqQjtFQU1JLGFBQWEsRUFBQTs7QUFOakI7RUFVSSxxQkFBYTtFQUFiLGFBQWE7RUFDYixzQ0FBOEI7VUFBOUIsOEJBQThCLEVBQUE7O0FBWGxDO0lBY00scUJBQWE7SUFBYixhQUFhO0lBQ2IsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7O0FBaEJqQjtNQW1CUSxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQXBCcEI7TUF3QlEsaUJBQWlCO01BQ2pCLHFCQUFhO01BQWIsYUFBYTtNQUNiLDhCQUFzQjtjQUF0QixzQkFBc0IsRUFBQTs7QUExQjlCO0VBZ0NJLHFCQUFhO0VBQWIsYUFBYTtFQUNiLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBbkNoQjtFQXVDSSxxQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUF2Q2pCO0lBMENNLGtCQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBN0NqQjtJQWlETSxxQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9yaWRlcy9ib29rZWQtcmlkZS1wbGFuL2Jvb2tlZC1yaWRlLXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuY2FyZC1kcml2ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4gIC5jYXJkLWRyaXZlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLnVzZXItaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIH1cblxuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cblxuICAucmVxdWVzdC1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuXG4gICAgLmFjY2VwdC1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMGVjMjU0O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.ts ***!
  \****************************************************************************/
/*! exports provided: BookedRidePlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookedRidePlanPage", function() { return BookedRidePlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _ride_ride_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ride/ride.page */ "./src/app/pages/tabs/rides/ride/ride.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _core_services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/request.service */ "./src/app/core/services/request.service.ts");
/* harmony import */ var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/chat.service */ "./src/app/core/services/chat.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");







var DirectionsService = google.maps.DirectionsService;



var BookedRidePlanPage = /** @class */ (function () {
    function BookedRidePlanPage(route, router, modalController, userService, requestService, mapsAPILoader, chatService, db, alertController) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        this.userService = userService;
        this.requestService = requestService;
        this.mapsAPILoader = mapsAPILoader;
        this.chatService = chatService;
        this.db = db;
        this.alertController = alertController;
        this.directionsService = new DirectionsService();
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                var requestId = _this.router.getCurrentNavigation().extras.state.requestId;
                console.log(requestId);
                _this.getRequest(requestId);
            }
        });
    }
    BookedRidePlanPage.prototype.ngOnInit = function () {
    };
    BookedRidePlanPage.prototype.getRequest = function (requestId) {
        var _this = this;
        this.requestService.getRequest(requestId).subscribe(function (request) {
            _this.request = request;
            console.log(_this.request);
            _this.getDriver();
            _this.getAvaliableSeats();
            _this.mapsAPILoader.load().then(function () {
                _this.getDirection();
            });
        });
    };
    BookedRidePlanPage.prototype.getDirection = function () {
        var _this = this;
        this.direction = {
            origin: this.request.ride.origin,
            destination: this.request.ride.destination,
            travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsService.route(this.direction, function (result) {
            _this.duration = result.routes[0].legs[0].duration.text;
            _this.distance = result.routes[0].legs[0].distance.text;
        });
    };
    BookedRidePlanPage.prototype.getDriver = function () {
        var _this = this;
        this.userService.getUser(this.request.ride.userId).subscribe(function (user) { return _this.driver = user; });
    };
    BookedRidePlanPage.prototype.getAvaliableSeats = function () {
        var seatsNumber = this.request.ride.numberOfSeats;
        var passengerNumber = 0;
        if (this.request.ride.seatedUserIds) {
            passengerNumber = this.request.ride.seatedUserIds.length;
        }
        this.availableSeats = seatsNumber - passengerNumber;
    };
    BookedRidePlanPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _ride_ride_page__WEBPACK_IMPORTED_MODULE_4__["RidePage"],
                            componentProps: {
                                ride: this.request.ride
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BookedRidePlanPage.prototype.goToDriverDetailsPage = function () {
        var navigationExtras = {
            state: {
                userId: this.request.ride.userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    BookedRidePlanPage.prototype.contactTheDriver = function () {
        var _this = this;
        var chat = {
            passengerUser: this.request.userId,
            driverUser: this.driver.id,
            rideId: this.request.ride.id
        };
        this.chatService.getChatByRideId(this.request.ride.id).subscribe(function (chats) {
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
    BookedRidePlanPage.prototype.deleteRequest = function () {
        // Send notification to driver
        var _this = this;
        this.requestService.deleteRequest(this.request.id).then(function () {
            return _this.router.navigate(['tabs/tabs/rides']);
        });
    };
    BookedRidePlanPage.prototype.presentAlertConfirm = function () {
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
                                        _this.deleteRequest();
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
    BookedRidePlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booked-ride-plan',
            template: __webpack_require__(/*! ./booked-ride-plan.page.html */ "./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.html"),
            styles: [__webpack_require__(/*! ./booked-ride-plan.page.scss */ "./src/app/pages/tabs/rides/booked-ride-plan/booked-ride-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"],
            _core_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], BookedRidePlanPage);
    return BookedRidePlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-rides-booked-ride-plan-booked-ride-plan-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-rides-rides-module"],{

/***/ "./src/app/pages/tabs/rides/rides-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/rides/rides-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title text-center>\n            My Rides\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment (ionChange)=\"segmentChanged($event)\" mode=\"md\">\n        <ion-segment-button value=\"nextRides\" mode=\"md\" checked>\n            <ion-label>Next Rides</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"history\" mode=\"md\">\n            <ion-label>History Rides</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"currentSegment === 'nextRides'\" class=\"segment\">\n        <ion-card mode=\"md\" *ngFor=\"let currentRide of currentRides\"\n                  [ngClass]=\"{ 'booked-ride' : currentRide.ride, 'offered-ride': !currentRide.ride }\">\n            <ion-card-content>\n                <div *ngIf=\"currentRide.ride\" (click)=\"goToBookedRidePage(currentRide)\">\n                    <h3 class=\"booked-ride-title\">Booked Ride</h3>\n                    <ion-card-subtitle>{{currentRide.ride.dateTime | date: 'dd MMM h:mm'}}</ion-card-subtitle>\n                    <ion-label>{{currentRide.ride.originName}}\n                         -\n                        {{currentRide.ride.destinationName}}</ion-label>\n                </div>\n                <div *ngIf=\"!currentRide.ride\" (click)=\"goToRideDetailsPage(currentRide)\">\n                    <h3 class=\"offered-ride-title\">Offered Ride</h3>\n                    <ion-card-subtitle>{{currentRide.dateTime | date: 'dd MMM h:mm'}}</ion-card-subtitle>\n                    <ion-label>{{currentRide.originName}}\n                         -\n                        {{currentRide.destinationName}}</ion-label>\n                </div>\n            </ion-card-content>\n        </ion-card>\n        <div class=\"segment-no-items\">\n            <ion-label *ngIf=\"currentRides.length == 0\">You don't have any ride yet.</ion-label>\n        </div>\n    </div>\n    <div *ngIf=\"currentSegment === 'history'\" class=\"segment\">\n        <ion-card mode=\"md\" *ngFor=\"let oldRide of oldRides\"\n                  [ngClass]=\"{ 'booked-ride' : oldRide.ride, 'offered-ride': !oldRide.ride }\">\n            <ion-card-content>\n                <div *ngIf=\"oldRide.ride\" (click)=\"goToBookedRidePage(oldRide)\">\n                    <h3 class=\"booked-ride-title\">Booked Ride</h3>\n                    <ion-card-subtitle>{{oldRide.ride.dateTime | date: 'dd MMM h:mm'}}</ion-card-subtitle>\n                    <ion-label>{{oldRide.ride.originName}}\n                        -\n                        {{oldRide.ride.destinationName}}</ion-label>\n                </div>\n                <div *ngIf=\"!oldRide.ride\" (click)=\"goToRideDetailsPage(oldRide)\">\n                    <h3 class=\"offered-ride-title\">Offered Ride</h3>\n                    <ion-card-subtitle>{{oldRide.dateTime | date: 'dd MMM h:mm'}}</ion-card-subtitle>\n                    <ion-label>{{oldRide.originName}}\n                        -\n                        {{oldRide.destinationName}}</ion-label>\n                </div>\n            </ion-card-content>\n        </ion-card>\n        <div class=\"segment-no-items\">\n            <ion-label *ngIf=\"oldRides.length == 0\">There are no old rides.</ion-label>\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/rides/rides-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/rides/rides-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .segment {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n  :host .segment .booked-ride {\n    border-top: 5px solid #002e65; }\n  :host .segment .offered-ride {\n    border-top: 5px solid #fe9b2b; }\n  :host .segment .segment-no-items {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    padding: 20px; }\n  :host .segment .offered-ride-title {\n    font-size: 18px;\n    color: #fe9b2b; }\n  :host .segment .booked-ride-title {\n    font-size: 18px;\n    color: #002e65; }\n  :host .sc-ion-card-md-h {\n  border-radius: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvcmlkZXMvcmlkZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUgxQjtJQU1NLDZCQUE2QixFQUFBO0VBTm5DO0lBVU0sNkJBQTZCLEVBQUE7RUFWbkM7SUFjTSxxQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7RUFsQm5CO0lBcUJNLGVBQWU7SUFDZixjQUFjLEVBQUE7RUF0QnBCO0lBeUJNLGVBQWU7SUFDZixjQUFjLEVBQUE7RUExQnBCO0VBOEJJLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9yaWRlcy9yaWRlcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuc2VnbWVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmJvb2tlZC1yaWRlIHtcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDAyZTY1O1xuICAgIH1cblxuICAgIC5vZmZlcmVkLXJpZGUge1xuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNmZTliMmI7XG4gICAgfVxuXG4gICAgLnNlZ21lbnQtbm8taXRlbXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAub2ZmZXJlZC1yaWRlLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjZmU5YjJiO1xuICAgIH1cbiAgICAuYm9va2VkLXJpZGUtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6ICMwMDJlNjU7XG4gICAgfVxuICB9XG4gIC5zYy1pb24tY2FyZC1tZC1oIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/rides/rides-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tabs/rides/rides-page.component.ts ***!
  \**********************************************************/
/*! exports provided: RidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidesPage", function() { return RidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/request.service */ "./src/app/core/services/request.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/user.service */ "./src/app/core/services/user.service.ts");






var RidesPage = /** @class */ (function () {
    function RidesPage(rideService, requestService, userService, router) {
        this.rideService = rideService;
        this.requestService = requestService;
        this.userService = userService;
        this.router = router;
        this.currentSegment = 'nextRides';
        this.currentRides = [];
        this.oldRides = [];
    }
    RidesPage.prototype.ionViewWillEnter = function () {
        this.currentUser = this.userService.user.getValue();
        this.today = new Date().getTime() + 60 * 60 * 1000;
        this.currentRides = [];
        this.getRides();
    };
    RidesPage.prototype.segmentChanged = function (ev) {
        this.currentSegment = ev.detail.value;
    };
    RidesPage.prototype.getRides = function () {
        var _this = this;
        this.currentRides = [];
        this.oldRides = [];
        this.rideService.getRidesByUserId(this.currentUser.id).subscribe(function (rides) {
            rides.forEach(function (ride) {
                if (ride.dateTime >= _this.today) {
                    _this.currentRides.push(ride);
                }
                else {
                    _this.oldRides.push(ride);
                }
            });
            _this.getRequests();
        });
    };
    RidesPage.prototype.getRequests = function () {
        var _this = this;
        this.requestService.getRequestsByUserId(this.currentUser.id).subscribe(function (requests) {
            requests.forEach(function (request) {
                if (request.ride.dateTime >= _this.today) {
                    _this.currentRides.push(request);
                }
                else {
                    _this.oldRides.push(request);
                }
            });
            _this.sortByDate(_this.currentRides);
            _this.sortByDate(_this.oldRides);
        });
    };
    RidesPage.prototype.sortByDate = function (array) {
        return array.sort(function (a, b) {
            a = a.ride ? a.ride : a;
            b = b.ride ? b.ride : b;
            return a.dateTime - b.dateTime;
        });
    };
    RidesPage.prototype.goToRideDetailsPage = function (ride) {
        var navigationExtras = {
            state: {
                rideId: ride.id
            }
        };
        this.router.navigate(['ride-plan'], navigationExtras);
    };
    RidesPage.prototype.goToBookedRidePage = function (request) {
        var navigationExtras = {
            state: {
                requestId: request.id
            }
        };
        this.router.navigate(['booked-ride-plan'], navigationExtras);
    };
    RidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rides',
            template: __webpack_require__(/*! ./rides-page.component.html */ "./src/app/pages/tabs/rides/rides-page.component.html"),
            styles: [__webpack_require__(/*! ./rides-page.component.scss */ "./src/app/pages/tabs/rides/rides-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_ride_service__WEBPACK_IMPORTED_MODULE_2__["RideService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RidesPage);
    return RidesPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/rides/rides.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/rides/rides.module.ts ***!
  \**************************************************/
/*! exports provided: RidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidesPageModule", function() { return RidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rides_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rides-page.component */ "./src/app/pages/tabs/rides/rides-page.component.ts");







var RidesPageModule = /** @class */ (function () {
    function RidesPageModule() {
    }
    RidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _rides_page_component__WEBPACK_IMPORTED_MODULE_6__["RidesPage"] }])
            ],
            declarations: [_rides_page_component__WEBPACK_IMPORTED_MODULE_6__["RidesPage"]]
        })
    ], RidesPageModule);
    return RidesPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-rides-rides-module.js.map
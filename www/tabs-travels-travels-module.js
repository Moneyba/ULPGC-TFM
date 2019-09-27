(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-travels-travels-module"],{

/***/ "./src/app/pages/tabs/travels/travels-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/travels/travels-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Viajes\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment (ionChange)=\"segmentChanged($event)\" mode=\"md\">\n        <ion-segment-button value=\"nextRides\" mode=\"md\" checked>\n            <ion-label>Next Rides</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"history\" mode=\"md\">\n            <ion-label>History Rides</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"currentSegment === 'nextRides'\">\n        <ion-card *ngFor=\"let currentRide of currentRides\" (click)=\"goToRideDetailsPage(currentRide.ride, currentRide.type)\">\n            <h3>{{currentRide.type}}</h3>\n            <ion-card-subtitle>{{currentRide.ride.dateTime | date: 'dd MMM h:mm'}}</ion-card-subtitle>\n            <ion-label>{{currentRide.ride.originName}}\n                <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                {{currentRide.ride.destinationName}}</ion-label>\n        </ion-card>\n        <ion-label *ngIf=\"currentRides.length == 0\">You don't have any ride yet</ion-label>\n    </div>\n    <div *ngIf=\"currentSegment === 'history'\">\n        <ion-card *ngFor=\"let oldRide of oldRides\" (click)=\"goToRideDetailsPage(oldRide.ride)\">\n            <h3>{{oldRide.type}}</h3>\n            <ion-card-subtitle>{{oldRide.ride.dateTime | date: 'dd MMM h:mm'}}</ion-card-subtitle>\n            <ion-label>{{oldRide.ride.originName}}\n                <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                {{oldRide.ride.destinationName}}</ion-label>\n\n        </ion-card>\n        <ion-label *ngIf=\"oldRides.length == 0\">There are no old rides</ion-label>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/travels/travels-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/travels/travels-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n\nion-card {\n  border-top: 3px solid darkblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0RvY3VtZW50cy90Zm0vc3JjL2FwcC9wYWdlcy90YWJzL3RyYXZlbHMvdHJhdmVscy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90cmF2ZWxzL3RyYXZlbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLml0ZW17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGRhcmtibHVlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tabs/travels/travels-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/travels/travels-page.component.ts ***!
  \**************************************************************/
/*! exports provided: TravelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelsPage", function() { return TravelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/request.service */ "./src/app/core/services/request.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/user.service */ "./src/app/core/services/user.service.ts");






var TravelsPage = /** @class */ (function () {
    function TravelsPage(rideService, requestService, userService, router) {
        this.rideService = rideService;
        this.requestService = requestService;
        this.userService = userService;
        this.router = router;
        this.currentSegment = 'nextRides';
        this.currentRides = [];
        this.oldRides = [];
        this.currentUser = this.userService.user.getValue();
        console.log(this.currentUser);
        this.getRides();
        this.getRequests();
        this.today = new Date().getTime();
    }
    TravelsPage.prototype.segmentChanged = function (ev) {
        this.currentSegment = ev.detail.value;
    };
    TravelsPage.prototype.getRides = function () {
        var _this = this;
        this.rideService.getRidesByUserId(this.currentUser.id).subscribe(function (rides) {
            rides.forEach(function (ride) {
                if (ride.dateTime >= _this.today) {
                    var currentRide = { ride: ride, type: 'Offered Ride' };
                    _this.currentRides.push(currentRide);
                }
                else {
                    var oldRide = { ride: ride, type: 'Offered Ride' };
                    _this.oldRides.push(oldRide);
                }
            });
        });
    };
    TravelsPage.prototype.getRequests = function () {
        var _this = this;
        this.requestService.getRequestsByUserId(this.currentUser.id).subscribe(function (requests) {
            requests.forEach(function (request) {
                if (request.ride.dateTime >= _this.today) {
                    var currentRide = { ride: request.ride, type: 'Requested Ride' };
                    _this.currentRides.push(currentRide);
                }
                else {
                    var oldRide = { ride: request.ride, type: 'Requested Ride' };
                    _this.oldRides.push(oldRide);
                }
            });
        });
    };
    TravelsPage.prototype.goToRideDetailsPage = function (ride, type) {
        var isDriver = false;
        if (type === 'Offered Ride') {
            isDriver = true;
        }
        var navigationExtras = {
            state: {
                rideId: ride.id,
                isDriver: isDriver
            }
        };
        this.router.navigate(['ride-plan'], navigationExtras);
    };
    TravelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travels',
            template: __webpack_require__(/*! ./travels-page.component.html */ "./src/app/pages/tabs/travels/travels-page.component.html"),
            styles: [__webpack_require__(/*! ./travels-page.component.scss */ "./src/app/pages/tabs/travels/travels-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_ride_service__WEBPACK_IMPORTED_MODULE_2__["RideService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TravelsPage);
    return TravelsPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/travels/travels.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/travels/travels.module.ts ***!
  \******************************************************/
/*! exports provided: TravelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelsPageModule", function() { return TravelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _travels_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travels-page.component */ "./src/app/pages/tabs/travels/travels-page.component.ts");







var TravelsPageModule = /** @class */ (function () {
    function TravelsPageModule() {
    }
    TravelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _travels_page_component__WEBPACK_IMPORTED_MODULE_6__["TravelsPage"] }])
            ],
            declarations: [_travels_page_component__WEBPACK_IMPORTED_MODULE_6__["TravelsPage"]]
        })
    ], TravelsPageModule);
    return TravelsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-travels-travels-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-messages-notification-notification-module"],{

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

/***/ "./src/app/pages/tabs/messages/notification/notification-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tabs/messages/notification/notification-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Notification</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-content>\n    <div>The user {{notification.user.name}} has booked a seat in your car for the ride</div>\n    <ion-label>{{notification.ride.originName}}</ion-label>\n     -\n    <ion-label>{{notification.ride.destinationName}}</ion-label>\n    <br>\n    <ion-label>Status: {{notification.state}}</ion-label>\n    <br>\n    <ion-button (click)=\"acceptBooking()\">Accept</ion-button>\n    <ion-button (click)=\"refuseBooking()\">Refuse</ion-button>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/messages/notification/notification-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tabs/messages/notification/notification-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvbWVzc2FnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tabs/messages/notification/notification-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tabs/messages/notification/notification-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui.utils */ "./src/app/shared/ui.utils.ts");
/* harmony import */ var _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/request.service */ "./src/app/core/services/request.service.ts");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");






var NotificationPage = /** @class */ (function () {
    function NotificationPage(route, router, requestService, rideService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.rideService = rideService;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.notification = _this.router.getCurrentNavigation().extras.state.notification;
            }
        });
    }
    NotificationPage.prototype.ngOnInit = function () {
    };
    NotificationPage.prototype.acceptBooking = function () {
        // this.notification.ride.seatedUsers = [];
        // if (this.notification.ride.numberOfSeats > 0) {
        //   this.notification.ride.numberOfSeats--;
        // }
        // this.notification.ride.seatedUsers.push(this.notification.user);
        // this.rideService.updateRide(this.notification.ride);
        // this.notification.state = State.accepted;
        // this.requestService.updateRequest(this.notification);
    };
    NotificationPage.prototype.refuseBooking = function () {
        this.notification.state = _shared_ui_utils__WEBPACK_IMPORTED_MODULE_3__["State"].refused;
        this.requestService.updateRequest(this.notification);
    };
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notification-page.component.html */ "./src/app/pages/tabs/messages/notification/notification-page.component.html"),
            styles: [__webpack_require__(/*! ./notification-page.component.scss */ "./src/app/pages/tabs/messages/notification/notification-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_5__["RideService"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/messages/notification/notification.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tabs/messages/notification/notification.module.ts ***!
  \*************************************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-page.component */ "./src/app/pages/tabs/messages/notification/notification-page.component.ts");







var routes = [
    {
        path: '',
        component: _notification_page_component__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_page_component__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-messages-notification-notification-module.js.map
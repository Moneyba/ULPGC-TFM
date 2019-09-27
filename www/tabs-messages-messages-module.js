(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-messages-messages-module"],{

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

/***/ "./src/app/pages/tabs/messages/messages.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/messages/messages.module.ts ***!
  \********************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/tabs/messages/messages.page.ts");







var routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }
];
var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/messages/messages.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/messages/messages.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Chats</ion-title>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngFor=\"let chat of chats\">\n      <ion-item (click)=\"goToChatPage(chat)\" class=\"chat-item\">\n        <ion-avatar>\n          <img [src]=\"chat.otherUser?.photo\">\n        </ion-avatar>\n        <div>\n          <ion-label>{{chat.otherUser?.name}}</ion-label>\n          <h3>{{chat.ride?.originName}} - {{chat.ride?.destinationName}}</h3>\n        </div>\n      </ion-item>\n  </ion-list>\n\n<!--\n    <ion-segment (ionChange)=\"segmentChanged($event)\" mode=\"md\" value=\"chats\">\n      <ion-segment-button value=\"chats\">\n        <ion-label>Chats</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"notifications\">\n        <ion-label>Notifications</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n\n  <div *ngIf=\"currentSegment === 'chats'\">\n    <ion-card mode=\"md\" *ngFor=\"let chat of chats\" (click)=\"goToChatPage(chat)\">\n      <ion-card-content>\n        <h2>{{chat.ride.originName}}\n           -\n          {{chat.ride.destinationName}}\n        </h2>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div *ngIf=\"currentSegment === 'requests'\">\n    <ion-card mode=\"md\" *ngFor=\"let notification of notifications\" (click)=\"goToChatNotification(notification)\">\n      <ion-card-content>\n        {{notification.id}}\n      </ion-card-content>\n    </ion-card>\n  </div>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/messages/messages.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/messages/messages.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tabs/messages/messages.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/messages/messages.page.ts ***!
  \******************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/chat.service */ "./src/app/core/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/request.service */ "./src/app/core/services/request.service.ts");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");










var MessagesPage = /** @class */ (function () {
    function MessagesPage(authService, chatService, router, userService, requestService, rideService) {
        this.authService = authService;
        this.chatService = chatService;
        this.router = router;
        this.userService = userService;
        this.requestService = requestService;
        this.rideService = rideService;
        this.currentSegment = 'chats';
        this.chats = [];
        this.notifications = [];
        this.currentUser = this.userService.user.getValue();
    }
    MessagesPage.prototype.ngOnInit = function () {
        this.getChats();
        this.getNotifications();
    };
    MessagesPage.prototype.segmentChanged = function (ev) {
        this.currentSegment = ev.detail.value;
    };
    MessagesPage.prototype.getChats = function () {
        var _this = this;
        var observablesToSubscribe = [
            this.chatService.getChatsByUserId(this.currentUser.id, 'passengerUser'),
            this.chatService.getChatsByUserId(this.currentUser.id, 'driverUser')
        ];
        this.chat$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(observablesToSubscribe).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var passengerChats = _a[0], driverChats = _a[1];
            return passengerChats.concat(driverChats);
        }));
        this.chat$.subscribe(function (chats) {
            console.log(chats);
            _this.chats = chats;
            _this.chats.forEach(function (chat) {
                if (_this.currentUser.id === chat.driverUser) {
                    _this.userService.getUser(chat.passengerUser).subscribe(function (passengerUser) { return chat.otherUser = passengerUser; });
                }
                else {
                    _this.userService.getUser(chat.driverUser).subscribe(function (driverUser) { return chat.otherUser = driverUser; });
                }
                _this.rideService.getRide(chat.rideId).subscribe(function (ride) { return chat.ride = ride; });
            });
        });
    };
    MessagesPage.prototype.goToChatPage = function (chat) {
        var navigationExtras = {
            state: {
                chatId: chat.id
            }
        };
        this.router.navigate(['chat'], navigationExtras);
    };
    MessagesPage.prototype.getNotifications = function () {
        var _this = this;
        this.requestService.getRequestsByReceiverId(this.currentUser.id).subscribe(function (requests) {
            _this.notifications = requests;
        });
    };
    MessagesPage.prototype.goToChatNotification = function (notification) {
        var navigationExtras = {
            state: {
                notification: notification
            }
        };
        this.router.navigate(['notification'], navigationExtras);
    };
    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.page.html */ "./src/app/pages/tabs/messages/messages.page.html"),
            styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/pages/tabs/messages/messages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_8__["RequestService"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_9__["RideService"]])
    ], MessagesPage);
    return MessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-messages-messages-module.js.map
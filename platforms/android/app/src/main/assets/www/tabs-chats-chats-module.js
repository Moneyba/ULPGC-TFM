(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-chats-chats-module"],{

/***/ "./src/app/pages/tabs/chats/chats-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/chats/chats-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title text-center>Chats</ion-title>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let chat of chats\" class=\"list-chat\">\n    <ion-item (click)=\"goToChatPage(chat)\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"chat.otherUser?.photo\">\n      </ion-avatar>\n      <ion-label>\n        <p>{{chat.otherUser?.name}}</p>\n        <h3>{{chat.ride?.originName}} - {{chat.ride?.destinationName}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/chats/chats-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/chats/chats-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-chat {\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvY2hhdHMvY2hhdHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9jaGF0cy9jaGF0cy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtY2hhdCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/chats/chats-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tabs/chats/chats-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
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










var ChatsPage = /** @class */ (function () {
    function ChatsPage(authService, chatService, router, userService, requestService, rideService) {
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
    ChatsPage.prototype.ngOnInit = function () {
        this.getChats();
        this.getNotifications();
    };
    ChatsPage.prototype.segmentChanged = function (ev) {
        this.currentSegment = ev.detail.value;
    };
    ChatsPage.prototype.getChats = function () {
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
    ChatsPage.prototype.goToChatPage = function (chat) {
        var navigationExtras = {
            state: {
                chatId: chat.id
            }
        };
        this.router.navigate(['chat'], navigationExtras);
    };
    ChatsPage.prototype.getNotifications = function () {
        var _this = this;
        this.requestService.getRequestsByReceiverId(this.currentUser.id).subscribe(function (requests) {
            _this.notifications = requests;
        });
    };
    ChatsPage.prototype.goToChatNotification = function (notification) {
        var navigationExtras = {
            state: {
                notification: notification
            }
        };
        this.router.navigate(['notification'], navigationExtras);
    };
    ChatsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chats',
            template: __webpack_require__(/*! ./chats-page.component.html */ "./src/app/pages/tabs/chats/chats-page.component.html"),
            styles: [__webpack_require__(/*! ./chats-page.component.scss */ "./src/app/pages/tabs/chats/chats-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_request_service__WEBPACK_IMPORTED_MODULE_8__["RequestService"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_9__["RideService"]])
    ], ChatsPage);
    return ChatsPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/chats/chats.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/chats/chats.module.ts ***!
  \**************************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chats_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats-page.component */ "./src/app/pages/tabs/chats/chats-page.component.ts");







var routes = [
    {
        path: '',
        component: _chats_page_component__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]
    }
];
var ChatsPageModule = /** @class */ (function () {
    function ChatsPageModule() {
    }
    ChatsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chats_page_component__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
        })
    ], ChatsPageModule);
    return ChatsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-chats-chats-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-messages-chat-chat-module"],{

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

/***/ "./src/app/pages/tabs/messages/chat/chat-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/messages/chat/chat-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title (click)=\"goToRidePlanPage()\">{{ride?.originName}}\n           -\n          {{ride?.destinationName}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"chat\">\n    <div class=\"message-area\">\n      <div class=\"message\" *ngFor=\"let message of messages\" [ngClass]=\"getClasses(message)\">\n        <ion-avatar *ngIf=\"message.fromUser != currentUser.id\" (click)=\"goToDriverDetailsPage()\">\n          <img src=\"{{otherUser?.photo}}\"></ion-avatar>\n        <p>{{message.content}}</p>\n        <span>{{message.date}}</span>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-textarea [(ngModel)]=\"msg\" class=\"message-input\" placeholder=\"Type a message here\" rows=\"1\" autocapitalize=\"off\"\n                  #messageInput\n                  (keydown.enter)=\"sendMessage();false\"></ion-textarea>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"sendMessage()\">\n        <ion-icon slot=\"icon-only\" name=\"md-send\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/tabs/messages/chat/chat-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/messages/chat/chat-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .message-area {\n  max-height: 90%;\n  height: 90%;\n  overflow: auto;\n  padding: 15px 10px; }\n  :host .message-area .message p {\n    color: #8a898b;\n    font-size: 13px;\n    font-weight: bold;\n    margin: 0px;\n    max-width: 95%;\n    min-width: 55%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n    padding: 10px 15px 10px 7px;\n    margin: 5px 0;\n    background: #B9C0E9; }\n  :host .message-area .message.incoming {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-align-items: flex-start;\n            align-items: flex-start; }\n  :host .message-area .message.incoming p {\n      border-radius: 0 11px 11px 11px;\n      background: white; }\n  :host .message-area .message.incoming ion-avatar {\n      margin-right: 5px; }\n  :host .message-area .message.incoming ion-avatar img {\n        width: 40px;\n        height: 40px; }\n  :host .message-area .message.outgoing {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    -webkit-align-items: flex-end;\n            align-items: flex-end; }\n  :host .message-area .message.outgoing p {\n      color: white;\n      border-radius: 11px 11px 0 11px; }\n  :host ion-footer {\n  --ion-toolbar-background-color: var(--ion-color-white); }\n  :host ion-footer .message-input {\n    padding-left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0RvY3VtZW50cy90Zm0vc3JjL2FwcC9wYWdlcy90YWJzL21lc3NhZ2VzL2NoYXQvY2hhdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7RUFOdEI7SUFXUSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQXBCM0I7SUEwQk0scUJBQWE7SUFBYixhQUFhO0lBQ2IsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQTdCN0I7TUFnQ1EsK0JBQStCO01BQy9CLGlCQUFpQixFQUFBO0VBakN6QjtNQXFDUSxpQkFBaUIsRUFBQTtFQXJDekI7UUF3Q1UsV0FBVztRQUNYLFlBQVksRUFBQTtFQXpDdEI7SUErQ00scUJBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtFQWxEM0I7TUFxRFEsWUFBWTtNQUNaLCtCQUErQixFQUFBO0VBdER2QztFQTZESSxzREFBK0IsRUFBQTtFQTdEbkM7SUFnRU0saUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL21lc3NhZ2VzL2NoYXQvY2hhdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIC5tZXNzYWdlLWFyZWEge1xuICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG5cbiAgICAubWVzc2FnZSB7XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogIzhhODk4YjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1heC13aWR0aDogOTUlO1xuICAgICAgICBtaW4td2lkdGg6IDU1JTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCA3cHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNCOUMwRTk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAubWVzc2FnZS5pbmNvbWluZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICBwIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMXB4IDExcHggMTFweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tZXNzYWdlLm91dGdvaW5nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweCAxMXB4IDAgMTFweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGlvbi1mb290ZXIge1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblxuICAgIC5tZXNzYWdlLWlucHV0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/messages/chat/chat-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/messages/chat/chat-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/chat.service */ "./src/app/core/services/chat.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");






var ChatPage = /** @class */ (function () {
    function ChatPage(route, router, chatService, userService, rideService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.chatService = chatService;
        this.userService = userService;
        this.rideService = rideService;
        this.messages = [];
        this.currentUser = this.userService.user.getValue();
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                var chatId = _this.router.getCurrentNavigation().extras.state.chatId;
                _this.getChat(chatId);
            }
        });
    }
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage.prototype.getChat = function (chatId) {
        var _this = this;
        this.chatService.getChat(chatId).subscribe(function (chat) {
            _this.chat = chat;
            _this.messages = _this.getArrayFromObject(chat.messages);
            _this.getRide();
            _this.getOtherUser();
        });
    };
    ChatPage.prototype.getRide = function () {
        var _this = this;
        this.rideService.getRide(this.chat.rideId).subscribe(function (ride) { return _this.ride = ride; });
    };
    ChatPage.prototype.getArrayFromObject = function (object) {
        return Object.keys(object || {}).map(function (key) { return object[key]; });
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        var message = {
            content: this.msg,
            date: new Date(),
            fromUser: this.currentUser.id,
            fromUserName: this.currentUser.name,
            toUser: this.getReceiver()
        };
        this.chatService.sendMessage(message, this.chat.id).then(function () { return _this.getChat(_this.chat.id); });
        this.msg = '';
    };
    ChatPage.prototype.getReceiver = function () {
        return this.currentUser.id === this.chat.passengerUser ? this.chat.driverUser : this.chat.passengerUser;
    };
    ChatPage.prototype.goToRidePlanPage = function () {
        var navigationExtras = {
            state: {
                rideId: this.chat.rideId
            }
        };
        this.router.navigate(['ride-plan'], navigationExtras);
    };
    ChatPage.prototype.getOtherUser = function () {
        var _this = this;
        if (this.chat.passengerUser === this.currentUser.id) {
            this.userService.getUser(this.chat.driverUser).subscribe(function (user) { return _this.otherUser = user; });
        }
        else {
            this.userService.getUser(this.chat.passengerUser).subscribe(function (user) { return _this.otherUser = user; });
        }
    };
    ChatPage.prototype.gotoUserProfile = function (userId) {
        var navigationExtras = {
            state: {
                userId: userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    ChatPage.prototype.getClasses = function (message) {
        return {
            incoming: message.fromUser !== this.currentUser.id,
            outgoing: message.fromUser === this.currentUser.id,
        };
    };
    ChatPage.prototype.goToDriverDetailsPage = function () {
        var navigationExtras = {
            state: {
                userId: this.otherUser.id
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat-page.component.html */ "./src/app/pages/tabs/messages/chat/chat-page.component.html"),
            styles: [__webpack_require__(/*! ./chat-page.component.scss */ "./src/app/pages/tabs/messages/chat/chat-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_5__["RideService"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/messages/chat/chat.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tabs/messages/chat/chat.module.ts ***!
  \*********************************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-page.component */ "./src/app/pages/tabs/messages/chat/chat-page.component.ts");







var routes = [
    {
        path: '',
        component: _chat_page_component__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page_component__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-messages-chat-chat-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-messages-chat-room-chat-room-module"],{

/***/ "./src/app/pages/tabs/messages/chat-room/chat-room-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tabs/messages/chat-room/chat-room-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title (click)=\"goToRidePlanPage()\">{{chatRoom.ride.originName}}\n           -\n          {{chatRoom.ride.destinationName}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"chatRoom\">\n    <div class=\"message-area\">\n      <div class=\"message\" *ngFor=\"let message of messages\" [ngClass]=\"getClasses(message)\">\n        <ion-avatar *ngIf=\"message.fromUser != currentUser.id\"><img src=\"{{ otherUser?.photo }}\"></ion-avatar>\n        <p>{{message.content}}</p>\n        <span>{{message.date}}</span>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-textarea [(ngModel)]=\"msg\" class=\"message-input\" placeholder=\"Type a message here\" rows=\"1\" autocapitalize=\"off\"\n                  #messageInput\n                  (keydown.enter)=\"sendMessage();false\"></ion-textarea>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"sendMessage()\">\n        <ion-icon slot=\"icon-only\" name=\"md-send\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/tabs/messages/chat-room/chat-room-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tabs/messages/chat-room/chat-room-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .message-area {\n  max-height: 90%;\n  height: 90%;\n  overflow: auto;\n  padding: 15px 10px; }\n  :host .message-area .message p {\n    color: #8a898b;\n    font-size: 13px;\n    font-weight: bold;\n    margin: 0px;\n    max-width: 95%;\n    min-width: 55%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n    padding: 10px 15px 10px 7px;\n    margin: 5px 0;\n    background: #B9C0E9; }\n  :host .message-area .message.incoming {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-align-items: flex-start;\n            align-items: flex-start; }\n  :host .message-area .message.incoming p {\n      border-radius: 0 11px 11px 11px;\n      background: white; }\n  :host .message-area .message.incoming ion-avatar {\n      margin-right: 5px; }\n  :host .message-area .message.incoming ion-avatar img {\n        width: 40px;\n        height: 40px; }\n  :host .message-area .message.outgoing {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    -webkit-align-items: flex-end;\n            align-items: flex-end; }\n  :host .message-area .message.outgoing p {\n      color: white;\n      border-radius: 11px 11px 0 11px; }\n  :host ion-footer {\n  --ion-toolbar-background-color: var(--ion-color-white); }\n  :host ion-footer .message-input {\n    padding-left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0RvY3VtZW50cy90Zm0vc3JjL2FwcC9wYWdlcy90YWJzL21lc3NhZ2VzL2NoYXQtcm9vbS9jaGF0LXJvb20tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQixFQUFBO0VBTnRCO0lBV1EsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0lBQ2QsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUFwQjNCO0lBMEJNLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUE3QjdCO01BZ0NRLCtCQUErQjtNQUMvQixpQkFBaUIsRUFBQTtFQWpDekI7TUFxQ1EsaUJBQWlCLEVBQUE7RUFyQ3pCO1FBd0NVLFdBQVc7UUFDWCxZQUFZLEVBQUE7RUF6Q3RCO0lBK0NNLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qiw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUE7RUFsRDNCO01BcURRLFlBQVk7TUFDWiwrQkFBK0IsRUFBQTtFQXREdkM7RUE2REksc0RBQStCLEVBQUE7RUE3RG5DO0lBZ0VNLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9tZXNzYWdlcy9jaGF0LXJvb20vY2hhdC1yb29tLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgLm1lc3NhZ2UtYXJlYSB7XG4gICAgbWF4LWhlaWdodDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcblxuICAgIC5tZXNzYWdlIHtcblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjOGE4OThiO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICAgIG1pbi13aWR0aDogNTUlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDdweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgYmFja2dyb3VuZDogI0I5QzBFOTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC5tZXNzYWdlLmluY29taW5nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIHAge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDExcHggMTFweCAxMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1lc3NhZ2Uub3V0Z29pbmcge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4IDExcHggMCAxMXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgaW9uLWZvb3RlciB7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXG4gICAgLm1lc3NhZ2UtaW5wdXQge1xuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/messages/chat-room/chat-room-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tabs/messages/chat-room/chat-room-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChatRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPage", function() { return ChatRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_chat_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/chat-room.service */ "./src/app/core/services/chat-room.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");





var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage(route, router, chatRoomService, chatService, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.chatRoomService = chatRoomService;
        this.chatService = chatService;
        this.userService = userService;
        this.messages = [];
        this.currentUser = this.userService.user.getValue();
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.chatRoom = _this.router.getCurrentNavigation().extras.state.chatRoom;
                _this.chatRoom.messages = [];
                _this.getChatRoom();
                _this.getOtherUser();
            }
        });
    }
    ChatRoomPage.prototype.ngOnInit = function () {
    };
    ChatRoomPage.prototype.getChatRoom = function () {
        var _this = this;
        this.chatRoomService.getChatRoom(this.chatRoom.id).subscribe(function (chatRoom) {
            _this.messages = _this.getArrayFromObject(chatRoom.messages);
        });
    };
    ChatRoomPage.prototype.getArrayFromObject = function (object) {
        return Object.keys(object || {}).map(function (key) { return object[key]; });
    };
    ChatRoomPage.prototype.sendMessage = function () {
        var _this = this;
        var message = {
            content: this.msg,
            date: new Date(),
            fromUser: this.currentUser.id,
            toUser: this.getReceiver()
        };
        this.chatService.sendMessage(message, this.chatRoom.id).then(function () { return _this.getChatRoom(); });
        this.msg = '';
    };
    ChatRoomPage.prototype.getReceiver = function () {
        return this.currentUser.id === this.chatRoom.passengerUser ? this.chatRoom.driverUser : this.chatRoom.passengerUser;
    };
    ChatRoomPage.prototype.goToRidePlanPage = function () {
        var navigationExtras = {
            state: {
                ride: this.chatRoom.ride
            }
        };
        this.router.navigate(['ride-plan'], navigationExtras);
    };
    ChatRoomPage.prototype.getOtherUser = function () {
        var _this = this;
        if (this.chatRoom.passengerUser === this.currentUser.id) {
            this.userService.getUser(this.chatRoom.driverUser).subscribe(function (user) { return _this.otherUser = user; });
        }
        else {
            this.userService.getUser(this.chatRoom.passengerUser).subscribe(function (user) { return _this.otherUser = user; });
        }
    };
    ChatRoomPage.prototype.gotoUserProfile = function (userId) {
        var navigationExtras = {
            state: {
                userId: userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    ChatRoomPage.prototype.getClasses = function (message) {
        return {
            incoming: message.fromUser != this.currentUser.id,
            outgoing: message.fromUser === this.currentUser.id,
        };
    };
    ChatRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! ./chat-room-page.component.html */ "./src/app/pages/tabs/messages/chat-room/chat-room-page.component.html"),
            styles: [__webpack_require__(/*! ./chat-room-page.component.scss */ "./src/app/pages/tabs/messages/chat-room/chat-room-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_chat_room_service__WEBPACK_IMPORTED_MODULE_3__["ChatRoomService"],
            _core_services_chat_room_service__WEBPACK_IMPORTED_MODULE_3__["ChatRoomService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ChatRoomPage);
    return ChatRoomPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/messages/chat-room/chat-room.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/messages/chat-room/chat-room.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChatRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function() { return ChatRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_room_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-room-page.component */ "./src/app/pages/tabs/messages/chat-room/chat-room-page.component.ts");







var routes = [
    {
        path: '',
        component: _chat_room_page_component__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]
    }
];
var ChatRoomPageModule = /** @class */ (function () {
    function ChatRoomPageModule() {
    }
    ChatRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_room_page_component__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]]
        })
    ], ChatRoomPageModule);
    return ChatRoomPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-messages-chat-room-chat-room-module.js.map
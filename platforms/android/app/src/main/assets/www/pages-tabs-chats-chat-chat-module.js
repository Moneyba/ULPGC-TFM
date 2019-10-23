(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-chats-chat-chat-module"],{

/***/ "./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-list-header>Chat Options</ion-list-header>\n  <ion-item button (click)=\"blockUser()\"  *ngIf=\"!isOtherUserBlocked\">Block User</ion-item>\n  <ion-item button (click)=\"unblockUser()\" *ngIf=\"isOtherUserBlocked\">Unblock User</ion-item>\n  <ion-item button (click)=\"presentAlertConfirm()\">Delete Chat</ion-item>\n</ion-list>\n"

/***/ }),

/***/ "./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvY2hhdHMvY2hhdC9jaGF0LW9wdGlvbnMvY2hhdC1vcHRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChatOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatOptionsComponent", function() { return ChatOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/chat.service */ "./src/app/core/services/chat.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ChatOptionsComponent = /** @class */ (function () {
    function ChatOptionsComponent(router, alertController, chatService, userService, navParams, popoverController) {
        this.router = router;
        this.alertController = alertController;
        this.chatService = chatService;
        this.userService = userService;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.chatId = this.navParams.data.chatId;
        this.otherUserId = this.navParams.data.otherUserId;
        this.isOtherUserBlocked = this.navParams.data.isOtherUserBlocked;
    }
    ChatOptionsComponent.prototype.ngOnInit = function () { };
    ChatOptionsComponent.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Ride',
                            message: 'Are you sure you want to delete this chat?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.popoverController.dismiss().then(function () {
                                            _this.chatService.deleteChat(_this.chatId).then(function () { return _this.router.navigateByUrl('tabs/tabs/chats'); });
                                        });
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
    ChatOptionsComponent.prototype.blockUser = function () {
        this.isOtherUserBlocked = true;
        this.popoverController.dismiss(this.isOtherUserBlocked);
        this.userService.blockUser(this.otherUserId);
    };
    ChatOptionsComponent.prototype.unblockUser = function () {
        this.isOtherUserBlocked = false;
        this.popoverController.dismiss(this.isOtherUserBlocked);
        this.userService.unBlockUser(this.otherUserId);
    };
    ChatOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-options',
            template: __webpack_require__(/*! ./chat-options.component.html */ "./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.html"),
            styles: [__webpack_require__(/*! ./chat-options.component.scss */ "./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _core_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], ChatOptionsComponent);
    return ChatOptionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tabs/chats/chat/chat-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/chats/chat/chat-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title (click)=\"goToRidePlanPage()\">{{ride?.originName}}\n            -\n            {{ride?.destinationName}}</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-icon id=\"icon-more\" name=\"md-more\" slot=\"end\" (click)=\"presentPopover($event)\"></ion-icon>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div class=\"message-area\" *ngIf=\"chat\">\n        <div class=\"message\" *ngFor=\"let message of messages\" [ngClass]=\"getClasses(message)\">\n            <ion-avatar *ngIf=\"message.fromUserId != currentUser.id\" (click)=\"goToDriverDetailsPage()\">\n                <img src=\"{{otherUser?.photo}}\"></ion-avatar>\n            <p>{{message.content}}</p>\n            <span>{{message.date}}</span>\n        </div>\n        <ion-card-subtitle *ngIf=\"isCurrentUserBlocked\" text-center>\n            I'm sorry, you can't send messages to this user</ion-card-subtitle>\n        <ion-card-subtitle *ngIf=\"isOtherUserBlocked\" text-center>\n            You have blocked this user</ion-card-subtitle>\n    </div>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-textarea [(ngModel)]=\"msg\" class=\"message-input\" placeholder=\"Type a message here\" rows=\"1\"\n                      (keydown.enter)=\"sendMessage();true\"></ion-textarea>\n        <ion-buttons slot=\"end\">\n            <ion-button color=\"primary\" (click)=\"sendMessage()\">\n                <ion-icon slot=\"icon-only\" name=\"md-send\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/tabs/chats/chat/chat-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/chats/chat/chat-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #icon-more {\n  font-size: 20px;\n  margin-right: 5px; }\n\n:host .message-area {\n  min-height: 100%;\n  width: 100%;\n  position: relative;\n  overflow: auto;\n  padding: 15px 10px; }\n\n:host .message-area .message p {\n    color: black;\n    font-size: 13px;\n    font-weight: bold;\n    max-width: 95%;\n    min-width: 55%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n    padding: 10px 15px 10px 7px;\n    margin: 5px 0;\n    background: #bedfff; }\n\n:host .message-area .message.incoming {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-align-items: flex-start;\n            align-items: flex-start; }\n\n:host .message-area .message.incoming p {\n      border-radius: 0 11px 11px 11px;\n      background: #ffe9d1; }\n\n:host .message-area .message.incoming ion-avatar {\n      margin-right: 3px !important; }\n\n:host .message-area .message.incoming ion-avatar img {\n        min-width: 40px;\n        max-width: 40px;\n        height: 40px; }\n\n:host .message-area .message.outgoing {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    -webkit-align-items: flex-end;\n            align-items: flex-end; }\n\n:host .message-area .message.outgoing p {\n      color: black;\n      border-radius: 11px 11px 0 11px; }\n\n:host ion-footer {\n  --ion-toolbar-background-color: var(--ion-color-white); }\n\n:host ion-footer .message-input {\n    padding-left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvY2hhdHMvY2hhdC9jaGF0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBSHJCO0VBT0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQVh0QjtJQWlCUSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsY0FBYztJQUNkLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQXpCM0I7SUErQk0scUJBQWE7SUFBYixhQUFhO0lBQ2IsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTs7QUFsQzdCO01BcUNRLCtCQUErQjtNQUMvQixtQkFBb0IsRUFBQTs7QUF0QzVCO01BMENRLDRCQUE0QixFQUFBOztBQTFDcEM7UUE2Q1UsZUFBZTtRQUNmLGVBQWU7UUFDZixZQUFZLEVBQUE7O0FBL0N0QjtJQXFETSxxQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBOztBQXhEM0I7TUEyRFEsWUFBWTtNQUNaLCtCQUErQixFQUFBOztBQTVEdkM7RUFrRUksc0RBQStCLEVBQUE7O0FBbEVuQztJQXFFTSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvY2hhdHMvY2hhdC9jaGF0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICNpY29uLW1vcmV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLm1lc3NhZ2UtYXJlYSB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuXG5cbiAgICAubWVzc2FnZSB7XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1heC13aWR0aDogOTUlO1xuICAgICAgICBtaW4td2lkdGg6IDU1JTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCA3cHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiZWRmZmY7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAubWVzc2FnZS5pbmNvbWluZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICBwIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMXB4IDExcHggMTFweDtcbiAgICAgICAgYmFja2dyb3VuZDogICNmZmU5ZDE7XG4gICAgICB9XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWVzc2FnZS5vdXRnb2luZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHggMTFweCAwIDExcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWZvb3RlciB7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXG4gICAgLm1lc3NhZ2UtaW5wdXQge1xuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/chats/chat/chat-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/chats/chat/chat-page.component.ts ***!
  \**************************************************************/
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_options_chat_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-options/chat-options.component */ "./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.ts");








var ChatPage = /** @class */ (function () {
    function ChatPage(route, router, chatService, userService, rideService, popoverController) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.chatService = chatService;
        this.userService = userService;
        this.rideService = rideService;
        this.popoverController = popoverController;
        this.messages = [];
        this.currentUser = this.userService.user.getValue();
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.chatId = _this.router.getCurrentNavigation().extras.state.chatId;
                _this.getChat(_this.chatId);
                console.log(_this.chatId);
            }
        });
    }
    ChatPage.prototype.ngOnInit = function () {
    };
    ChatPage.prototype.ionViewWillEnter = function () {
        this.scrollBottom();
        this.getChat(this.chatId);
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
    ChatPage.prototype.getCurrentBlockList = function () {
        var _this = this;
        this.userService.getBlockList(this.currentUser.id).subscribe(function (blockList) {
            blockList.forEach(function (userId) {
                if (userId === _this.otherUser.id) {
                    _this.isOtherUserBlocked = true;
                }
            });
        });
    };
    ChatPage.prototype.getOtherUserBlockList = function () {
        var _this = this;
        this.userService.getBlockList(this.otherUser.id).subscribe(function (blockList) {
            blockList.forEach(function (userId) {
                if (userId === _this.currentUser.id) {
                    _this.isCurrentUserBlocked = true;
                }
            });
        });
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        if (this.msg) {
            var message = {
                content: this.msg,
                date: new Date(),
                fromUserId: this.currentUser.id,
                fromUserName: this.currentUser.name,
                toUserId: this.getReceiver()
            };
            if (!this.isCurrentUserBlocked && !this.isOtherUserBlocked) {
                this.chatService.sendMessage(message, this.chat.id).then(function () { return _this.getChat(_this.chat.id); });
            }
            else {
                console.log('blocked');
            }
            this.msg = '';
            this.scrollBottom();
        }
    };
    ChatPage.prototype.scrollBottom = function () {
        this.content.scrollToBottom(300);
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
            this.userService.getUser(this.chat.driverUser).subscribe(function (user) {
                _this.otherUser = user;
                _this.getOtherUserBlockList();
                _this.getCurrentBlockList();
            });
        }
        else {
            this.userService.getUser(this.chat.passengerUser).subscribe(function (user) {
                _this.otherUser = user;
                _this.getOtherUserBlockList();
                _this.getCurrentBlockList();
            });
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
            incoming: message.fromUserId !== this.currentUser.id,
            outgoing: message.fromUserId === this.currentUser.id,
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
    ChatPage.prototype.blockUser = function (userId) {
        this.isOtherUserBlocked = true;
        this.userService.blockUser(userId);
    };
    ChatPage.prototype.unblockUser = function (userId) {
        this.isOtherUserBlocked = false;
        this.userService.unBlockUser(userId);
    };
    ChatPage.prototype.presentPopover = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _chat_options_chat_options_component__WEBPACK_IMPORTED_MODULE_7__["ChatOptionsComponent"],
                            event: event,
                            componentProps: {
                                chatId: this.chat.id,
                                otherUserId: this.otherUser.id,
                                isOtherUserBlocked: this.isOtherUserBlocked
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.isOtherUserBlocked = dataReturned.data;
                                // alert('Modal Sent Data :'+ dataReturned);
                            }
                        });
                        return [4 /*yield*/, popover.present().then()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat-page.component.html */ "./src/app/pages/tabs/chats/chat/chat-page.component.html"),
            styles: [__webpack_require__(/*! ./chat-page.component.scss */ "./src/app/pages/tabs/chats/chat/chat-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_5__["RideService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/chats/chat/chat.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/chats/chat/chat.module.ts ***!
  \******************************************************/
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
/* harmony import */ var _chat_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-page.component */ "./src/app/pages/tabs/chats/chat/chat-page.component.ts");
/* harmony import */ var _chat_options_chat_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-options/chat-options.component */ "./src/app/pages/tabs/chats/chat/chat-options/chat-options.component.ts");








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
            declarations: [_chat_page_component__WEBPACK_IMPORTED_MODULE_6__["ChatPage"], _chat_options_chat_options_component__WEBPACK_IMPORTED_MODULE_7__["ChatOptionsComponent"]],
            entryComponents: [_chat_options_chat_options_component__WEBPACK_IMPORTED_MODULE_7__["ChatOptionsComponent"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-chats-chat-chat-module.js.map
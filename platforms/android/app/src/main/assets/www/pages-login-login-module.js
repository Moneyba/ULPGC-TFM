(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var ng4_intl_phone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-intl-phone */ "./node_modules/ng4-intl-phone/ng4-intl-phone.es5.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng4_intl_phone__WEBPACK_IMPORTED_MODULE_7__["InternationalPhoneModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen padding>\n\n    <ion-slides #slides [options]=\"{onlyExternal: false}\" >\n        <ion-slide class=\"slide-container1\">\n            <h1 class=\"title\">Welcome to <br><b>ULPGC <i>RideSharing</i></b></h1>\n            <div class=\"user-photo\" padding-top>\n                <ion-avatar>\n                    <img [src]=\"currentUser?.photo || '/assets/icon/favicon.jpg'\">\n                </ion-avatar>\n            </div>\n\n\n            <footer>\n                <p class=\"text-policy\">Read our\n                    <ion-label color=\"secondary\">Privacy Policy</ion-label>\n                    . Tap \"Agree and Continue\" to accept\n                    the\n                    <ion-label color=\"secondary\">Terms of Service</ion-label>\n                </p>\n                <ion-button class=\"accept-button\" (click)=\"slides.slideNext()\">Agree and Continue</ion-button>\n            </footer>\n\n        </ion-slide>\n        <ion-slide >\n\n            <div *ngIf=\"!phoneSent\" class=\"slide-container2\">\n                <h2 class=\"phone-title\">Verify your phone number</h2>\n                <p class=\"phone-text\">ULPGC RideSharing will send a SMS message to verify your phone number.<br>\n                    Enter your country code and phone number.</p>\n\n                <div class=\"phone-input\">\n                    <int-phone-prefix [defaultCountry]=\"'es'\"\n                                      [(ngModel)]=\"phoneNumber\"></int-phone-prefix>\n\n                    <div>\n                        <ion-spinner name=\"lines\" *ngIf=\"isSpinner\"></ion-spinner>\n                    </div>\n                    <div>\n                        <p class=\"text-policy\"> You must be <ion-label color=\"secondary\">at least 16 years old</ion-label> to register.</p>\n                        <ion-button class=\"accept-button\" type=\"submit\" color=\"primary\" (click)=\"logIn()\">Next</ion-button>\n                    </div>\n                </div>\n            </div>\n\n            <div *ngIf=\"phoneSent\" class=\"slide-container2\">\n                <h2 class=\"phone-title\">Verify your phone number</h2>\n                <p class=\"phone-text\">Waiting to automatically detect an SMS sent to your phone number</p>\n\n                <div class=\"phone-input\">\n                    <ion-input class=\"code-input\" type=\"number\" [(ngModel)]=\"confirmationCode\"\n                               placeholder=\"Enter the code here\"></ion-input>\n\n                    <ion-button type=\"submit\" color=\"primary\" (click)=\"sendCode()\">Next</ion-button>\n                </div>\n            </div>\n        </ion-slide>\n\n    </ion-slides>\n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%; }\n  ion-slides .slide-container1 {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: space-around;\n            justify-content: space-around; }\n  ion-slides .slide-container1 .title {\n      font-size: 30px; }\n  ion-slides .slide-container2 {\n    height: 100%;\n    margin-top: 30px;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: start;\n            justify-content: start; }\n  ion-slides .slide-container2 .phone-title {\n      font-size: 26px;\n      color: #002e63; }\n  ion-slides .slide-container2 .phone-text {\n      margin: 10px; }\n  ion-slides .slide-container2 .phone-input {\n      display: -webkit-flex;\n      display: flex;\n      -webkit-flex-direction: column;\n              flex-direction: column;\n      -webkit-justify-content: space-between;\n              justify-content: space-between;\n      height: inherit;\n      margin-bottom: 50px;\n      margin-top: 20px; }\n  ion-slides .slide-container2 .code-input {\n      max-height: 30px;\n      border: 1px solid #dedede !important; }\n  .user-photo ion-avatar {\n  margin: 0 auto;\n  width: 270px;\n  height: 270px; }\n  .text-policy {\n  font-size: 15px; }\n  .accept-button {\n  width: 95%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQVksRUFBQTtFQURkO0lBSUkscUJBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUE7RUFOakM7TUFTTSxlQUFlLEVBQUE7RUFUckI7SUFnQkksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDhCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTtFQXBCMUI7TUF1Qk0sZUFBZTtNQUNmLGNBQWMsRUFBQTtFQXhCcEI7TUE0Qk0sWUFBWSxFQUFBO0VBNUJsQjtNQWdDTSxxQkFBYTtNQUFiLGFBQWE7TUFDYiw4QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLHNDQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTtFQXJDdEI7TUF3Q00sZ0JBQWdCO01BRWhCLG9DQUFvQyxFQUFBO0VBUTFDO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFHZjtFQUNFLGVBQWUsRUFBQTtFQUdqQjtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcblxuICAuc2xpZGUtY29udGFpbmVyMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cblxuICB9XG5cbiAgLnNsaWRlLWNvbnRhaW5lcjIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuXG4gICAgLnBob25lLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIGNvbG9yOiAjMDAyZTYzO1xuICAgIH1cblxuICAgIC5waG9uZS10ZXh0IHtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5cbiAgICAucGhvbmUtaW5wdXQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgLmNvZGUtaW5wdXQge1xuICAgICAgbWF4LWhlaWdodDogMzBweDtcblxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZSAhaW1wb3J0YW50O1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG4udXNlci1waG90byBpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbn1cblxuLnRleHQtcG9saWN5IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYWNjZXB0LWJ1dHRvbiB7XG4gIHdpZHRoOiA5NSU7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_fcm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/fcm.service */ "./src/app/core/services/fcm.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
/* harmony import */ var ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-angular */ "./node_modules/ionic-angular/index.js");









var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, authService, router, fcmService, platform, fireAuth) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.fcmService = fcmService;
        this.platform = platform;
        this.fireAuth = fireAuth;
        this.isSpinner = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.createLoginForm();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.phoneNumber = null;
        this.phoneSent = false;
        this.verificationID = null;
        this.confirmationCode = null;
    };
    LoginPage.prototype.createLoginForm = function () {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginPage.prototype.logIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var phoneExists, _a, verificationId, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isSpinner = true;
                        if (!(this.phoneNumber && this.phoneNumber.length > 0 && this.phoneNumber.includes('+'))) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.authService.checkPhone(this.phoneNumber).catch(function (e) {
                                console.error(e);
                                _this.isSpinner = false;
                            })];
                    case 1:
                        phoneExists = _c.sent();
                        console.log(phoneExists);
                        if (!(phoneExists && phoneExists.length > 0)) return [3 /*break*/, 7];
                        if (!this.platform.is('ios')) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000).catch(function (e) {
                                console.error(e);
                                // alert(JSON.stringify(e));
                                _this.isSpinner = false;
                            })];
                    case 2:
                        _a.verificationID = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!this.platform.is('android')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000).catch(function (e) {
                                console.error(e);
                                // alert(JSON.stringify(e));
                                _this.isSpinner = false;
                            })];
                    case 4:
                        verificationId = (_c.sent()).verificationId;
                        this.verificationID = verificationId;
                        _c.label = 5;
                    case 5:
                        console.log(this.platform);
                        _b = this;
                        return [4 /*yield*/, this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000)];
                    case 6:
                        _b.verificationID = _c.sent();
                        this.isSpinner = false;
                        this.phoneSent = true;
                        console.log('si');
                        return [3 /*break*/, 8];
                    case 7:
                        console.log(this.phoneNumber);
                        this.authService.createUser({
                            phoneNumber: this.phoneNumber
                        }).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this;
                                        return [4 /*yield*/, this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000)];
                                    case 1:
                                        _a.verificationID = _b.sent();
                                        this.isSpinner = false;
                                        this.phoneSent = true;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _c.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        console.log('no');
                        _c.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.sendCode = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isSpinner = true;
                        return [4 /*yield*/, this.fireAuth.signInWithVerificationId(this.verificationID, this.confirmationCode)];
                    case 1:
                        _a.sent();
                        // await this.fireAuth.signInAndRetrieveDataWithCredential(credential).catch(e => {
                        //     console.error(e);
                        //     this.utils.dissmissLoading();
                        // });
                        this.isSpinner = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Slides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Slides"])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_fcm_service__WEBPACK_IMPORTED_MODULE_5__["FcmService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthentication"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map
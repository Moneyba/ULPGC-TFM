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

module.exports = "<ion-content fullscreen padding>\n    <!-- <form [formGroup]=\"loginForm\">\n       <ion-input placeholder=\"email\" formControlName=\"email\" required></ion-input>\n       <ion-input placeholder=\"password\" type=\"password\" formControlName=\"password\" required></ion-input>\n     </form>\n     <ion-button [disabled]=\"loginForm.invalid\" (click)=\"login()\">Login</ion-button>-->\n\n\n    <ion-slides #slides [options]=\"{onlyExternal: false}\">\n        <ion-slide class=\"slide-container1\">\n            <h1 class=\"title\">Welcome to <br><b>ULPGC <i>RideSharing</i></b></h1>\n            <div class=\"user-photo\" padding-top>\n                <ion-avatar>\n                    <img [src]=\"currentUser?.photo || '/assets/icon/favicon.jpg'\">\n                </ion-avatar>\n            </div>\n\n\n            <footer padding>\n                <p class=\"privacy-policy\">Read our\n                    <ion-label color=\"secondary\">Privacy Policy</ion-label>\n                    . Tap \"Agree and Continue\" to accept\n                    the\n                    <ion-label color=\"secondary\">Terms of Service</ion-label>\n                </p>\n                <ion-button class=\"accept-button\" (click)=\"slides.slideNext()\">Agree and Continue</ion-button>\n            </footer>\n\n        </ion-slide>\n        <ion-slide>\n            <div *ngIf=\"!phoneSent\" class=\"slide-container2\">\n                <h2 class=\"phone-title\">Verify your phone number</h2>\n                <p class=\"phone-text\">ULPGC RideSharing will send a SMS message to verify your phone number.<br>\n                    Enter your country code and phone number.</p>\n\n                <div class=\"phone-input\">\n                    <int-phone-prefix [defaultCountry]=\"'es'\"\n                                      [(ngModel)]=\"phoneNumber\"></int-phone-prefix>\n                    <ion-button margin-top type=\"submit\" color=\"primary\" (click)=\"logIn()\">Next</ion-button>\n                </div>\n            </div>\n\n            <div *ngIf=\"phoneSent\">\n                <ion-input type=\"text\" [(ngModel)]=\"confirmationCode\"></ion-input>\n                <ion-button type=\"submit\" color=\"primary\" (click)=\"sendCode()\">Send code</ion-button>\n            </div>\n        </ion-slide>\n\n    </ion-slides>\n\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%; }\n  ion-slides .slide-container1 {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: space-around;\n            justify-content: space-around; }\n  ion-slides .slide-container1 .title {\n      font-size: 30px; }\n  ion-slides .slide-container1 .privacy-policy {\n      font-size: 15px; }\n  ion-slides .slide-container1 .accept-button {\n      width: 300px; }\n  ion-slides .slide-container2 {\n    height: 100%;\n    margin-top: 20px;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: start;\n            justify-content: start; }\n  ion-slides .slide-container2 .phone-title {\n      font-size: 26px;\n      color: #002e63; }\n  ion-slides .slide-container2 .phone-text {\n      margin: 10px; }\n  ion-slides .slide-container2 .phone-input {\n      display: -webkit-flex;\n      display: flex;\n      -webkit-flex-direction: column;\n              flex-direction: column;\n      -webkit-justify-content: space-between;\n              justify-content: space-between;\n      height: inherit;\n      margin-bottom: 40px;\n      margin-top: 20px; }\n  .user-photo ion-avatar {\n  margin: 0 auto;\n  width: 270px;\n  height: 270px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQVksRUFBQTtFQURkO0lBSUkscUJBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUE7RUFOakM7TUFTTSxlQUFlLEVBQUE7RUFUckI7TUFhTSxlQUFlLEVBQUE7RUFickI7TUFpQk0sWUFBWSxFQUFBO0VBakJsQjtJQXNCSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsOEJBQXNCO1lBQXRCLHNCQUFzQixFQUFBO0VBMUIxQjtNQTZCTSxlQUFlO01BQ2YsY0FBYyxFQUFBO0VBOUJwQjtNQWtDTSxZQUFZLEVBQUE7RUFsQ2xCO01Bc0NNLHFCQUFhO01BQWIsYUFBYTtNQUNiLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsc0NBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGdCQUFnQixFQUFBO0VBT3RCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWNvbnRhaW5lcjEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIC50aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAucHJpdmFjeS1wb2xpY3kge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIC5hY2NlcHQtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICB9XG4gIH1cblxuICAuc2xpZGUtY29udGFpbmVyMiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICAucGhvbmUtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgY29sb3I6ICMwMDJlNjM7XG4gICAgfVxuXG4gICAgLnBob25lLXRleHQge1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cblxuICAgIC5waG9uZS1pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICB9XG5cbn1cblxuLnVzZXItcGhvdG8gaW9uLWF2YXRhciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogMjcwcHg7XG59XG4iXX0= */"

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
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");









var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, authService, router, fcmService, platform, fireAuth, loadingService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.fcmService = fcmService;
        this.platform = platform;
        this.fireAuth = fireAuth;
        this.loadingService = loadingService;
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
                        this.loadingService.presentLoading();
                        if (!(this.phoneNumber && this.phoneNumber.length > 0 && this.phoneNumber.includes('+'))) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.authService.checkPhone(this.phoneNumber).catch(function (e) {
                                console.error(e);
                                _this.loadingService.dissmissLoading();
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
                                _this.loadingService.dissmissLoading();
                            })];
                    case 2:
                        _a.verificationID = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!this.platform.is('android')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.fireAuth.verifyPhoneNumber(this.phoneNumber, 120000).catch(function (e) {
                                console.error(e);
                                // alert(JSON.stringify(e));
                                _this.loadingService.dissmissLoading();
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
                        this.loadingService.dissmissLoading();
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
                                        console.log('usuario creado y verificado');
                                        this.loadingService.dissmissLoading();
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
                        this.loadingService.presentLoading();
                        console.log(this.verificationID);
                        console.log(this.confirmationCode);
                        return [4 /*yield*/, this.fireAuth.signInWithVerificationId(this.verificationID, this.confirmationCode)];
                    case 1:
                        _a.sent();
                        // await this.fireAuth.signInAndRetrieveDataWithCredential(credential).catch(e => {
                        //     console.error(e);
                        //     this.utils.dissmissLoading();
                        // });
                        this.loadingService.dissmissLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
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
            _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthentication"],
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map
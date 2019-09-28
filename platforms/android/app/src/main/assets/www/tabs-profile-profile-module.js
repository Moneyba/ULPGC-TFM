(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-profile-profile-module"],{

/***/ "./src/app/pages/tabs/profile/profile-popover/profile-popover.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-popover/profile-popover.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-list-header>Account options</ion-list-header>\n  <ion-item button (click)=\"gotoProfileFormPage()\">Edit Profile</ion-item>\n  <ion-item button (click)=\"logout()\">Logout</ion-item>\n</ion-list>\n"

/***/ }),

/***/ "./src/app/pages/tabs/profile/profile-popover/profile-popover.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-popover/profile-popover.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9wcm9maWxlLXBvcG92ZXIvcHJvZmlsZS1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tabs/profile/profile-popover/profile-popover.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-popover/profile-popover.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfilePopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePopoverComponent", function() { return ProfilePopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");





var ProfilePopoverComponent = /** @class */ (function () {
    function ProfilePopoverComponent(router, navParams, popoverController, firebaseAuthentication) {
        this.router = router;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.firebaseAuthentication = firebaseAuthentication;
        this.currentUser = this.navParams.data.user;
    }
    ProfilePopoverComponent.prototype.ngOnInit = function () { };
    ProfilePopoverComponent.prototype.gotoProfileFormPage = function () {
        var navigationExtras = {
            state: {
                user: this.currentUser
            }
        };
        this.popoverController.dismiss();
        this.router.navigate(['profile-form'], navigationExtras);
    };
    ProfilePopoverComponent.prototype.logout = function () {
        this.popoverController.dismiss();
        this.firebaseAuthentication.signOut();
        this.router.navigateByUrl('login');
    };
    ProfilePopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-popover',
            template: __webpack_require__(/*! ./profile-popover.component.html */ "./src/app/pages/tabs/profile/profile-popover/profile-popover.component.html"),
            styles: [__webpack_require__(/*! ./profile-popover.component.scss */ "./src/app/pages/tabs/profile/profile-popover/profile-popover.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthentication"]])
    ], ProfilePopoverComponent);
    return ProfilePopoverComponent;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.module.ts ***!
  \******************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/tabs/profile/profile.page.ts");
/* harmony import */ var _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-popover/profile-popover.component */ "./src/app/pages/tabs/profile/profile-popover/profile-popover.component.ts");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"], _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePopoverComponent"]],
            entryComponents: [_profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePopoverComponent"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/profile.page.html":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title text-center>Profile</ion-title>\n    <ion-icon id=\"icon-more\" name=\"md-more\" slot=\"end\" (click)=\"presentPopover($event)\"></ion-icon>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class=\"user-photo\" padding-top>\n    <ion-avatar>\n      <img [src]=\"currentUser?.photo || '/assets/icon/favicon.jpg'\">\n    </ion-avatar>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>Display Name</p>\n        <h2>{{currentUser?.name}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>Mobile Phone Number</p>\n        <h2>{{currentUser?.phoneNumber}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"goToPublicProfilePage()\">\n      <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>Rating</p>\n        <h2 *ngIf=\"currentUser?.averageRating\">{{currentUser?.averageRating}}/5 - {{currentUser?.numberOfRatings}} ratings</h2>\n        <h2 *ngIf=\"!currentUser?.averageRating\">No ratings yet</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"gotoRewardsCatalogPage()\">\n      <ion-icon name=\"gift\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>Earned Points</p>\n        <h2>{{currentUser?.points?.currentPoints}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"currentUser?.carPlate\">\n      <ion-icon name=\"car\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>Car Plate</p>\n        <h2>{{currentUser?.carPlate}}</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n    <!--<ion-button (click)=\"gotoSetup()\">Setup</ion-button>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/profile/profile.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .user-photo ion-avatar {\n  margin: 0 auto;\n  width: 120px;\n  height: 120px; }\n\n:host ion-list {\n  margin-top: 24px; }\n\n:host ion-list p {\n    font-size: 12px;\n    font-weight: 400;\n    padding-bottom: 4px; }\n\n:host ion-list h2 {\n    font-weight: 400;\n    opacity: .5; }\n\n:host #icon-more {\n  font-size: 20px;\n  margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUpqQjtFQVFJLGdCQUFnQixFQUFBOztBQVJwQjtJQVVNLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBWnpCO0lBZU0sZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTs7QUFoQmpCO0VBcUJJLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnVzZXItcGhvdG8gaW9uLWF2YXRhciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIH07XG4gICAgaDIge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cbiAgfVxuXG4gICNpY29uLW1vcmV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/profile/profile.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.page.ts ***!
  \****************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-popover/profile-popover.component */ "./src/app/pages/tabs/profile/profile-popover/profile-popover.component.ts");






var ProfilePage = /** @class */ (function () {
    function ProfilePage(userService, router, popoverController) {
        this.userService = userService;
        this.router = router;
        this.popoverController = popoverController;
        this.currentUser = this.userService.user.getValue();
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.goToPublicProfilePage = function () {
        var navigationExtras = {
            state: {
                userId: this.currentUser.id
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    ProfilePage.prototype.gotoRatingsPage = function () {
        var navigationExtras = {
            state: {
                user: this.currentUser
            }
        };
        this.router.navigate(['ratings'], navigationExtras);
    };
    ProfilePage.prototype.gotoRewardsCatalogPage = function () {
        var navigationExtras = {
            state: {
                user: this.currentUser
            }
        };
        this.router.navigate(['rewards-catalog'], navigationExtras);
    };
    /*  public gotoSetup(): void {
          const navigationExtras: NavigationExtras = {
              state: {
                  user: this.currentUser
              }
          };
          this.router.navigate(['initial-setup'], navigationExtras);
      }*/
    ProfilePage.prototype.presentPopover = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _profile_popover_profile_popover_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePopoverComponent"],
                            event: event,
                            componentProps: {
                                user: this.currentUser
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/tabs/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/tabs/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-profile-profile-module.js.map
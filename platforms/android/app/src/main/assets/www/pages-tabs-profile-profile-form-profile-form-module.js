(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-profile-profile-form-profile-form-module"],{

/***/ "./src/app/pages/tabs/profile/profile-form/profile-form.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-form/profile-form.module.ts ***!
  \************************************************************************/
/*! exports provided: ProfileFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormPageModule", function() { return ProfileFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-form.page */ "./src/app/pages/tabs/profile/profile-form/profile-form.page.ts");







var routes = [
    {
        path: '',
        component: _profile_form_page__WEBPACK_IMPORTED_MODULE_6__["ProfileFormPage"]
    }
];
var ProfileFormPageModule = /** @class */ (function () {
    function ProfileFormPageModule() {
    }
    ProfileFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_form_page__WEBPACK_IMPORTED_MODULE_6__["ProfileFormPage"]]
        })
    ], ProfileFormPageModule);
    return ProfileFormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/profile-form/profile-form.page.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-form/profile-form.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--  <form #f=\"ngForm\" (ngSubmit)=\"uploadAvatar(f)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Update your profile photo</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <img alt=\"avatar\" [src]=\"currentUser?.photo || '/assets/icon/favicon.png'\">\n\n            </ion-item>\n            <ion-item>\n              <input name=\"file\" type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"attachFile($event)\" ngModel required />\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"f.invalid\" expand=\"block\">Update photo</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>-->\n  <form [formGroup]=\"profileForm\">\n\n    <ion-item>\n      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n      <ion-label>Display Name</ion-label>\n      <ion-input formControlName=\"name\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n      <ion-label>Phone Number</ion-label>\n      <input formControlName=\"phoneNumber\" disabled>\n    </ion-item>\n    <ion-button expand=\"full\" type=\"submit\" (click)=\"updateUser()\"\n                [disabled]=\"profileForm.invalid\">\n      Save\n    </ion-button>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/profile/profile-form/profile-form.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-form/profile-form.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9wcm9maWxlLWZvcm0vcHJvZmlsZS1mb3JtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tabs/profile/profile-form/profile-form.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-form/profile-form.page.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormPage", function() { return ProfileFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProfileFormPage = /** @class */ (function () {
    function ProfileFormPage(userService, fb, router) {
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.picToView = '/assets/icon/favicon.png';
        this.currentUser = this.userService.user.getValue();
        // this.picToView = this.currentUser.photo;
    }
    ProfileFormPage.prototype.ngOnInit = function () {
        this.createProfileForm();
    };
    ProfileFormPage.prototype.createProfileForm = function () {
        this.profileForm = this.fb.group({
            name: [this.currentUser.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phoneNumber: [this.currentUser.name],
            photo: [this.currentUser.photo]
        });
    };
    ProfileFormPage.prototype.attachFile = function (e) {
        if (e.target.files.length == 0) {
            console.log("No file selected!");
            return;
        }
        console.log(e);
        var file = e.target.files[0];
        // this.currentUser.photo = file;
    };
    ProfileFormPage.prototype.updateUser = function () {
        var _this = this;
        var user = {
            id: this.currentUser.id,
            name: this.profileForm.get('name').value,
            photo: this.profileForm.get('photo').value,
            phoneNumber: this.currentUser.phoneNumber,
            numberOfRatings: this.currentUser.numberOfRatings ? this.currentUser.numberOfRatings : 0,
            rating: this.currentUser.rating ? this.currentUser.rating : 0,
            points: this.currentUser.points ? this.currentUser.points : 0
        };
        this.userService.updateUser(user).then(function (result) { return _this.router.navigateByUrl('tabs'); });
    };
    ProfileFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-form',
            template: __webpack_require__(/*! ./profile-form.page.html */ "./src/app/pages/tabs/profile/profile-form/profile-form.page.html"),
            styles: [__webpack_require__(/*! ./profile-form.page.scss */ "./src/app/pages/tabs/profile/profile-form/profile-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProfileFormPage);
    return ProfileFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-profile-profile-form-profile-form-module.js.map
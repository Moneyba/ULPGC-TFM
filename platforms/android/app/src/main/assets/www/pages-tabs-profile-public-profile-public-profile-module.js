(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-profile-public-profile-public-profile-module"],{

/***/ "./src/app/pages/tabs/profile/public-profile/public-profile.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/public-profile/public-profile.module.ts ***!
  \****************************************************************************/
/*! exports provided: PublicProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfilePageModule", function() { return PublicProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _public_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public-profile.page */ "./src/app/pages/tabs/profile/public-profile/public-profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _public_profile_page__WEBPACK_IMPORTED_MODULE_6__["PublicProfilePage"]
    }
];
var PublicProfilePageModule = /** @class */ (function () {
    function PublicProfilePageModule() {
    }
    PublicProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_public_profile_page__WEBPACK_IMPORTED_MODULE_6__["PublicProfilePage"]]
        })
    ], PublicProfilePageModule);
    return PublicProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/public-profile/public-profile.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/public-profile/public-profile.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{ 'PROFILE.userDetails' | translate:params }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"user-photo\" padding-top>\n    <ion-avatar>\n      <img [src]=\"user?.photo || '/assets/icon/favicon.jpg'\">\n    </ion-avatar>\n    <ion-card-title id=\"name-user\">{{user?.name}}</ion-card-title>\n    <div class=\"rating-value\">\n      <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n      <label id=\"user-rating\">{{user?.averageRating}}/5 ({{user?.numberOfRatings}})</label>\n    </div>\n  </div>\n\n    <ion-item *ngIf=\"user?.carDetails\">\n      <ion-icon name=\"car\"></ion-icon>\n      <ion-label class=\"car-details\">\n        <h2>{{user?.carDetails}}</h2>\n      </ion-label>\n    </ion-item>\n  <ion-title text-center>{{ 'PROFILE.ratings' | translate:params }}</ion-title>\n  <ion-list *ngFor=\"let rating of ratings\" class=\"list-ratings\">\n\n    <ion-item>\n      <ion-avatar slot=\"start\" (click)=\"goToUserDetailsPage(user.id)\">\n        <img alt=\"userPhoto\" [src]=\"rating.fromUser?.photo \">\n      </ion-avatar>\n      <div class=\"user-info\">\n        <ion-label>\n          <h2>{{rating.fromUser?.name}}</h2>\n        </ion-label>\n        <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n        <label> {{rating.rating}}/5</label>\n        <ion-label>{{rating?.comment}}</ion-label>\n      </div>\n      <ion-card-subtitle slot=\"end\">{{rating.dateTime | date:'dd MMM h:mm'}} </ion-card-subtitle>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/profile/public-profile/public-profile.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/public-profile/public-profile.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .user-photo ion-avatar {\n  margin: 0 auto;\n  width: 120px;\n  height: 120px; }\n\n:host #name-user {\n  text-align: center; }\n\n:host .rating-value {\n  text-align: center; }\n\n:host .rating-container {\n  display: -webkit-flex;\n  display: flex;\n  width: 100%; }\n\n:host .rating-container ion-avatar {\n    -webkit-align-items: flex-start;\n            align-items: flex-start;\n    min-width: 64px; }\n\n:host .rating-container .rating-info {\n    margin-left: 10px;\n    width: 100%; }\n\n:host .rating-container .rating-info .user-info {\n      display: -webkit-flex;\n      display: flex;\n      -webkit-justify-content: space-between;\n              justify-content: space-between;\n      width: 100%; }\n\n:host .rating-container .rating-info .rating-value {\n      display: -webkit-flex;\n      display: flex; }\n\n:host .car-details {\n  margin-left: 10px; }\n\n:host .list-ratings {\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9wdWJsaWMtcHJvZmlsZS9wdWJsaWMtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFKakI7RUFPSSxrQkFBa0IsRUFBQTs7QUFQdEI7RUFVSSxrQkFBa0IsRUFBQTs7QUFWdEI7RUFjSSxxQkFBYTtFQUFiLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBZmY7SUFrQk0sK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixlQUFlLEVBQUE7O0FBbkJyQjtJQXVCTSxpQkFBaUI7SUFDakIsV0FBVyxFQUFBOztBQXhCakI7TUEyQlEscUJBQWE7TUFBYixhQUFhO01BQ2Isc0NBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixXQUFXLEVBQUE7O0FBN0JuQjtNQWlDUSxxQkFBYTtNQUFiLGFBQWEsRUFBQTs7QUFqQ3JCO0VBdUNJLGlCQUFpQixFQUFBOztBQXZDckI7RUEyQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL3Byb2ZpbGUvcHVibGljLXByb2ZpbGUvcHVibGljLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAudXNlci1waG90byBpb24tYXZhdGFyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuICAjbmFtZS11c2VyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnJhdGluZy12YWx1ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnJhdGluZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgbWluLXdpZHRoOiA2NHB4O1xuICAgIH1cblxuICAgIC5yYXRpbmctaW5mbyB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnJhdGluZy12YWx1ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhci1kZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5saXN0LXJhdGluZ3Mge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/profile/public-profile/public-profile.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/tabs/profile/public-profile/public-profile.page.ts ***!
  \**************************************************************************/
/*! exports provided: PublicProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfilePage", function() { return PublicProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");




var PublicProfilePage = /** @class */ (function () {
    function PublicProfilePage(route, router, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.userId = _this.router.getCurrentNavigation().extras.state.userId;
                _this.getUser();
            }
        });
    }
    PublicProfilePage.prototype.ngOnInit = function () {
    };
    PublicProfilePage.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.userId).subscribe(function (user) {
            _this.user = user;
            _this.getFromUsers();
        });
    };
    PublicProfilePage.prototype.goToUserDetailsPage = function (userId) {
        var navigationExtras = {
            state: {
                userId: userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    PublicProfilePage.prototype.getFromUsers = function () {
        var _this = this;
        this.ratings = this.user.ratings;
        this.ratings = this.sortByDate(this.ratings);
        if (this.user.ratings) {
            this.ratings.forEach(function (rating) {
                _this.userService.getUser(rating.fromUserId).subscribe(function (user) { return rating.fromUser = user; });
            });
        }
    };
    PublicProfilePage.prototype.sortByDate = function (array) {
        return array.sort(function (a, b) {
            return b.dateTime - a.dateTime;
        });
    };
    PublicProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__(/*! ./public-profile.page.html */ "./src/app/pages/tabs/profile/public-profile/public-profile.page.html"),
            styles: [__webpack_require__(/*! ./public-profile.page.scss */ "./src/app/pages/tabs/profile/public-profile/public-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PublicProfilePage);
    return PublicProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-profile-public-profile-public-profile-module.js.map
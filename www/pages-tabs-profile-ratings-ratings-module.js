(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-profile-ratings-ratings-module"],{

/***/ "./src/app/pages/tabs/profile/ratings/ratings.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/profile/ratings/ratings.module.ts ***!
  \**************************************************************/
/*! exports provided: RatingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPageModule", function() { return RatingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ratings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ratings.page */ "./src/app/pages/tabs/profile/ratings/ratings.page.ts");







var routes = [
    {
        path: '',
        component: _ratings_page__WEBPACK_IMPORTED_MODULE_6__["RatingsPage"]
    }
];
var RatingsPageModule = /** @class */ (function () {
    function RatingsPageModule() {
    }
    RatingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ratings_page__WEBPACK_IMPORTED_MODULE_6__["RatingsPage"]]
        })
    ], RatingsPageModule);
    return RatingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/profile/ratings/ratings.page.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/profile/ratings/ratings.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ratings</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-avatar>\n    <img [src]=\"user.photo || '/assets/icon/favicon.png'\">\n  </ion-avatar>\n  <ion-card-title>{{user.name}}</ion-card-title>\n  <ion-item>\n    <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n    <ion-label>\n      <p>Rating</p>\n      <h2>{{user?.averageRating}}/5 - {{user?.numberOfRatings}} ratings</h2>\n    </ion-label>\n  </ion-item>\n</ion-card>\n  <ion-list>\n    <ion-item *ngFor=\"let rating of user.ratings\">\n      <ion-grid (click)=\"goToUserDetailsPage(user.id)\">\n        <ion-row>\n          <ion-label>{{rating.fromUser.name}}</ion-label>\n          <ion-avatar>\n            <img alt=\"userPhoto\" [src]=\"rating.fromUser.photo\">\n          </ion-avatar>\n        </ion-row>\n        <ion-row>\n          <ion-label>\n            <h2>Rating: {{rating.rating}} / 5</h2>\n          </ion-label>\n          <p *ngIf=\"rating.comment\">{{rating?.comment}}</p>\n          <ion-card-subtitle>{{rating.dateTime | date:'dd MMM h:mm'}} </ion-card-subtitle>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/profile/ratings/ratings.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/profile/ratings/ratings.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvcHJvZmlsZS9yYXRpbmdzL3JhdGluZ3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tabs/profile/ratings/ratings.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/profile/ratings/ratings.page.ts ***!
  \************************************************************/
/*! exports provided: RatingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPage", function() { return RatingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RatingsPage = /** @class */ (function () {
    function RatingsPage(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.user = _this.router.getCurrentNavigation().extras.state.user;
            }
        });
    }
    RatingsPage.prototype.ngOnInit = function () {
    };
    RatingsPage.prototype.goToUserDetailsPage = function (userId) {
        var navigationExtras = {
            state: {
                userId: userId
            }
        };
        this.router.navigate(['public-profile'], navigationExtras);
    };
    RatingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ratings',
            template: __webpack_require__(/*! ./ratings.page.html */ "./src/app/pages/tabs/profile/ratings/ratings.page.html"),
            styles: [__webpack_require__(/*! ./ratings.page.scss */ "./src/app/pages/tabs/profile/ratings/ratings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RatingsPage);
    return RatingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-profile-ratings-ratings-module.js.map
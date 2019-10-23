(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-initial-setup-initial-setup-module"],{

/***/ "./src/app/pages/initial-setup/initial-setup.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/initial-setup/initial-setup.module.ts ***!
  \*************************************************************/
/*! exports provided: InitialSetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialSetupPageModule", function() { return InitialSetupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _initial_setup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initial-setup.page */ "./src/app/pages/initial-setup/initial-setup.page.ts");







var routes = [
    {
        path: '',
        component: _initial_setup_page__WEBPACK_IMPORTED_MODULE_6__["InitialSetupPage"]
    }
];
var InitialSetupPageModule = /** @class */ (function () {
    function InitialSetupPageModule() {
    }
    InitialSetupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_initial_setup_page__WEBPACK_IMPORTED_MODULE_6__["InitialSetupPage"]]
        })
    ], InitialSetupPageModule);
    return InitialSetupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/initial-setup/initial-setup.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/initial-setup/initial-setup.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content fullscreen>\n  <form [formGroup]=\"setUpForm\">\n    <h2 class=\"title\">Profile info</h2>\n\n        <p class=\"text-description\">Please introduce your name and an optional photo:</p>\n        <div class=\"user-photo\">\n          <ion-avatar>\n            <img [src]=\"photo\" (click)=\"uploadNewPhoto()\">\n          </ion-avatar>\n\n        </div>\n        <ion-item>\n          <ion-input formControlName=\"name\" required placeholder=\"Type your name here\"></ion-input>\n        </ion-item>\n      <div class=\"spinner-container\" *ngIf=\"isSpinning\">\n          <ion-spinner name=\"lines\"></ion-spinner>\n      </div>\n\n\n\n  </form>\n  <footer padding>\n    <ion-button (click)=\"updateUser()\" [disabled]=\"setUpForm.invalid\">Next</ion-button>\n  </footer>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/initial-setup/initial-setup.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/initial-setup/initial-setup.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  height: 100%; }\n  ion-content form {\n    height: 90%;\n    overflow: scroll;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n    margin: 0 30px; }\n  ion-content .text-description {\n    font-size: 18px;\n    text-align: center; }\n  ion-content .title {\n    font-size: 26px;\n    color: #002e63;\n    text-align: center; }\n  .user-photo ion-avatar {\n  margin: 0 auto;\n  width: 200px;\n  height: 200px; }\n  ion-button {\n  width: 100%; }\n  ion-item {\n  margin: 0 20px; }\n  footer {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end; }\n  .spinner-container {\n  width: 100%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL2luaXRpYWwtc2V0dXAvaW5pdGlhbC1zZXR1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7RUFEZDtJQUlJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLGNBQWMsRUFBQTtFQVRsQjtJQWFJLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQWR0QjtJQWtCSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBSXRCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFLZjtFQUNFLFdBQVcsRUFBQTtFQUdiO0VBQ0UsY0FDRixFQUFBO0VBRUE7RUFDRSxxQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQUczQjtFQUNFLFdBQVc7RUFDWCxxQkFBYTtFQUFiLGFBQWE7RUFDYiwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbml0aWFsLXNldHVwL2luaXRpYWwtc2V0dXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgZm9ybSB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiAwIDMwcHg7XG4gIH1cblxuICAudGV4dC1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiAjMDAyZTYzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4udXNlci1waG90byBpb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuXG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDAgMjBweFxufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/initial-setup/initial-setup.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/initial-setup/initial-setup.page.ts ***!
  \***********************************************************/
/*! exports provided: InitialSetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialSetupPage", function() { return InitialSetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/utils.service */ "./src/app/core/services/utils.service.ts");
/* harmony import */ var ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-angular */ "./node_modules/ionic-angular/index.js");








var InitialSetupPage = /** @class */ (function () {
    function InitialSetupPage(fb, router, route, userService, utilsService, camera) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.utilsService = utilsService;
        this.camera = camera;
        this.photoHasChanged = false;
        this.isSpinning = true;
        this.userService.getLoggedUser().subscribe(function (user) {
            _this.currentUser = user;
            _this.photo = _this.currentUser ? _this.currentUser.photo : '/assets/icon/favicon.jpg';
            _this.createSetupForm();
        });
    }
    InitialSetupPage.prototype.ngOnInit = function () {
        this.createSetupForm();
    };
    InitialSetupPage.prototype.createSetupForm = function () {
        this.setUpForm = this.fb.group({
            name: [this.currentUser ? this.currentUser.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            photo: [this.photo]
        });
    };
    InitialSetupPage.prototype.updateUser = function () {
        var _this = this;
        var user = {
            id: this.currentUser.id,
            name: this.setUpForm.get('name').value,
            photo: this.setUpForm.get('photo').value,
            averageRating: this.currentUser ? this.currentUser.averageRating : 0,
            numberOfRatings: this.currentUser ? this.currentUser.numberOfRatings : 0,
            isAdmin: this.currentUser ? this.currentUser.isAdmin : false,
            points: {
                currentPoints: this.currentUser ? this.currentUser.points.currentPoints : 0,
                blockedPoints: this.currentUser ? this.currentUser.points.blockedPoints : 0,
                exchangedPoints: this.currentUser ? this.currentUser.points.exchangedPoints : 0
            }
        };
        this.userService.updateUser(user).then(function () {
            _this.router.navigateByUrl('tabs');
        });
    };
    InitialSetupPage.prototype.uploadNewPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions, preview, base64Image, preset, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utilsService.actionSheetCameraOptions()];
                    case 1:
                        cameraOptions = _a.sent();
                        return [4 /*yield*/, this.camera.getPicture(cameraOptions)];
                    case 2:
                        preview = _a.sent();
                        base64Image = 'data:image / jpeg;base64,' + preview;
                        this.isSpinning = true;
                        preset = 'gfllyeot';
                        return [4 /*yield*/, this.utilsService.uploadBase64ImageToCloudinary(base64Image, preset)];
                    case 3:
                        url = _a.sent();
                        this.isSpinning = false;
                        this.photo = url;
                        this.setUpForm.get('photo').setValue(url);
                        this.photoHasChanged = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Slides"])
    ], InitialSetupPage.prototype, "slides", void 0);
    InitialSetupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initial-setup',
            template: __webpack_require__(/*! ./initial-setup.page.html */ "./src/app/pages/initial-setup/initial-setup.page.html"),
            styles: [__webpack_require__(/*! ./initial-setup.page.scss */ "./src/app/pages/initial-setup/initial-setup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _core_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]])
    ], InitialSetupPage);
    return InitialSetupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-initial-setup-initial-setup-module.js.map
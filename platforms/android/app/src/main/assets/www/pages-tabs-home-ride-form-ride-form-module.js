(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-home-ride-form-ride-form-module"],{

/***/ "./src/app/pages/tabs/home/ride-form/ride-form.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-form/ride-form.module.ts ***!
  \***************************************************************/
/*! exports provided: RideFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideFormPageModule", function() { return RideFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ride_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ride-form.page */ "./src/app/pages/tabs/home/ride-form/ride-form.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../date-picker/date-picker.component */ "./src/app/pages/tabs/home/date-picker/date-picker.component.ts");
/* harmony import */ var _date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../date-picker/date-picker.module */ "./src/app/pages/tabs/home/date-picker/date-picker.module.ts");












var routes = [
    {
        path: '',
        component: _ride_form_page__WEBPACK_IMPORTED_MODULE_6__["RideFormPage"]
    }
];
var RideFormPageModule = /** @class */ (function () {
    function RideFormPageModule() {
    }
    RideFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"],
                _date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_11__["DatePickerModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBEavHbLwLZhyr1L8psKmof-84BlLqbRn8',
                    libraries: ['places']
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_8__["AgmDirectionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ride_form_page__WEBPACK_IMPORTED_MODULE_6__["RideFormPage"]],
            entryComponents: [_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_10__["DatePickerComponent"]]
        })
    ], RideFormPageModule);
    return RideFormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/home/ride-form/ride-form.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-form/ride-form.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Offer A Ride</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"form-content\">\n        <form [formGroup]=\"rideForm\">\n            <ion-item>\n                <ion-icon name=\"locate\" color=\"primary\"></ion-icon>\n                <input #searchOrigin (input)=\"clearLocationIfBlank($event.target.value, 'origin')\" formControlName=\"origin\"\n                       placeholder=\"From\">\n            </ion-item>\n            <ion-item>\n                <ion-icon name=\"pin\" color=\"primary\"></ion-icon>\n                <input #searchDestination (input)=\"clearLocationIfBlank($event.target.value, 'destination')\"\n                       formControlName=\"destination\" placeholder=\"To\">\n            </ion-item>\n            <ion-item (click)=\"openDatePicker($event)\">\n                <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\n                <ion-input formControlName=\"date\" placeholder=\"Date\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-icon name=\"clock\" color=\"primary\"></ion-icon>\n                <ion-datetime display-format=\"h:mm A\" picker-format=\"HH:mm\" formControlName=\"time\" placeholder=\"Time\">\n                </ion-datetime>\n            </ion-item>\n\n            <ion-item (click)=\"showBasicPicker()\">\n                <ion-icon name=\"people\" color=\"primary\"></ion-icon>\n                <ion-input color=\"black\" formControlName=\"seatsNumber\" placeholder=\"Number of seats\"></ion-input>\n            </ion-item>\n\n        </form>\n    </div>\n\n        <ion-card>\n\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" [streetViewControl]=\"false\"\n                     [zoomControl]=\"false\">\n                <agm-direction *ngIf=\"direction\" [origin]=\"direction.origin\"\n                               [destination]=\"direction.destination\"></agm-direction>\n                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" *ngIf=\"!direction\"></agm-marker>\n            </agm-map>\n\n        </ion-card>\n\n    <ion-card-subtitle *ngIf=\"distance\">\n        <ion-label>Distance: {{distance}}</ion-label>\n        <ion-label>Duration: {{duration}}</ion-label>\n    </ion-card-subtitle>\n\n<footer>\n    <ion-toolbar position=\"bottom\">\n\n    <ion-button expand=\"full\" type=\"submit\" (click)=\"createRide()\" *ngIf=\"!ride\"\n                [disabled]=\"rideForm.invalid\">\n        Done\n    </ion-button>\n    <ion-button expand=\"full\" type=\"submit\" (click)=\"updateRide()\" *ngIf=\"ride\"\n                [disabled]=\"rideForm.invalid\">\n        Save\n    </ion-button>\n    </ion-toolbar>\n</footer>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/home/ride-form/ride-form.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-form/ride-form.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px; }\n\nion-input {\n  width: 100%;\n  margin-left: 20px;\n  font-family: system-ui;\n  font-size: 16px; }\n\ninput {\n  width: 100%;\n  margin-left: 20px;\n  font-family: system-ui;\n  font-size: 16px; }\n\n.form-content {\n  padding: 10px; }\n\nion-card-subtitle {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-evenly;\n          justify-content: space-evenly;\n  margin-bottom: 10px; }\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  right: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9yaWRlLWZvcm0vcmlkZS1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UscUJBQWE7RUFBYixhQUFhO0VBQ2IscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFFBQVE7RUFDUixPQUFPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL2hvbWUvcmlkZS1mb3JtL3JpZGUtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mb3JtLWNvbnRlbnR7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tabs/home/ride-form/ride-form.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-form/ride-form.page.ts ***!
  \*************************************************************/
/*! exports provided: RideFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideFormPage", function() { return RideFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../date-picker/date-picker.component */ "./src/app/pages/tabs/home/date-picker/date-picker.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);






var Autocomplete = google.maps.places.Autocomplete;
var Geocoder = google.maps.Geocoder;
var DirectionsService = google.maps.DirectionsService;




var RideFormPage = /** @class */ (function () {
    function RideFormPage(mapsAPILoader, ngZone, fb, rideService, route, router, userService, popoverController, pickerCtrl) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.fb = fb;
        this.rideService = rideService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.popoverController = popoverController;
        this.pickerCtrl = pickerCtrl;
        this.today = Date.now();
        this.directionsService = new DirectionsService();
        this.currentUser = this.userService.user.getValue();
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.ride = _this.router.getCurrentNavigation().extras.state.ride;
                _this.getDirection();
            }
            _this.createDirectionForm();
        });
    }
    RideFormPage.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            var originAutoComplete = new Autocomplete(_this.searchOriginElementRef.nativeElement, {});
            var destinationAutocomplete = new Autocomplete(_this.searchDestinationElementRef.nativeElement, {});
            _this.setListenerTo(originAutoComplete, 'origin');
            _this.setListenerTo(destinationAutocomplete, 'destination');
        });
    };
    RideFormPage.prototype.showBasicPicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var opts, picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Done'
                                }
                            ],
                            columns: [
                                {
                                    name: 'number',
                                    options: [
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 }
                                    ]
                                }
                            ]
                        };
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        picker.onDidDismiss().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var col;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, picker.getColumn('number')];
                                    case 1:
                                        col = _a.sent();
                                        this.rideForm.get('seatsNumber').setValue(col.options[col.selectedIndex].value);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    RideFormPage.prototype.createDirectionForm = function () {
        this.rideForm = this.fb.group({
            origin: [this.ride ? this.ride.originName : undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            destination: [this.ride ? this.ride.destinationName : undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date: [this.ride ? moment__WEBPACK_IMPORTED_MODULE_9__(this.ride.dateTime).format('DD MMM YYYY') : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time: [this.ride ? moment__WEBPACK_IMPORTED_MODULE_9__(this.ride.dateTime).format('HH:mm') : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            seatsNumber: [this.ride ? this.ride.numberOfSeats : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RideFormPage.prototype.openDatePicker = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerComponent"],
                            animated: true,
                            cssClass: 'date-picker-popover',
                            event: event
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.rideForm.get('date').setValue(moment__WEBPACK_IMPORTED_MODULE_9__(dataReturned.data).format('DD MMM YYYY'));
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RideFormPage.prototype.setListenerTo = function (autocomplete, type) {
        var _this = this;
        autocomplete.addListener('place_changed', function () {
            _this.ngZone.run(function () {
                var place = autocomplete.getPlace();
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                if (type === 'origin') {
                    _this.originLocation = place;
                }
                else {
                    _this.destinationLocation = place;
                }
                if (_this.originLocation && _this.destinationLocation) {
                    _this.getDirection();
                }
                else {
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                }
                _this.zoom = 12;
            });
        });
    };
    RideFormPage.prototype.setCurrentLocation = function () {
        this.geoCoder = new Geocoder();
        this.latitude = 28.1235459;
        this.longitude = -15.436257399999931;
        this.zoom = 12;
        this.getAddress(this.latitude, this.longitude);
    };
    RideFormPage.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    RideFormPage.prototype.getDirection = function () {
        var _this = this;
        this.direction = {
            origin: this.ride ? this.ride.origin : this.originLocation.geometry.location.toJSON(),
            destination: this.ride ? this.ride.destination : this.destinationLocation.geometry.location.toJSON(),
            travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsService.route(this.direction, function (result) {
            _this.duration = result.routes[0].legs[0].duration.text;
            _this.distance = result.routes[0].legs[0].distance.text;
        });
    };
    RideFormPage.prototype.clearLocationIfBlank = function (value, type) {
        if (type === 'origin' && !value) {
            this.originLocation = undefined;
            this.direction = undefined;
        }
        else if (type === 'destination' && !value) {
            this.destinationLocation = undefined;
            this.direction = undefined;
        }
    };
    RideFormPage.prototype.createRide = function () {
        var _this = this;
        var time = moment__WEBPACK_IMPORTED_MODULE_9__(this.rideForm.get('time').value).format('HH:mm');
        var date = new Date(this.rideForm.get('date').value).toDateString();
        var dateTime = new Date(date + " " + time);
        var ride = {
            userId: this.currentUser.id,
            originName: this.originLocation.name,
            destinationName: this.destinationLocation.name,
            origin: this.originLocation.geometry.location.toJSON(),
            destination: this.destinationLocation.geometry.location.toJSON(),
            dateTime: dateTime.getTime(),
            numberOfSeats: this.rideForm.get('seatsNumber').value,
            seatedUserIds: [],
            isFinished: false
        };
        this.rideService.createRide(ride).then(function (result) { return _this.router.navigateByUrl('tabs'); });
    };
    RideFormPage.prototype.updateRide = function () {
        var _this = this;
        var time = this.rideForm.get('time').value;
        var date = this.rideForm.get('date').value;
        var dateTime = new Date(date + " " + time);
        console.log(dateTime);
        var ride = {
            id: this.ride.id,
            userId: this.currentUser.id,
            originName: this.rideForm.get('origin').value,
            destinationName: this.rideForm.get('destination').value,
            origin: this.originLocation ? this.originLocation.geometry.location.toJSON() : this.ride.origin,
            destination: this.destinationLocation ? this.destinationLocation.geometry.location.toJSON() : this.ride.destination,
            dateTime: dateTime.getTime(),
            numberOfSeats: this.rideForm.get('seatsNumber').value,
            seatedUserIds: [],
            isFinished: false
        };
        this.rideService.updateRide(ride).then(function (result) { return _this.router.navigateByUrl('tabs/tabs/rides'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchOrigin'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RideFormPage.prototype, "searchOriginElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchDestination'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RideFormPage.prototype, "searchDestinationElementRef", void 0);
    RideFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ride-form',
            template: __webpack_require__(/*! ./ride-form.page.html */ "./src/app/pages/tabs/home/ride-form/ride-form.page.html"),
            styles: [__webpack_require__(/*! ./ride-form.page.scss */ "./src/app/pages/tabs/home/ride-form/ride-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_services_ride_service__WEBPACK_IMPORTED_MODULE_4__["RideService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PickerController"]])
    ], RideFormPage);
    return RideFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-home-ride-form-ride-form-module.js.map
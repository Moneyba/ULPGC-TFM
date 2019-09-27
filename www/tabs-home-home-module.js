(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-home-home-module"],{

/***/ "./src/app/pages/tabs/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title text-center>\n            {{ 'HOME.title' | translate:params }}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"search-button-container\" [hidden]=\"showSearchContainer\">\n        <ion-button expand=\"full\" color=\"secondary\" (click)=\"changeSearchBoxState()\">\n            <ion-label>{{ 'HOME.searchButton' | translate:params }} </ion-label>\n            <ion-icon name=\"search\"></ion-icon>\n        </ion-button>\n    </div>\n    <div [hidden]=\"!showSearchContainer\" class=\"search-container\">\n        <form [formGroup]=\"dateTimeForm\">\n            <ion-item>\n                <ion-icon name=\"locate\" color=\"primary\"></ion-icon>\n                <input class=\"search-input\" #searchOrigin (input)=\"clearLocationIfBlank($event.target.value, 'origin')\"\n                       placeholder=\"{{ 'GENERIC.from' | translate:params }}\" formControlName=\"origin\">\n            </ion-item>\n            <ion-item>\n                <ion-icon name=\"pin\" color=\"primary\"></ion-icon>\n                <input class=\"search-input\" #searchDestination placeholder=\"{{ 'GENERIC.to' | translate:params }}\"\n                       (input)=\"clearLocationIfBlank($event.target.value, 'destination')\" formControlName=\"destination\">\n            </ion-item>\n\n            <ion-item (click)=\"openDatePicker($event)\">\n                <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\n                <ion-input formControlName=\"date\" placeholder=\"{{ 'GENERIC.date' | translate:params }}\"></ion-input>\n            </ion-item>\n            <!-- <ion-item (click)=\"openDatePicker($event)\">\n                 <ion-icon name=\"calendar\"></ion-icon>\n                 <ion-label formControlName=\"date\">{{date | date: 'dd MMM yyyy'}}</ion-label>\n             </ion-item>-->\n            <ion-item *ngIf=\"dateTimeForm.get('date').value\">\n                <ion-icon name=\"clock\" color=\"primary\"></ion-icon>\n                <ion-datetime display-format=\"h:mm A\" picker-format=\"HH:mm\" formControlName=\"time\"\n                              placeholder=\"{{ 'GENERIC.time' | translate:params }}\">\n                </ion-datetime>\n            </ion-item>\n        </form>\n        <ion-card class=\"button-container\">\n            <ion-button fill=\"clear\" (click)=\"changeSearchBoxState()\">\n                <!--  <ion-icon name=\"close-circle\"></ion-icon>-->\n                <ion-label>{{ 'GENERIC.cancel' | translate:params }}</ion-label>\n\n            </ion-button>\n\n            <ion-button fill=\"clear\" (click)=\"filterItems()\" id=\"search-button\">\n                <ion-label>{{ 'GENERIC.search' | translate:params }}</ion-label>\n                <ion-icon name=\"search\"></ion-icon>\n            </ion-button>\n        </ion-card>\n    </div>\n    <ion-card mode=\"md\" *ngFor=\"let ride of filteredRides\" (click)=\"goToDetailsPage(ride)\">\n        <ion-card-content class=\"ride-item\">\n            <div class=\"date-info\">\n                <ion-card-subtitle>{{ride.dateTime | date: 'dd MMM h:mm'}}</ion-card-subtitle>\n                <label id=\"no-seats-text\" *ngIf=\"ride.numberOfSeats == ride.seatedUserIds?.length\">no seats available</label>\n            </div>\n\n            <ion-label id=\"itinerary-label\">{{ride.originName}} - {{ride.destinationName}}</ion-label>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button expand=\"block\" [routerLink]=\"'/ride-form'\" routerDirection=\"forward\" color=\"secondary\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .search-button-container {\n  padding: 10px 10px 0 10px; }\n\n:host .search-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n\n:host .search-container .search-input {\n    width: 100%; }\n\n:host .search-container .calendar-label {\n    padding-left: 16px; }\n\n:host .search-container .button-container {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    background-color: #fe9b2b; }\n\n:host .search-container #search-button {\n    color: white; }\n\n:host .search-container ion-input {\n    width: 100%;\n    margin-left: 20px;\n    font-family: system-ui;\n    font-size: 16px; }\n\n:host .search-container input {\n    width: 100%;\n    margin-left: 20px;\n    font-family: system-ui;\n    font-size: 16px; }\n\n:host ion-card {\n  margin: 15px 10px; }\n\n:host ion-card .date-info {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-between;\n            justify-content: space-between; }\n\n:host ion-card .date-info ion-card-subtitle {\n      color: #002e65; }\n\n:host ion-card .date-info #no-seats-text {\n      color: red; }\n\n:host ion-card .ride-item {\n    border-top: 5px solid #002e65;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: space-between;\n            justify-content: space-between; }\n\n:host ion-card #itinerary-label {\n    font-size: 18px;\n    color: black; }\n\n:host .sc-ion-card-md-h {\n  border-radius: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0Rlc2t0b3AvdW50aXRsZWQgZm9sZGVyL3RmbS9zcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kseUJBQXlCLEVBQUE7O0FBSDdCO0VBT0kscUJBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQVIxQjtJQVdNLFdBQVcsRUFBQTs7QUFYakI7SUFlTSxrQkFBa0IsRUFBQTs7QUFmeEI7SUFtQk0scUJBQWE7SUFBYixhQUFhO0lBQ2Isc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBeUIsRUFBQTs7QUFyQi9CO0lBMEJNLFlBQVksRUFBQTs7QUExQmxCO0lBOEJNLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWUsRUFBQTs7QUFqQ3JCO0lBcUNNLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWUsRUFBQTs7QUF4Q3JCO0VBNkNJLGlCQUFpQixFQUFBOztBQTdDckI7SUErQ00scUJBQWE7SUFBYixhQUFhO0lBQ2Isc0NBQThCO1lBQTlCLDhCQUE4QixFQUFBOztBQWhEcEM7TUFrRFEsY0FBYyxFQUFBOztBQWxEdEI7TUFxRFEsVUFBVSxFQUFBOztBQXJEbEI7SUEyRE0sNkJBQTZCO0lBQzdCLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsc0NBQThCO1lBQTlCLDhCQUE4QixFQUFBOztBQTlEcEM7SUFrRU0sZUFBZTtJQUNmLFlBQVksRUFBQTs7QUFuRWxCO0VBd0VJLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgLnNlYXJjaC1idXR0b24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xuICB9XG5cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNhbGVuZGFyLWxhYmVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlOWIyYjtcblxuICAgIH1cblxuICAgICNzZWFyY2gtYnV0dG9ue1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAxNXB4IDEwcHg7XG4gICAgLmRhdGUtaW5mb3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMDAyZTY1O1xuICAgICAgfVxuICAgICAgI25vLXNlYXRzLXRleHQge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLnJpZGUtaXRlbSB7XG4gICAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzAwMmU2NTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICNpdGluZXJhcnktbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICB9XG4gIC5zYy1pb24tY2FyZC1tZC1oIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_ride_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/ride.service */ "./src/app/core/services/ride.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-picker/date-picker.component */ "./src/app/pages/tabs/home/date-picker/date-picker.component.ts");










var Autocomplete = google.maps.places.Autocomplete;
var DirectionsService = google.maps.DirectionsService;
var HomePage = /** @class */ (function () {
    function HomePage(rideService, fb, router, ngZone, popoverController) {
        this.rideService = rideService;
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.popoverController = popoverController;
        this.directionsService = new DirectionsService();
        this.maxDistance = 5000;
        this.showSearchContainer = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var originAutoComplete = new Autocomplete(this.searchOriginElementRef.nativeElement, {});
        var destinationAutocomplete = new Autocomplete(this.searchDestinationElementRef.nativeElement, {});
        this.setListenerTo(originAutoComplete, 'origin');
        this.setListenerTo(destinationAutocomplete, 'destination');
        this.getRides();
        this.createSearchForm();
    };
    HomePage.prototype.changeSearchBoxState = function () {
        this.createSearchForm();
        this.filteredRides = this.rides;
        this.showSearchContainer = !this.showSearchContainer;
    };
    HomePage.prototype.createSearchForm = function () {
        this.dateTimeForm = this.fb.group({
            origin: [null],
            destination: [null],
            date: [null],
            time: [null]
        });
    };
    HomePage.prototype.dateFormat = function (input) {
        console.log(input);
        var dateToSet = moment__WEBPACK_IMPORTED_MODULE_7__(input, 'DD/MM/YYYY').toDate();
        if (moment__WEBPACK_IMPORTED_MODULE_7__(input, 'DD/MM/YYYY', true).isValid()) {
            this.dateTimeForm.get('dateTime').setValue(dateToSet);
        }
    };
    HomePage.prototype.openDatePicker = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_9__["DatePickerComponent"],
                            animated: true,
                            cssClass: 'date-picker-popover',
                            event: event
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.dateTimeForm.get('date').setValue(moment__WEBPACK_IMPORTED_MODULE_7__(dataReturned.data).format('DD MMM YYYY'));
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.setListenerTo = function (autocomplete, type) {
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
                _this.latitude = place.geometry.location.lat();
                _this.longitude = place.geometry.location.lng();
            });
        });
    };
    HomePage.prototype.clearLocationIfBlank = function (value, type) {
        if (type === 'origin' && !value) {
            this.originLocation = undefined;
            this.filteredRides = this.rides;
        }
        else if (type === 'destination' && !value) {
            this.destinationLocation = undefined;
            this.filteredRides = this.rides;
        }
    };
    HomePage.prototype.getRides = function () {
        var _this = this;
        this.rideService.getRides().subscribe(function (rides) {
            console.log(rides);
            _this.rides = rides;
            _this.filteredRides = rides;
        });
    };
    HomePage.prototype.filterItems = function () {
        if (this.originLocation) {
            this.filterByLocation('origin');
            console.log('despues del filtrado por origen', this.filteredRides);
        }
        if (this.destinationLocation) {
            this.filterByLocation('destination');
            console.log('despues del filtrado por destino', this.filteredRides);
        }
        if (this.dateTimeForm.get('date').value) {
            this.filterByDate();
        }
    };
    HomePage.prototype.filterByDate = function () {
        var time = '00:00';
        if (this.dateTimeForm.get('time').value) {
            time = moment__WEBPACK_IMPORTED_MODULE_7__(this.dateTimeForm.get('time').value).format('HH:mm');
        }
        var date = new Date(this.dateTimeForm.get('date').value).toDateString();
        var dateTime = new Date(date + " " + time);
        console.log(dateTime);
        this.filteredRides = this.filteredRides.filter(function (item) {
            var itemDateTime = new Date(item.dateTime);
            if (dateTime.getDate() === itemDateTime.getDate()) {
                return item;
            }
        });
    };
    HomePage.prototype.filterByLocation = function (source) {
        var _this = this;
        var promisesArray = [];
        this.filteredRides.map(function (ride) {
            promisesArray.push(_this.isNearEnough(source === 'origin' ? ride.origin : ride.destination, source));
        });
        Promise.all(promisesArray).then(function (results) {
            _this.filteredRides = _this.filteredRides.filter(function (ride, index) { return results[index]; });
        });
    };
    HomePage.prototype.isNearEnough = function (rideSource, source) {
        var _this = this;
        var direction = {
            origin: source === 'origin' ?
                this.originLocation.geometry.location.toJSON() : this.destinationLocation.geometry.location.toJSON(),
            destination: rideSource,
            travelMode: google.maps.TravelMode.DRIVING
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["bindCallback"])(this.directionsService.route)(direction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((function (result) {
            if (result[1].toString() === 'ZERO_RESULTS') {
                return false;
            }
            var distance = result[0].routes[0].legs[0].distance;
            console.log(distance.value);
            if (distance.value < _this.maxDistance) {
                return true;
            }
            else {
                return false;
            }
        }))).toPromise();
    };
    HomePage.prototype.goToDetailsPage = function (ride) {
        var navigationExtras = {
            state: {
                ride: ride,
                from: 'home'
            }
        };
        this.router.navigate(['ride-details'], navigationExtras);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchOrigin'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomePage.prototype, "searchOriginElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchDestination'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomePage.prototype, "searchDestinationElementRef", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/tabs/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/tabs/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_ride_service__WEBPACK_IMPORTED_MODULE_2__["RideService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/tabs/home/home.component.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-picker/date-picker.component */ "./src/app/pages/tabs/home/date-picker/date-picker.component.ts");
/* harmony import */ var _date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-picker/date-picker.module */ "./src/app/pages/tabs/home/date-picker/date-picker.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                _date_picker_date_picker_module__WEBPACK_IMPORTED_MODULE_9__["DatePickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }])
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            entryComponents: [_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_8__["DatePickerComponent"]],
            providers: []
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-home-home-module.js.map
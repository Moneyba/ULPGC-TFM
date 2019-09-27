(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-home-ride-details-ride-ride-module"],{

/***/ "./src/app/core/services/tracking.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/tracking.service.ts ***!
  \***************************************************/
/*! exports provided: TrackingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingService", function() { return TrackingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var TrackingService = /** @class */ (function () {
    function TrackingService(db) {
        this.db = db;
        this.collectionEndPoint = 'tracking';
    }
    TrackingService.prototype.saveTracking = function (tracking) {
        tracking.id = this.db.createPushId();
        return this.db.object(this.collectionEndPoint + "/" + tracking.id).set(tracking);
    };
    TrackingService.prototype.getTrackingsByUserId = function (userId) {
        return this.db.list(this.collectionEndPoint, function (ref) { return ref.orderByChild('user/id').equalTo(userId); }).valueChanges();
    };
    TrackingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], TrackingService);
    return TrackingService;
}());



/***/ }),

/***/ "./src/app/pages/tabs/home/ride-details/ride/ride.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-details/ride/ride.module.ts ***!
  \******************************************************************/
/*! exports provided: RidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePageModule", function() { return RidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ride_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ride.page */ "./src/app/pages/tabs/home/ride-details/ride/ride.page.ts");







var routes = [
    {
        path: '',
        component: _ride_page__WEBPACK_IMPORTED_MODULE_6__["RidePage"]
    }
];
var RidePageModule = /** @class */ (function () {
    function RidePageModule() {
    }
    RidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ride_page__WEBPACK_IMPORTED_MODULE_6__["RidePage"]]
        })
    ], RidePageModule);
    return RidePageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/home/ride-details/ride/ride.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-details/ride/ride.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ride</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!--<ion-content>\n  <div #map id=\"map\" [hidden]=\"!user\"></div>\n\n  <div *ngIf=\"user\">\n\n    <ion-item>\n      <ion-label>User ID: {{ user.id }}</ion-label>\n    </ion-item>\n\n    <ion-button expand=\"block\" (click)=\"startTracking()\" *ngIf=\"!isTracking\">\n      <ion-icon name=\"locate\" slot=\"start\"></ion-icon>\n      Start Tracking\n    </ion-button>\n\n    <ion-button expand=\"block\" (click)=\"stopTracking()\" *ngIf=\"isTracking\">\n      <ion-icon name=\"hand\" slot=\"start\"></ion-icon>\n      Stop Tracking\n    </ion-button>\n\n    <ion-list>\n      <ion-item-sliding *ngFor=\"let pos of locations | async\">\n        <ion-item>\n          <ion-label text-wrap>\n            Lat: {{ pos.lat }}\n            Lng: {{ pos.lng }}\n            <p>\n              {{ pos.timestamp | date:'short' }}\n            </p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"deleteLocation(pos)\">\n            <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </ion-list>\n\n  </div>\n</ion-content>-->\n\n<ion-content padding>\n\n  <ion-button (click)=\"startTracking()\" *ngIf=\"!isTracking\">\n    <ion-icon name=\"locate\"></ion-icon>\n    Start Tracking\n  </ion-button>\n  <ion-button  color=\"danger\" (click)=\"stopTracking()\" *ngIf=\"isTracking\">\n    <ion-icon name=\"hand\"></ion-icon>\n    Stop Tracking\n  </ion-button>\n\n  <div #map id=\"map\"></div>\n\n  <ion-list>\n    <ion-list-header>Previous Tracks</ion-list-header>\n    <ion-item *ngFor=\"let route of previousTracks\">\n      {{ route.finished | date }}, {{ route.path.length }} Waypoints\n      <button ion-button clear item-end (click)=\"showHistoryRoute(route.path)\">View Route</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/home/ride-details/ride/ride.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-details/ride/ride.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25leWJhL0RvY3VtZW50cy90Zm0vc3JjL2FwcC9wYWdlcy90YWJzL2hvbWUvcmlkZS1kZXRhaWxzL3JpZGUvcmlkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9ob21lL3JpZGUtZGV0YWlscy9yaWRlL3JpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tabs/home/ride-details/ride/ride.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/home/ride-details/ride/ride.page.ts ***!
  \****************************************************************/
/*! exports provided: RidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidePage", function() { return RidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_tracking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/tracking.service */ "./src/app/core/services/tracking.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");







var RidePage = /** @class */ (function () {
    function RidePage(userService, plt, geolocation, trackingService) {
        this.userService = userService;
        this.plt = plt;
        this.geolocation = geolocation;
        this.trackingService = trackingService;
        this.user = null;
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
        this.previousTracks = [];
        this.myMarker = new google.maps.Marker();
        this.user = this.userService.user.getValue();
    }
    RidePage.prototype.ngOnInit = function () {
        this.getCurrentPosition();
    };
    RidePage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.loadHistoricRoutes();
            var mapOptions = {
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.geolocation.getCurrentPosition().then(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
                _this.map.setZoom(16);
                _this.myMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    map: _this.map,
                });
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    RidePage.prototype.loadHistoricRoutes = function () {
        var _this = this;
        this.trackingService.getTrackingsByUserId(this.user.id).subscribe(function (data) {
            if (data) {
                _this.previousTracks = data;
            }
        });
    };
    RidePage.prototype.startTracking = function () {
        var _this = this;
        this.isTracking = true;
        this.trackedRoute = [];
        this.positionSubscription = this.geolocation.watchPosition()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (p) { return p.coords !== undefined; }) // Filter Out Errors
        )
            .subscribe(function (data) {
            setTimeout(function () {
                console.log(data.coords);
                var latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                _this.myMarker.setPosition(latLng);
                _this.map.setCenter(latLng);
                _this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
                _this.redrawPath(_this.trackedRoute);
            }, 0);
        });
    };
    RidePage.prototype.redrawPath = function (path) {
        if (this.currentMapTrack) {
            this.currentMapTrack.setMap(null);
        }
        if (path.length > 1) {
            this.currentMapTrack = new google.maps.Polyline({
                path: path,
                geodesic: true,
                strokeColor: 'blue',
                strokeOpacity: 1.0,
                strokeWeight: 3
            });
            this.currentMapTrack.setMap(this.map);
        }
    };
    RidePage.prototype.stopTracking = function () {
        var newRoute = { userId: this.user.id, finished: new Date().getTime(), path: this.trackedRoute };
        this.previousTracks.push(newRoute);
        // this.storage.set('routes', this.previousTracks);
        this.trackingService.saveTracking(newRoute);
        this.isTracking = false;
        this.positionSubscription.unsubscribe();
        this.currentMapTrack.setMap(null);
    };
    RidePage.prototype.showHistoryRoute = function (route) {
        this.redrawPath(route);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RidePage.prototype, "mapElement", void 0);
    RidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ride',
            template: __webpack_require__(/*! ./ride.page.html */ "./src/app/pages/tabs/home/ride-details/ride/ride.page.html"),
            styles: [__webpack_require__(/*! ./ride.page.scss */ "./src/app/pages/tabs/home/ride-details/ride/ride.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _core_services_tracking_service__WEBPACK_IMPORTED_MODULE_5__["TrackingService"]])
    ], RidePage);
    return RidePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-home-ride-details-ride-ride-module.js.map
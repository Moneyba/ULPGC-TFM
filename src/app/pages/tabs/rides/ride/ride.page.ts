import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {Geolocation} from '@ionic-native/geolocation/ngx';
import {ModalController, NavParams, Platform, PopoverController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {TrackingService} from '../../../../core/services/tracking.service';
import {User} from '../../../../shared/models/User';
import {Tracking} from '../../../../shared/models/Tracking';
import {UserService} from '../../../../core/services/user.service';
import {RatingColors} from '../../../../shared/ui.utils';
import {Ride} from '../../../../shared/models/Ride';
import {NavigationExtras, Router} from '@angular/router';
import {Rating} from '../../../../shared/models/Rating';
import {RatePopoverComponent} from './rate-popover/rate-popover.component';
import {DatePickerComponent} from '../../home/date-picker/date-picker.component';
import * as moment from '../../home/ride-form/ride-form.page';


declare var google;

@Component({
    selector: 'app-ride',
    templateUrl: './ride.page.html',
    styleUrls: ['./ride.page.scss'],
})
export class RidePage implements OnInit {
    currentUser: User = null;

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    currentMapTrack = null;

    isTracking = false;
    trackedRoute = [];
    previousTracks: Tracking[] = [];

    positionSubscription: Subscription;
    myMarker = new google.maps.Marker();

    public isRating = false;
    public rating: Rating;
    @Input() ratingNumber: number;

    @Output() ratingChange: EventEmitter<number> = new EventEmitter();
    private ride: Ride;
    public driver: User;
    public passengers: User[] = [];
    public numberOfUsersNoRated: number;

    constructor(
        private userService: UserService,
        private plt: Platform,
        private geolocation: Geolocation,
        private trackingService: TrackingService,
        private navParams: NavParams,
        private router: Router,
        private modalController: ModalController,
        public popoverController: PopoverController
    ) {

        this.currentUser = this.userService.user.getValue();
    }

    ngOnInit() {
        this.getCurrentPosition();

        this.ride = this.navParams.data.ride;
        this.getDriver(this.ride.userId);
        this.getPassengers();
        this.numberOfUsersNoRated = this.ride.seatedUserIds ? this.ride.seatedUserIds.length : 1;
    }

    private getDriver(userId: string): void {
        this.userService.getUser(userId).subscribe(user =>
            this.driver = user);
    }

    getCurrentPosition() {
        this.plt.ready().then(() => {
            this.loadHistoricRoutes();

            const mapOptions = {
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            this.geolocation.getCurrentPosition().then(position => {
                const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                this.map.setCenter(latLng);
                this.map.setZoom(16);
                this.myMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    map: this.map,
                });
            }).catch((error) => {
                console.log('Error getting location', error);
            });
        });
    }


    loadHistoricRoutes() {
        this.trackingService.getTrackingsByUserId(this.currentUser.id).subscribe(data => {
            if (data) {
                this.previousTracks = data;
            }
        });


    }

    startTracking() {
        this.isTracking = true;
        this.trackedRoute = [];

        this.positionSubscription = this.geolocation.watchPosition()
            .pipe(
                filter((p) => p.coords !== undefined) // Filter Out Errors
            )
            .subscribe(data => {
                setTimeout(() => {
                    console.log(data.coords);
                    const latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                    this.myMarker.setPosition(latLng);
                    this.map.setCenter(latLng);
                    this.trackedRoute.push({lat: data.coords.latitude, lng: data.coords.longitude});
                    this.redrawPath(this.trackedRoute);
                }, 0);
            });

    }

    redrawPath(path) {
        if (this.currentMapTrack) {
            this.currentMapTrack.setMap(null);
        }

        if (path.length > 1) {
            this.currentMapTrack = new google.maps.Polyline({
                path,
                geodesic: true,
                strokeColor: 'blue',
                strokeOpacity: 1.0,
                strokeWeight: 3
            });
            this.currentMapTrack.setMap(this.map);
        }
    }

    stopTracking() {
        const newRoute: Tracking = {userId: this.currentUser.id, finishedDate: new Date().getTime(), path: this.trackedRoute};
        this.previousTracks.push(newRoute);
        // this.storage.set('routes', this.previousTracks);

        this.trackingService.saveTracking(newRoute);
        this.isTracking = false;
        this.positionSubscription.unsubscribe();
        this.currentMapTrack.setMap(null);
        this.redrawPath(this.trackedRoute);
        this.isRating = true;
    }

    async closeModal() {
        const onClosedData = 'You rated';
        this.modalController.dismiss(onClosedData);
    }
/*
    private getPassengers(): void {
        console.log(this.passengers.length);
        if (this.passengers.length === 0) {
            this.ride.seatedUserIds.forEach(userId => {
                this.userService.getUser(userId).subscribe(user => {
                    user.isRated = false;
                    this.passengers.push(user);
                });
            });
        }
    }*/

    private getPassengers(): void {
        this.passengers = [];
        if (this.ride.seatedUserIds) {
            this.ride.seatedUserIds.forEach((userId, index) => {
                this.userService.getUser(userId).subscribe(user => {
                    user.isRated = false;
                    this.passengers[index] = user;
                });
            });
        }
    }



    public async presentRatePopover(user: User, index: number) {
        const popover = await this.popoverController.create({
            component: RatePopoverComponent,
            componentProps: {
                fromUserId: this.currentUser.id,
                isToDriver: this.ride.userId === this.driver.id,
                toUser: user,
            }

        });
        popover.onDidDismiss().then((dataReturned) => {
            if (dataReturned.data) {
                this.numberOfUsersNoRated --;
                if (this.currentUser.id === this.driver.id) {
                    this.passengers[index].isRated = dataReturned.data;
                }
            }
        });

        return await popover.present();
    }

}

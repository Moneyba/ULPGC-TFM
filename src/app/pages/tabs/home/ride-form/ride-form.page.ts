import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ride} from '../../../../shared/models/Ride';
import {RideService} from '../../../../core/services/ride.service';
import {ActivatedRoute, Router} from '@angular/router';
import Autocomplete = google.maps.places.Autocomplete;
import Geocoder = google.maps.Geocoder;
import PlaceResult = google.maps.places.PlaceResult;
import DirectionsService = google.maps.DirectionsService;
import DirectionsRequest = google.maps.DirectionsRequest;
import {User} from '../../../../shared/models/User';
import {UserService} from '../../../../core/services/user.service';
import {DatePickerComponent} from '../date-picker/date-picker.component';
import {PickerController, PopoverController} from '@ionic/angular';
import * as moment from 'moment';
import { PickerOptions } from '@ionic/core';

@Component({
    selector: 'app-ride-form',
    templateUrl: './ride-form.page.html',
    styleUrls: ['./ride-form.page.scss'],
})
export class RideFormPage implements OnInit {

    @ViewChild('searchOrigin')
    public searchOriginElementRef: ElementRef;
    @ViewChild('searchDestination')
    public searchDestinationElementRef: ElementRef;

    public duration;
    public distance;
    public today = Date.now();
    public ride: Ride;

    private currentUser: User;
    public rideForm: FormGroup;
    public latitude: number;
    private longitude: number;
    private zoom: number;
    private geoCoder;
    private direction: DirectionsRequest;
    private originLocation: PlaceResult;
    private destinationLocation: PlaceResult;
    private directionsService = new DirectionsService();

    public constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private fb: FormBuilder,
        private rideService: RideService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        public popoverController: PopoverController,
        private pickerCtrl: PickerController
    ) {
        this.currentUser = this.userService.user.getValue();

        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.ride = this.router.getCurrentNavigation().extras.state.ride;
                this.getDirection();
            }
            this.createDirectionForm();
        });

    }

    public ngOnInit(): void {
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            const originAutoComplete = new Autocomplete(this.searchOriginElementRef.nativeElement, {});
            const destinationAutocomplete = new Autocomplete(this.searchDestinationElementRef.nativeElement, {});
            this.setListenerTo(originAutoComplete, 'origin');
            this.setListenerTo(destinationAutocomplete, 'destination');
        });
    }

    async showBasicPicker() {
        const opts: PickerOptions = {
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
        const picker = await this.pickerCtrl.create(opts);
        picker.present();
        picker.onDidDismiss().then(async data => {
            const col = await picker.getColumn('number');
            this.rideForm.get('seatsNumber').setValue(col.options[col.selectedIndex].value);
        });
    }

    public createDirectionForm(): void {
        this.rideForm = this.fb.group({
            origin: [this.ride ? this.ride.originName : undefined, Validators.required],
            destination: [this.ride ? this.ride.destinationName : undefined, Validators.required],
            date: [this.ride ? moment(this.ride.dateTime).format('DD MMM YYYY') : null, Validators.required],
            time: [this.ride ? moment(this.ride.dateTime).format('HH:mm') : null, Validators.required],
            seatsNumber: [this.ride ? this.ride.numberOfSeats : null, Validators.required]
        });
    }

    public async openDatePicker(event: any) {
        const popover = await this.popoverController.create({
            component: DatePickerComponent,
            animated: true,
            cssClass: 'date-picker-popover',
            event
        });
        popover.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.rideForm.get('date').setValue(moment(dataReturned.data).format('DD MMM YYYY'));
            }
        });

        return await popover.present();
    }

    private setListenerTo(autocomplete, type: string): void {
        autocomplete.addListener('place_changed', () => {
            this.ngZone.run(() => {
                const place: PlaceResult = autocomplete.getPlace();

                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                if (type === 'origin') {
                    this.originLocation = place;
                } else {
                    this.destinationLocation = place;
                }

                if (this.originLocation && this.destinationLocation) {
                    this.getDirection();
                } else {
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                }
                this.zoom = 12;
            });
        });
    }

    private setCurrentLocation(): void {
        this.geoCoder = new Geocoder();
        this.latitude = 28.1235459;
        this.longitude = -15.436257399999931;
        this.zoom = 12;
        this.getAddress(this.latitude, this.longitude);
    }

    public getAddress(latitude, longitude): void {
        this.geoCoder.geocode({location: {lat: latitude, lng: longitude}}, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }

    public getDirection(): void {
        this.direction = {
            origin: this.ride ? this.ride.origin : this.originLocation.geometry.location.toJSON(),
            destination: this.ride ? this.ride.destination : this.destinationLocation.geometry.location.toJSON(),
            travelMode: google.maps.TravelMode.DRIVING
        };

        this.directionsService.route(this.direction, result => {
            this.duration = result.routes[0].legs[0].duration.text;
            this.distance = result.routes[0].legs[0].distance.text;
        });
    }

    public clearLocationIfBlank(value, type: string): void {
        if (type === 'origin' && !value) {
            this.originLocation = undefined;
            this.direction = undefined;
        } else if (type === 'destination' && !value) {
            this.destinationLocation = undefined;
            this.direction = undefined;
        }
    }

    public createRide(): void {
        const time = moment(this.rideForm.get('time').value).format('HH:mm');
        const date = new Date(this.rideForm.get('date').value).toDateString();
        const dateTime: Date = new Date(`${date} ${time}`);
        const ride: Ride = {
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
        this.rideService.createRide(ride).then(result => this.router.navigateByUrl('tabs'));

    }

    public updateRide(): void {
        const time = this.rideForm.get('time').value;
        const date = this.rideForm.get('date').value;
        const dateTime: Date = new Date(`${date} ${time}`);
        console.log(dateTime);
        const ride: Ride = {
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
        this.rideService.updateRide(ride).then(result => this.router.navigateByUrl('tabs/tabs/rides'));
    }

}

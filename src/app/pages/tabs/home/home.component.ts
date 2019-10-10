import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {RideService} from '../../../core/services/ride.service';
import {Ride} from '../../../shared/models/Ride';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';
import {bindCallback} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {PopoverController} from '@ionic/angular';
import {DatePickerComponent} from './date-picker/date-picker.component';
import Autocomplete = google.maps.places.Autocomplete;
import PlaceResult = google.maps.places.PlaceResult;
import LatLngLiteral = google.maps.LatLngLiteral;
import DirectionsService = google.maps.DirectionsService;
import DirectionsRequest = google.maps.DirectionsRequest;
import {TranslateConfigService} from '../../../core/services/translate-config.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomePage implements OnInit {

    @ViewChild('searchOrigin')
    public searchOriginElementRef: ElementRef;
    @ViewChild('searchDestination')
    public searchDestinationElementRef: ElementRef;

    public dateTimeForm: FormGroup;
    public rides: Ride[];
    public filteredRides: Ride[];

    private latitude: number;
    private longitude: number;

    private originLocation: PlaceResult;
    private destinationLocation: PlaceResult;

    private directionsService = new DirectionsService();

    private maxDistance = 5000;

    public showSearchContainer = false;
    constructor(private rideService: RideService,
                private fb: FormBuilder,
                private router: Router,
                private ngZone: NgZone,
                public popoverController: PopoverController) {
    }

    public ngOnInit(): void {
        const originAutoComplete = new Autocomplete(this.searchOriginElementRef.nativeElement, {});
        const destinationAutocomplete = new Autocomplete(this.searchDestinationElementRef.nativeElement, {});
        this.setListenerTo(originAutoComplete, 'origin');
        this.setListenerTo(destinationAutocomplete, 'destination');
        this.getRides();
        this.createSearchForm();
    }

    public changeSearchBoxState(): void {
        this.createSearchForm();
        this.filteredRides = this.rides;

        this.showSearchContainer = !this.showSearchContainer;
    }

    public createSearchForm(): void {

        this.dateTimeForm = this.fb.group({
            origin: [null],
            destination: [null],
            date: [null],
            time: [null]
        });
    }

    public dateFormat(input: string): void {
        const dateToSet = moment(input, 'DD/MM/YYYY').toDate();
        if (moment(input, 'DD/MM/YYYY', true).isValid()) {
            this.dateTimeForm.get('dateTime').setValue(dateToSet);
        }
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
                this.dateTimeForm.get('date').setValue(moment(dataReturned.data).format('DD MMM YYYY'));
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

                this.latitude = place.geometry.location.lat();
                this.longitude = place.geometry.location.lng();
            });
        });
    }

    public clearLocationIfBlank(value, type: string): void {
        if (type === 'origin' && !value) {
            this.originLocation = undefined;
            this.filteredRides = this.rides;
        } else if (type === 'destination' && !value) {
            this.destinationLocation = undefined;
            this.filteredRides = this.rides;
        }
    }

    public getRides(): void {
        this.rideService.getRides().subscribe(rides => {
            this.rides = rides;
            this.filteredRides = rides;
        });
    }

    public filterItems(): void {
        if (this.originLocation) {
            this.filterByLocation('origin');
        }
        if (this.destinationLocation) {
            this.filterByLocation('destination');
        }
        if (this.dateTimeForm.get('date').value) {
            this.filterByDate();
        }

    }

    private filterByDate() {
        let time = '00:00';
        if (this.dateTimeForm.get('time').value) {
            time = moment(this.dateTimeForm.get('time').value).format('HH:mm');
        }
        const date = new Date(this.dateTimeForm.get('date').value).toDateString();

        const dateTime: Date = new Date(`${date} ${time}`);
        this.filteredRides = this.filteredRides.filter(item => {
            const itemDateTime: Date = new Date(item.dateTime);
            if (dateTime.getDate() === itemDateTime.getDate()) {
                return item;
            }
        });
    }

    private filterByLocation(source: string) {
        const promisesArray: Promise<boolean>[] = [];
        this.filteredRides.map(ride => {
            promisesArray.push(this.isNearEnough(source === 'origin' ? ride.origin : ride.destination, source));
        });

        Promise.all(promisesArray).then(results => {
            this.filteredRides = this.filteredRides.filter((ride, index) => results[index]);
        });
    }

    public isNearEnough(rideSource: LatLngLiteral, source: string): Promise<boolean> {
        const direction: DirectionsRequest = {
            origin: source === 'origin' ?
                this.originLocation.geometry.location.toJSON() : this.destinationLocation.geometry.location.toJSON(),
            destination: rideSource,
            travelMode: google.maps.TravelMode.DRIVING
        };

        return bindCallback(this.directionsService.route)(direction).pipe(
            map((result => {
                if (result[1].toString() === 'ZERO_RESULTS') {
                    return false;
                }
                const distance = result[0].routes[0].legs[0].distance;
                if (distance.value < this.maxDistance) {
                    return true;
                } else {
                    return false;
                }
            }))).toPromise();
    }

    public goToDetailsPage(ride: Ride): void {
        const navigationExtras: NavigationExtras = {
            state: {
                ride,
                from: 'home'
            }
        };
        this.router.navigate(['ride-details'], navigationExtras);
    }


}

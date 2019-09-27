import {Component} from '@angular/core';
import {RideService} from '../../../core/services/ride.service';
import {Request} from '../../../shared/models/Request';
import {User} from '../../../shared/models/User';
import {NavigationExtras, Router} from '@angular/router';
import {RequestService} from '../../../core/services/request.service';
import {Ride} from '../../../shared/models/Ride';
import {UserService} from '../../../core/services/user.service';

@Component({
    selector: 'app-rides',
    templateUrl: 'rides-page.component.html',
    styleUrls: ['rides-page.component.scss']
})

export class RidesPage {
    public currentSegment = 'nextRides';
    private currentUser: User;
    public requests: Request[];
    public rides: Ride[];

    public today: number;


    public currentRides = [];
    public oldRides = [];

    constructor(private rideService: RideService,
                private requestService: RequestService,
                private userService: UserService,
                private router: Router) {
    }

    ionViewWillEnter() {
        this.currentUser = this.userService.user.getValue();
        this.today = new Date().getTime();
        this.currentRides = [];
        this.getRides();


    }

    segmentChanged(ev: any) {
        this.currentSegment = ev.detail.value;
    }

    public getRides(): void {
        this.currentRides = [];
        this.oldRides = [];
        this.rideService.getRidesByUserId(this.currentUser.id).subscribe(rides => {
            console.log(rides);
            rides.forEach((ride: Ride) => {
                if (ride.dateTime >= this.today) {
                    this.currentRides.push(ride);
                } else {
                    this.oldRides.push(ride);
                }
            });
            this.getRequests();
        });
    }


    public getRequests(): void {
        this.requestService.getRequestsByUserId(this.currentUser.id).subscribe(requests => {
            console.log(requests);
            requests.forEach((request: Request) => {
                if (request.ride.dateTime >= this.today) {
                    this.currentRides.push(request);
                    console.log(this.currentRides);
                } else {
                    this.oldRides.push(request);
                }
            });
            this.sortByDate(this.currentRides);
            this.sortByDate(this.oldRides);
        });
    }

    public sortByDate(array: any[]): any[] {
         return array.sort((a, b) => {
            a = a.ride ? a.ride : a;
            b = b.ride ? b.ride : b;
            return a.dateTime - b.dateTime;

        });

    }

    public goToRideDetailsPage(ride: Ride): void {
        const navigationExtras: NavigationExtras = {
            state: {
                rideId: ride.id
            }
        };
        this.router.navigate(['ride-plan'], navigationExtras);
    }

    public goToBookedRidePage(request: Request): void {
        const navigationExtras: NavigationExtras = {
            state: {
                requestId: request.id
            }
        };
        this.router.navigate(['booked-ride-plan'], navigationExtras);
    }
}

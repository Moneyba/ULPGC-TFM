import {Injectable} from '@angular/core';
import {Ride} from '../../shared/models/Ride';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Request} from '../../shared/models/Request';
import {User} from '../../shared/models/User';

@Injectable({
    providedIn: 'root'
})
export class RideService {
    private collectionEndPoint = 'rides';

    constructor(private db: AngularFireDatabase) {
    }

    public createRide(ride: Ride): Promise<void> {
        ride.id = this.db.createPushId();
        return this.db.object<Ride>(`${this.collectionEndPoint}/${ride.id}`).set(ride);
    }

    public updateRide(ride: Ride): Promise<void> {
        return this.db.object<Ride>(`${this.collectionEndPoint}/${ride.id}`).update(ride);
    }

    public deleteRide(rideId: string): Promise<void> {
        return this.db.object<Ride>(`${this.collectionEndPoint}/${rideId}`).remove();
    }

    public getRides(): Observable<Ride[]> {
        return this.db.list<Ride>(this.collectionEndPoint, ref => ref.orderByChild('dateTime')
            .startAt(new Date().getTime())).valueChanges();
    }

    public getRidesByUserId(userId: string): Observable<Ride[]> {
        return this.db.list<Ride>(this.collectionEndPoint, ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
    }

    public getRide(rideId: string): Observable<Ride> {
        return this.db.object<Ride>(`${this.collectionEndPoint}/${rideId}`).valueChanges();
    }
}

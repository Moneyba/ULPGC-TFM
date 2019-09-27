import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Request} from '../../shared/models/Request';
import {Observable} from 'rxjs';
import {Ride} from '../../shared/models/Ride';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    private collectionEndPoint = 'requests';

    constructor(private db: AngularFireDatabase) {
    }

    public createRequest(request: Request): Promise<void> {
        request.id = this.db.createPushId();
        return this.db.object<Request>(`${this.collectionEndPoint}/${request.id}`).set(request);
    }

    public updateRequest(request: Request): Promise<void> {
        return this.db.object<Request>(`${this.collectionEndPoint}/${request.id}`).update(request);
    }

    public deleteRequest(requestId: string): Promise<void> {
        return this.db.object<Request>(`${this.collectionEndPoint}/${requestId}`).remove();
    }

    public getRequest(requestId: string): Observable<Request> {
        return this.db.object<Request>(`${this.collectionEndPoint}/${requestId}`).valueChanges();
    }

    public getRequestsByUserId(userId: string): Observable<Request[]> {
        return this.db.list<Request>(this.collectionEndPoint, ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
    }

    public getRequestsByReceiverId(receiverId: string): Observable<Request[]> {
        return this.db.list<Request>(this.collectionEndPoint, ref => ref.orderByChild('ride/userId').equalTo(receiverId)).valueChanges();
    }

    public getRequestsByRideId(rideId: string): Observable<Request[]> {
        return this.db.list<Request>(this.collectionEndPoint, ref => ref.orderByChild('ride/id').equalTo(rideId)).valueChanges();
    }


}

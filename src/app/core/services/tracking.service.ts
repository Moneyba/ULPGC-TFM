import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Tracking} from '../../shared/models/Tracking';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  private collectionEndPoint = 'tracking';

  constructor(private db: AngularFireDatabase) { }

  public saveTracking(tracking: Tracking): Promise<void> {
    tracking.id = this.db.createPushId();
    return this.db.object<Tracking>(`${this.collectionEndPoint}/${tracking.id}`).set(tracking);
  }

  public getTrackingsByUserId(userId: string): Observable<Tracking[]> {
    return this.db.list<Tracking>(this.collectionEndPoint, ref => ref.orderByChild('user/id').equalTo(userId)).valueChanges();
  }
}

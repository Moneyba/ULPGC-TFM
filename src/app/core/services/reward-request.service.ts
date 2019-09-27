import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Request} from '../../shared/models/Request';
import {RewardRequest} from '../../shared/models/RewardRequest';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardRequestService {

  private collectionEndPoint = 'rewardRequests';

  constructor(private db: AngularFireDatabase) {
  }

  public createRequest(request: RewardRequest): Promise<void> {
    request.id = this.db.createPushId();
    return this.db.object<RewardRequest>(`${this.collectionEndPoint}/${request.id}`).set(request);
  }

  public updateRequest(request: RewardRequest): Promise<void> {
    return this.db.object<RewardRequest>(`${this.collectionEndPoint}/${request.id}`).update(request);
  }

  public getRequests(): Observable<RewardRequest[]> {
    return this.db.list<RewardRequest>(this.collectionEndPoint).valueChanges();
  }

  public getRequestsByRewardId(rewardId: string): Observable<RewardRequest[]> {
    return this.db.list<RewardRequest>(this.collectionEndPoint, ref => ref.orderByChild('rewardId').equalTo(rewardId)).valueChanges();
  }
}

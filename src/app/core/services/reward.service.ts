import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {RewardProduct} from '../../shared/models/RewardProduct';
import {RewardRequest} from '../../shared/models/RewardRequest';

@Injectable({
  providedIn: 'root'
})
export class RewardService {
  private collectionEndPoint = 'rewards';

  constructor(private db: AngularFireDatabase) { }

  public createReward(reward: RewardProduct): Promise<void> {
    reward.id = this.db.createPushId();
    return this.db.object<RewardProduct>(`${this.collectionEndPoint}/${reward.id}`).set(reward);
  }

  public getRewards(): Observable<RewardProduct[]> {
    return this.db.list<RewardProduct>(this.collectionEndPoint).valueChanges();
  }

  public updateReward(reward: RewardProduct): Promise<void> {
    return this.db.object<RewardProduct>(`${this.collectionEndPoint}/${reward.id}`).update(reward);
  }

  public deleteReward(rewardId: string): Promise<void> {
    return this.db.object<RewardProduct>(`${this.collectionEndPoint}/${rewardId}`).remove();
  }
}

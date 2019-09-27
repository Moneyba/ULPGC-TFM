import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {RewardProduct} from '../../shared/models/RewardProduct';
import {Rating} from '../../shared/models/Rating';
import {Observable} from 'rxjs';
import {Request} from '../../shared/models/Request';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private collectionEndPoint = 'ratings';

  constructor(private db: AngularFireDatabase) { }

  public createRating(rating: Rating): Promise<void> {
    rating.id = this.db.createPushId();
    return this.db.object<Rating>(`${this.collectionEndPoint}/${rating.id}`).set(rating);
  }

  public getRatingsByUserId(userId: string): Observable<Rating[]> {
    return this.db.list<Rating>(this.collectionEndPoint, ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }

}

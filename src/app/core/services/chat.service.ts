import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Ride} from '../../shared/models/Ride';
import {Message} from '../../shared/models/Message';
import {Chat} from '../../shared/models/Chat';
import {RewardProduct} from '../../shared/models/RewardProduct';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private collectionEndPoint = 'chats';

    constructor(private db: AngularFireDatabase) {
    }

    public createChat(chat: Chat): Promise<void> {
        return this.db.object<Chat>(`${this.collectionEndPoint}/${chat.id}`).set(chat);
    }

    public getChatsByUserId(userId: string, userType: string): Observable<Chat[]> {
        return this.db.list<Chat>(this.collectionEndPoint, ref => ref.orderByChild(userType).equalTo(userId)).valueChanges();
    }

    public getChatByRideId(rideId: string): Observable<Chat[]> {
        return this.db.list<Chat>(this.collectionEndPoint, ref => ref.orderByChild('rideId').equalTo(rideId)).valueChanges();
    }

    public getChat(chatId: string): Observable<Chat> {
        return this.db.object<Chat>(`${this.collectionEndPoint}/${chatId}`).valueChanges();
    }

    public deleteChat(chatId: string): Promise<void> {
        return this.db.object<RewardProduct>(`${this.collectionEndPoint}/${chatId}`).remove();
    }


    public sendMessage(message: Message, chatId: string) {
        /*return this.db.object(`${this.collectionEndPoint}/${chatId}`).update({
            chats: this.snapshotToArray(message),
        });*/
        message.id = this.db.createPushId();
        return this.db.object<Message>(`${this.collectionEndPoint}/${chatId}/messages/${message.id}`).set(message);
    }
    private snapshotToArray(message) {
        const returnArr = [];
        returnArr.push(message);

        return returnArr;
    }

}

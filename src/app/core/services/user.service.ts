import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../shared/models/User';
import {Request} from '../../shared/models/Request';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private uid: string;
    public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    private collectionEndPoint = 'users';


    constructor(
        private auth: AngularFireAuth,
        private db: AngularFireDatabase
    ) {
    }

    public getUser(userId: string): Observable<User> {
        return this.db.object<User>(`${this.collectionEndPoint}/${userId}`).valueChanges();
    }
    public updateUser(user: User): Promise<void> {
        return this.db.object<User>(`${this.collectionEndPoint}/${user.id}`).update(user);
    }

    public deleteUser(userId: string): Promise<void> {
        return this.db.object<User>(`${this.collectionEndPoint}/${userId}`).remove();
    }

    getLoggedUID(): string {
        return this.uid;
    }

    getLoggedUser(): Observable<User> {
        return this.getUser(this.uid);
    }

    setLoggedUID(id: string) {
        this.uid = id;
        this.getLoggedUser().subscribe(user => {
            this.user.next(user);
        });
    }
/*
    public blockUser(userId) {
        const promise = new Promise(((resolve, reject) => {
            this.db.database.ref(`${this.collectionEndPoint}/${this.uid}/blockList`).push({
                id: userId
            });
        }));
        return promise;
    }*/

    public blockUser(userId): Promise<void> {
        return this.db.object<Request>(`${this.collectionEndPoint}/${this.uid}/blockList/${userId}`).set(userId);
    }

    public unBlockUser(userId) {
        const promise = new Promise(((resolve, reject) => {
            this.db.database.ref(`${this.collectionEndPoint}/${this.uid}/blockList`).child(userId).remove();
        }));
        return promise;
    }

    public getBlockList(userId): Observable<any[]> {
        return this.db.list<any>(`${this.collectionEndPoint}/${userId}/blockList`).valueChanges();

    }

}

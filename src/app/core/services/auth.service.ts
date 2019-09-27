import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;
import {AngularFireDatabase} from '@angular/fire/database';
import {take} from 'rxjs/operators';
import {User} from '../../shared/models/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public constructor(
        private fireAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private http: HttpClient
    ) {
    }
/*
    public login(email: string, password: string): Promise<UserCredential> {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }*/

    public checkPhone(phone: string): Promise<string[]> {
        return this.db.list<string>('users', ref => ref.orderByChild('phoneNumber').equalTo(phone))
            .valueChanges().pipe(take(1)).toPromise();
    }

    public createUser(user: User): Promise<any> {
        console.log(user);
        return this.http.post('https://us-central1-data-tfm.cloudfunctions.net/createUser', user).toPromise();
    }

    public deleteUser(userId: string): Promise<any> {
        return this.http.delete('https://us-central1-data-tfm.cloudfunctions.net/deleteUser/' + userId).toPromise();
    }
}

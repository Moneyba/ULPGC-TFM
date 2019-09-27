import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {Device} from '../../shared/models/Device';
import {Firebase} from '@ionic-native/firebase/ngx';

@Injectable({
    providedIn: 'root'
})
export class FcmService {
    token;

    public constructor(
        private db: AngularFireDatabase,
        private firebaseNative: Firebase,
        private platform: Platform,
    ) {
    }

    public async setToken(userId: string): Promise<void> {
        if (this.platform.is('android')) {
            this.token = await this.firebaseNative.getToken();
        }

        if (this.platform.is('ios')) {
            this.token = await this.firebaseNative.getToken();
            await this.firebaseNative.grantPermission();
        }

        return this.saveTokenToDatabase(userId);
    }

    private saveTokenToDatabase(userId): Promise<void> {
        if (!this.token) {
            return;
        }
        const device: Device = {
            userId,
            token: this.token,
        };

        return this.db.object<Device>(`devices/${userId}`).set(device);
    }

    public listenToNotifications(): Observable<any> {
        return this.firebaseNative.onNotificationOpen();
    }
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {GoogleMaps} from '@ionic-native/google-maps';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {environment} from '../environments/environment';
import {AgmCoreModule} from '@agm/core';
import {LocalStorageService} from './core/services/local-storage.service';
import {FcmService} from './core/services/fcm.service';
import {Firebase} from '@ionic-native/firebase/ngx';
import {InternationalPhoneModule} from 'ng4-intl-phone';
import {FirebaseAuthentication} from '@ionic-native/firebase-authentication/ngx';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RidePageModule} from './pages/tabs/rides/ride/ride.module';
import {ProfileFormPageModule} from './pages/tabs/profile/profile-form/profile-form.module';
import { Camera } from '@ionic-native/camera/ngx';
import {UtilsService} from './core/services/utils.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './core/services/translate-config.service';

export function LanguageLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        HttpClientModule,
        AppRoutingModule,
        RidePageModule,
        ProfileFormPageModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        InternationalPhoneModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBEavHbLwLZhyr1L8psKmof-84BlLqbRn8',
            libraries: ['places']
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (LanguageLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        GoogleMaps,
        Geolocation,
        LocalStorageService,
        Firebase,
        FcmService,
        FirebaseAuthentication,
        Camera,
        UtilsService,
        TranslateConfigService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

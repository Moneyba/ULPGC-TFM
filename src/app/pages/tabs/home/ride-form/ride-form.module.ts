import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RideFormPage} from './ride-form.page';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';
import {CalendarModule} from 'ion2-calendar';
import {DatePickerComponent} from '../date-picker/date-picker.component';
import {DatePickerModule} from '../date-picker/date-picker.module';

const routes: Routes = [
    {
        path: '',
        component: RideFormPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        CalendarModule,
        DatePickerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBEavHbLwLZhyr1L8psKmof-84BlLqbRn8',
            libraries: ['places']
        }),
        AgmDirectionModule,
        RouterModule.forChild(routes)
    ],
    declarations: [RideFormPage],
    entryComponents: [DatePickerComponent]
})
export class RideFormPageModule {
}

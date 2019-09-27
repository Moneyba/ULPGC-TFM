import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {CalendarModule} from 'ion2-calendar';
import {DatePickerComponent} from './date-picker.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        CalendarModule,
    ],
    declarations: [DatePickerComponent],
})
export class DatePickerModule {
}

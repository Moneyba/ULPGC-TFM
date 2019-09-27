import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomePage} from './home.component';
import {CalendarModule} from 'ion2-calendar';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {DatePickerModule} from './date-picker/date-picker.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarModule,
        DatePickerModule,
        TranslateModule,
        RouterModule.forChild([{path: '', component: HomePage}])
    ],
    declarations: [HomePage],
    entryComponents: [DatePickerComponent],
    providers: []
})
export class HomePageModule {
}

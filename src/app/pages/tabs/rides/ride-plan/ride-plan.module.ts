import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RidePlanPage} from './ride-plan.page';
import {RidePopoverComponent} from './ride-popover/ride-popover.component';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';

const routes: Routes = [
    {
        path: '',
        component: RidePlanPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBEavHbLwLZhyr1L8psKmof-84BlLqbRn8',
            libraries: ['places']
        }),
        AgmDirectionModule,
        RouterModule.forChild(routes)
    ],
    declarations: [RidePlanPage, RidePopoverComponent],
    entryComponents: [RidePopoverComponent]

})
export class RidePlanPageModule {
}

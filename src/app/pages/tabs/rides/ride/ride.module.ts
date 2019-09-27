import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RidePage } from './ride.page';
import {RatePopoverComponent} from './rate-popover/rate-popover.component';

const routes: Routes = [
  {
    path: '',
    component: RidePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RidePage, RatePopoverComponent],
  entryComponents: [RatePopoverComponent]
})
export class RidePageModule {}

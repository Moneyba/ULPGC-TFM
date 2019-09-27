import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RewardsCatalogPage } from './rewards-catalog.page';

const routes: Routes = [
  {
    path: '',
    component: RewardsCatalogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RewardsCatalogPage]
})
export class RewardsCatalogPageModule {}

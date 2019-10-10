import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'chats/:price', loadChildren: './pages/tabs/chats/chats.module#ChatsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'ride-form', loadChildren: './pages/tabs/home/ride-form/ride-form.module#RideFormPageModule' },
  { path: 'ride-details', loadChildren: './pages/tabs/home/ride-details/ride-details.module#RideDetailsPageModule' },
  { path: 'chat', loadChildren: './pages/tabs/chats/chat/chat.module#ChatPageModule' },
  { path: 'public-profile', loadChildren: './pages/tabs/profile/public-profile/public-profile.module#PublicProfilePageModule' },
  { path: 'ride-plan', loadChildren: './pages/tabs/rides/ride-plan/ride-plan.module#RidePlanPageModule' },
  { path: 'ride', loadChildren: './pages/tabs/rides/ride/ride.module#RidePageModule' },
  { path: 'profile-form', loadChildren: './pages/tabs/profile/profile-form/profile-form.module#ProfileFormPageModule' },
  { path: 'initial-setup', loadChildren: './pages/initial-setup/initial-setup.module#InitialSetupPageModule' },
  { path: 'profile', loadChildren: './pages/tabs/profile/profile.module#ProfilePageModule' },
  { path: 'booked-ride-plan', loadChildren: './pages/tabs/rides/booked-ride-plan/booked-ride-plan.module#BookedRidePlanPageModule' },
  { path: 'rewards-catalog', loadChildren: './pages/tabs/profile/rewards-catalog/rewards-catalog.module#RewardsCatalogPageModule' },
  { path: 'reward-form', loadChildren: './pages/tabs/profile/rewards-catalog/reward-form/reward-form.module#RewardFormPageModule' },
  { path: 'reward-details',
    loadChildren: './pages/tabs/profile/rewards-catalog/reward-details/reward-details.module#RewardDetailsPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

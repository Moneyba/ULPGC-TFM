import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'rides',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/rides/rides.module#RidesPageModule'
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'chats',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/chats/chats.module#ChatsPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}

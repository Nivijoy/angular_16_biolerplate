import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';


export const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    data: {
        icon: 'dashboard',
        title: 'Dashboard',
        allowAll: true,
    },
  },
  {
    path: 'developer',
    component: DashboardComponent,

    data: {
        icon: 'extension',
        title: 'Developer',
        allowAll:true,
        children: [
            {
                icon: 'manage_accounts',
                title: 'Permisson',
                // link: `/page/developer/level`,
            },
        ],
    },
},
{
    path: 'hotel',
    loadChildren:() => 
        import('../hotel/hotel.module').then((m) => m.HotelModule),
    data: {
        icon: 'holiday_village',
        title: 'Hotel',
        children: [
            {
                icon: 'villa',
                title: 'Hotel',
                link: `/page/hotel`,
            },
        ],
    },
},

];

export const components = [
    DashboardComponent
]

// import { Routes } from '@angular/router';
// import { DashboardComponent } from '../components/dashboard/dashboard/dashboard.component';


// export const routes: Routes = [
//   {
//     path: 'home',
//     component: DashboardComponent,
//     data: {
//         icon: 'dashboard',
//         title: 'Dashboard',
//         allowAll: true,
//     },
//   },
//   {
//     path: 'developer',
//     component: DashboardComponent,

//     data: {
//         icon: 'extension',
//         title: 'Developer',
//         allowAll:true,
//         children: [
//             {
//                 icon: 'manage_accounts',
//                 title: 'Permisson',
//                 // link: `/page/developer/level`,
//             },
//         ],
//     },
// },
// {
//     path: 'hotel',
//     loadChildren:() => 
//         import('../components/hotel/hotel.module').then((m) => m.HotelModule),
//     data: {
//         icon: 'extension',
//         title: 'Hotel',
//         allowAll:true,
//         children: [
//             {
//                 icon: 'location_city',
//                 title: 'Hotel',
//                 link: `/page/hotel/upsert-hotel`,
//             },
//         ],
//     },
// },
// ];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpsertHotelComponent } from './upsert-hotel/upsert-hotel.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
const routes: Routes = [
  {
    path: '',
    component: ListHotelComponent,
  },
  {
    path: 'upsert',
    component: UpsertHotelComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}

export const HotelComponents = [UpsertHotelComponent];

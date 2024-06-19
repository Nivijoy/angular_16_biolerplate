import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertHotelComponent } from './upsert-hotel/upsert-hotel.component';
import { HotelRoutingModule, HotelComponents } from './hotel-routing.module';
import { SharedModule } from 'src/app/SharedModule/shared.module';
import { ListHotelComponent } from './list-hotel/list-hotel.component';



@NgModule({
  declarations: [
    ...HotelComponents,
    ListHotelComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule
  ]
})
export class HotelModule { }

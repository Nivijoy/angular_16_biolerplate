import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule, dashboardComponent } from './dashboard-routing.module';
import { SharedModule } from 'src/app/SharedModule/shared.module';



@NgModule({
  declarations: dashboardComponent,
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

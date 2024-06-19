import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../SharedModule/shared.module';
import { ComponentRoutingModule, Components } from "./components-routing.module";
 @NgModule({
  declarations: [
    ...Components,
   ],
  imports: [
    ComponentRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ComponentsModule { }

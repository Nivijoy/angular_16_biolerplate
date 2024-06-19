import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { components,routes } from './navigation';
@NgModule({
  imports: [RouterModule.forChild([...routes, {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'prefix'
  }])],
  exports: [RouterModule]
})

export class ComponentRoutingModule { }

export const Components = components
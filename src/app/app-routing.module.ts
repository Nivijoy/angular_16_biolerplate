import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(auth => auth.AuthModule)
}, {
  path: 'page',
  loadChildren: () => import('./page/page.module').then(page => page.PageModule)
}, {
  path: '**',
  redirectTo: 'page',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

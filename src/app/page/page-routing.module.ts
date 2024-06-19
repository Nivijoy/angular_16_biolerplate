import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './layout/page-layout.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
    {
        path: '',
        component: PageLayoutComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                // canActivate: [AuthGuard],
                loadChildren: () =>
                    import('../components/components.module').then(
                        (page) => page.ComponentsModule
                    ),
            },
        ],
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageRoutingModule {}

export const PageComponents = [PageLayoutComponent,NavComponent];
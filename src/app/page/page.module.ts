import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { PageRoutingModule, PageComponents } from './page-routing.module';

@NgModule({
  declarations: PageComponents,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    PageRoutingModule,
    MatExpansionModule,
    MatListModule,
  ]
})
export class PageModule { }

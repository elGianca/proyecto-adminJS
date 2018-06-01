import { NgModule } from '@angular/core';

// Componente Principal:
import { PagesComponent } from './pages.component';

//
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// SharedModule importado:
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  // Hay que exportarlas:
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  imports: [
      SharedModule,
      PAGES_ROUTES
  ]
})

export class PagesModule {}

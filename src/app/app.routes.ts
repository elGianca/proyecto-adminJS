import { RouterModule, Routes } from '@angular/router';

//Importante ruta:
import { PagesComponent } from "./pages/pages.component";

//Rutas:
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [ 
      //Rutas hijos:
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  //Cualquier otra ruta que no pertenezca a las de arriba:
  { path: '**', component: NopagefoundComponent }
];

//Exporto:
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );

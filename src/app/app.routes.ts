import { Routes } from '@angular/router';

import { AngularHelpComponent } from './pages/angular-help/angular-help.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MesForetsComponent } from './pages/mes-forets/mes-forets.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: MesForetsComponent },
  { path: 'mes-forets', component: MesForetsComponent },
  { path: 'help', component: AngularHelpComponent },
  { path: 'accessibilite', component: SimplePageComponent },
  //{ path: 'cgu', component: SimplePageComponent },
  { path: 'mentions-legales', component: SimplePageComponent },
  { path: 'donnees-a-caractere-personnel', component: SimplePageComponent },
  { path: 'cookies-et-statistiques', component: SimplePageComponent },
  { path: '**', component: NotFoundComponent },
];

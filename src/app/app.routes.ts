import { Routes } from '@angular/router';

import { AngularHelpComponent } from './pages/angular-help/angular-help.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MesForetsComponent } from './pages/mes-forets/mes-forets.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: MesForetsComponent },
  { path: 'mes-forets', component: MesForetsComponent },
  { path: 'help', component: AngularHelpComponent },
  { path: '**', component: NotFoundComponent }
];

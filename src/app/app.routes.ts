import { Routes } from '@angular/router';

import { AngularHelpComponent } from './pages/angular-help/angular-help.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: AngularHelpComponent },
];

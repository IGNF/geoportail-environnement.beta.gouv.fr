import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MesForetsComponent } from './pages/mes-forets/mes-forets.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'enquete',
    loadChildren: () => import('./enquete/enquete.module').then(m => m.EnqueteModule)
  },
  {
    path: 'login',
    component: MesForetsComponent,
    title: 'Mes Forêts'
  },
  {
    path: 'mes-forets',
    component: MesForetsComponent,
    title: 'Mes Forêts'
  },
  {
    path: 'accessibilite',
    component: SimplePageComponent,
    title: 'Accessibilite'
  },
  {
    path: 'mentions-legales',
    component: SimplePageComponent,
    title: 'Accessibilite'
  },
  {
    path: 'donnees-a-caractere-personnel',
    component: SimplePageComponent,
    title: 'Accessibilite'
  },
  {
    path: 'cookies-et-statistiques',
    component: SimplePageComponent,
    title: 'Accessibilite'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Une erreur s\'est produite'
  }
];

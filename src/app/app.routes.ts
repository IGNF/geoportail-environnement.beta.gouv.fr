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
    path: 'accueil',
    component: HomeComponent
  },
  {
    path: 'requete',
    loadChildren: () => import('./requete/requete.module').then(m => m.RequeteModule)
  },
  {
    path: 'mes-forets',
    component: MesForetsComponent,
    title: 'Mes Forêts'
  },
  {
    path: 'accessibilite',
    component: SimplePageComponent,
    title: 'Déclaration d\'accessibilité'
  },
  {
    path: 'mentions-legales',
    component: SimplePageComponent,
    title: 'Mentions légales'
  },
  {
    path: 'donnees-a-caractere-personnel',
    component: SimplePageComponent,
    title: 'Données à caractère personnel'
  },
  {
    path: 'cookies-et-statistiques',
    component: SimplePageComponent,
    title: 'Gestion des cookies'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Une erreur s\'est produite'
  }
];

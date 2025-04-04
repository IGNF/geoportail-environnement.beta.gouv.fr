import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
//import { MesForetsComponent } from './pages/mes-forets/mes-forets.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { InformationsComponent } from './pages/informations/informations.component';

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
  // {
  //   path: 'mes-forets',
  //   component: MesForetsComponent,
  //   title: 'Mes Forêts'
  // },
  {
    path: 'informations',
    component: InformationsComponent,
    title: 'Informations sur les données'
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

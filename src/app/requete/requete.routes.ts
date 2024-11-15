import { Routes } from '@angular/router';

import { RequeteNewComponent } from './pages/requete-new/requete-new.component';

export const requeteRoutes: Routes = [
  {
    path: 'nouvelle',
    component: RequeteNewComponent,
    title: 'Nouvelle Requête'
  },
  {
    path: ':id',
    component: RequeteNewComponent,
    title: 'Requête sur ma forêt'
  }
];

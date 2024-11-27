import { Routes } from '@angular/router';

import { RequeteNewComponent } from './pages/requete-new/requete-new.component';
import { RequetePrinterComponent } from './pages/requete-printer/requete-printer.component';

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
  },
  {
    path: 'nouvelle/impression',
    component: RequetePrinterComponent,
    title: 'Impression'
  },
];

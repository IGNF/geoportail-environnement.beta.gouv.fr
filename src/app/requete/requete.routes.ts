import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes } from '@angular/router';
import { inject } from '@angular/core';

import { RequeteNewComponent } from './pages/requete-new/requete-new.component';
import { RequetePrinterComponent } from './pages/requete-printer/requete-printer.component';
import { ForetService } from '../shared/services/foret.service';
import { Foret } from '../shared/models/foret.model';


export const resolver: ResolveFn<Foret | undefined> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ForetService).getMockForet(route.paramMap.get('id')!);
};

export const requeteRoutes: Routes = [
  {
    path: 'nouvelle',
    component: RequeteNewComponent,
    title: 'Nouvelle Requête'
  },
  {
    path: ':id',
    component: RequeteNewComponent,
    title: 'Requête sur ma forêt',
    resolve: { data: resolver }
  },
  {
    path: 'nouvelle/impression',
    component: RequetePrinterComponent,
    title: 'Impression'
  },
];

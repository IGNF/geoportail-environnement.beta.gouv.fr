import { Routes } from '@angular/router';

import { EnqueteNewComponent } from './pages/enquete-new/enquete-new.component';

export const enqueteRoutes: Routes = [
  {
    path: 'new',
    component: EnqueteNewComponent,
    title: 'Nouvelle enquête'
  },
  {
    path: ':id',
    component: EnqueteNewComponent,
    title: 'Enquête sur ma forêt'
  }
];

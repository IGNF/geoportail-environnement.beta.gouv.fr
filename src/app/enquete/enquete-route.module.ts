import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnqueteNewComponent } from './pages/enquete-new/enquete-new.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'new',
    component: EnqueteNewComponent,
    title: 'Nouvelle enquête'
  },
  {
    path: ':id',
    component: EnqueteNewComponent,
    title: 'Enquête sur ma forêt'
  },
  { path: '**', component: NotFoundComponent },
  // {
  //   path: ':id',
  //   component: ThemeViewComponent,
  //   resolve: { data: themeResolver },
  //   title: themeTitleResolver
  // },
  // {
  //   path: ':id/edit',
  //   component: ThemeEditComponent,
  //   resolve: { data: themeResolver },
  //   canActivate: [AuthGuard],
  //   title: themeTitleResolver
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnqueteRouteModule { }

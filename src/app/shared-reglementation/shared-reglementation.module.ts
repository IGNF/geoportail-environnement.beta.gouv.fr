import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ReglementationViewComponent } from './components/reglementation-view/reglementation-view.component';


@NgModule({
  declarations: [
    ReglementationViewComponent,
    ContactViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReglementationViewComponent,
    ContactViewComponent
  ]
})
export class SharedReglementationModule { }

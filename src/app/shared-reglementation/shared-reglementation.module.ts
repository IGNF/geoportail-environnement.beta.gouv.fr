import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementationViewComponent } from './components/reglementation-view/reglementation-view.component';


@NgModule({
  declarations: [
    ReglementationViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReglementationViewComponent
  ]
})
export class SharedReglementationModule { }

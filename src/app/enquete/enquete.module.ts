import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnqueteRouteModule } from './enquete-route.module';
import { EnqueteNewComponent } from './pages/enquete-new/enquete-new.component';
import { EnqueteStepperComponent } from './components/enquete-stepper/enquete-stepper.component';
import { SharedDesignDsfrModule } from '../shared-design-dsfr/shared-design-dsfr.module';
import { SharedMapModule } from '../shared-map/shared-map.module';


@NgModule({
  declarations: [
    EnqueteNewComponent,
    EnqueteStepperComponent,
  ],
  imports: [
    CommonModule,
    EnqueteRouteModule,
    SharedMapModule,
    SharedDesignDsfrModule
  ]
})
export class EnqueteModule { }

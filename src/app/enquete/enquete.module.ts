import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnqueteRouteModule } from './enquete-route.module';
import { EnqueteNewComponent } from './pages/enquete-new/enquete-new.component';
import { EnqueteStepperComponent } from './components/enquete-stepper/enquete-stepper.component';
import { SharedDesignDsfrModule } from '../shared-design-dsfr/shared-design-dsfr.module';
import { SharedMapModule } from '../shared-map/shared-map.module';
import { EnqueteStepperControlComponent } from './components/enquete-stepper-control/enquete-stepper-control.component';
import { SharedThematicModule } from '../shared-thematic/shared-thematic.module';


@NgModule({
  declarations: [
    EnqueteNewComponent,
    EnqueteStepperComponent,
    EnqueteStepperControlComponent
  ],
  imports: [
    CommonModule,
    EnqueteRouteModule,
    SharedMapModule,
    SharedThematicModule,
    SharedDesignDsfrModule
  ]
})
export class EnqueteModule { }

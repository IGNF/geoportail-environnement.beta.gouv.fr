import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

import { RequeteNewComponent } from './pages/requete-new/requete-new.component';
import { RequetePrinterComponent } from './pages/requete-printer/requete-printer.component';
import { RequeteStepperComponent } from './components/requete-stepper/requete-stepper.component';
import { SharedDesignDsfrModule } from '../shared-design-dsfr/shared-design-dsfr.module';
import { SharedMapModule } from '../shared-map/shared-map.module';
import { RequeteStepperControlComponent } from './components/requete-stepper-control/requete-stepper-control.component';
import { SharedThematicModule } from '../shared-thematic/shared-thematic.module';
import { requeteRoutes } from './requete.routes';

@NgModule({
  declarations: [
    RequeteNewComponent,
    RequetePrinterComponent,
    RequeteStepperComponent,
    RequeteStepperControlComponent
  ],
  imports: [
    CommonModule,
    SharedMapModule,
    SharedThematicModule,
    SharedDesignDsfrModule
  ],
  providers: [
    provideRouter(requeteRoutes)
  ]
})
export class RequeteModule { }

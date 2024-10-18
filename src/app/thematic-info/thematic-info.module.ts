// thematic-info.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDesignDsfrModule } from '../shared-design-dsfr/shared-design-dsfr.module';

import { SyntheseComponent } from './synthese/synthese.component';
import { BiodiversiteComponent } from './biodiversite/biodiversite.component';
import { EauComponent } from './eau/eau.component';
import { ZoneNaturelComponent } from './zone-naturel/zone-naturel.component';
import { MonumentHistoriqueComponent } from './monument-historique/monument-historique.component';
import { AgricultureComponent } from './agriculture/agriculture.component';

@NgModule({
  declarations: [
    SyntheseComponent,
    BiodiversiteComponent,
    EauComponent,
    ZoneNaturelComponent,
    MonumentHistoriqueComponent,
    AgricultureComponent,
  ],
  imports: [
    CommonModule,
    SharedDesignDsfrModule, 
  ],
  exports: [
    SyntheseComponent,
    BiodiversiteComponent,
    EauComponent,
    ZoneNaturelComponent,
    MonumentHistoriqueComponent,
    AgricultureComponent
  ]
})
export class ThematicInfoModule { }

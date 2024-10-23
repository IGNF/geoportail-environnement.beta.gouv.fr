import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDesignDsfrModule } from '../shared-design-dsfr/shared-design-dsfr.module';

import { AgricultureComponent } from './components/agriculture/agriculture.component';
import { BiodiversiteComponent } from './components/biodiversite/biodiversite.component';
import { EauComponent } from './components/eau/eau.component';
import { SyntheseComponent } from './components/synthese/synthese.component';

import { ThematicSelectComponent } from './components/thematic-select/thematic-select.component';
import { ThematicTabsComponent } from './components/thematic-tabs/thematic-tabs.component';


@NgModule({
  declarations: [
    SyntheseComponent,
    BiodiversiteComponent,
    EauComponent,
    AgricultureComponent,
    ThematicSelectComponent,
    ThematicTabsComponent
  ],
  imports: [
    CommonModule,
    SharedDesignDsfrModule,
  ],
  exports: [
    ThematicSelectComponent,
    ThematicTabsComponent
  ]
})
export class SharedThematicModule { }

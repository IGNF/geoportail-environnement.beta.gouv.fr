import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDesignDsfrModule } from '../shared-design-dsfr/shared-design-dsfr.module';

import { BiodiversiteComponent } from './components/biodiversite/biodiversite.component';
import { MonumentHistoriqueComponent } from './components/monument-historique/monument-historique.component';
import { SyntheseComponent } from './components/synthese/synthese.component';

import { ThematicSelectComponent } from './components/thematic-select/thematic-select.component';
import { ThematicTabsComponent } from './components/thematic-tabs/thematic-tabs.component';
import { FicheInfoViewComponent } from './components/fiche-info-view/fiche-info-view.component';
import { ReglementationViewComponent } from './components/reglementation-view/reglementation-view.component';


@NgModule({
  declarations: [
    SyntheseComponent,
    BiodiversiteComponent,
    MonumentHistoriqueComponent,
    ThematicSelectComponent,
    ThematicTabsComponent,
    FicheInfoViewComponent,
    ReglementationViewComponent
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

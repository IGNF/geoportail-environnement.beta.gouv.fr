import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDesignDsfrModule } from '../shared-design-dsfr/shared-design-dsfr.module';
import { SyntheseComponent } from './components/synthese/synthese.component';
import { ThematicSelectComponent } from './components/thematic-select/thematic-select.component';
import { ThematicTabsComponent } from './components/thematic-tabs/thematic-tabs.component';
import { FicheInfoViewComponent } from './components/fiche-info-view/fiche-info-view.component';
import { LayerInfoViewComponent } from './components/layer-info-view/layer-info-view.component';
import { ReglementationViewComponent } from './components/reglementation-view/reglementation-view.component';


@NgModule({
  declarations: [
    SyntheseComponent,
    ThematicSelectComponent,
    ThematicTabsComponent,
    FicheInfoViewComponent,
    LayerInfoViewComponent,
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

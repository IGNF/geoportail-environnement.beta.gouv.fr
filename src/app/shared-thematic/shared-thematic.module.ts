import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDesignDsfrModule } from '../shared-design-dsfr/shared-design-dsfr.module';
import { SyntheseComponent } from './components/synthese/synthese.component';
import { ThematicSelectComponent } from './components/thematic-select/thematic-select.component';
import { ThematicTabsComponent } from './components/thematic-tabs/thematic-tabs.component';
import { ThematicListComponent } from './components/thematic-list/thematic-list.component';
import { SharedMapModule } from '../shared-map/shared-map.module';
import { SharedReglementationModule } from '../shared-reglementation/shared-reglementation.module';
import { ThematicViewComponent } from './components/thematic-view/thematic-view.component';
import { LayerInfoViewComponent } from './components/layer-fiche-view/layer-fiche-view.component';


@NgModule({
  declarations: [
    SyntheseComponent,
    ThematicSelectComponent,
    ThematicTabsComponent,
    ThematicListComponent,
    ThematicViewComponent,
    LayerInfoViewComponent,
  ],
  imports: [
    CommonModule,
    SharedDesignDsfrModule,
    SharedMapModule,
    SharedReglementationModule
  ],
  exports: [
    ThematicSelectComponent,
    ThematicTabsComponent,
    ThematicListComponent
  ]
})
export class SharedThematicModule { }

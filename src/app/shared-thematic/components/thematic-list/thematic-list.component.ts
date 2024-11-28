import { Component } from '@angular/core';

import { ThematicSelectService } from '../../services/thematic-select.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { ThematicFeatureService } from '../../services/fiche-info-feature.service';
import { THEMATIC_LIST } from '../../models/thematic-list.enum';

@Component({
  selector: 'app-thematic-list',
  templateUrl: './thematic-list.component.html',
  styleUrl: './thematic-list.component.css'
})
export class ThematicListComponent {

  selectedTabIndex: number = 0;

  thematics: any[] = [];

  responseFeatures: any[] = [];

  constructor(
    private thematicFeatureService: ThematicFeatureService,
    private thematicSelectService: ThematicSelectService,
    private mapContextService: MapContextService
  ) { }

  ngOnInit() {

    this.initFicheList();

    this.thematicSelectService.thematicSelection.subscribe((activeThemeList: any[]) => {
      activeThemeList.unshift('synthese');
      this.updateActiveTabs(activeThemeList);
    });

    this.thematicFeatureService.listFicheFeatures().subscribe((features: any[]) => {
      this.responseFeatures = features;
      this.updateActiveThematicLayersFromFeatures(features);
      this.mapContextService.updateLayersVisibility('synthese');
      this.initFicheList();
      this.updateFicheList();
    });

  }


  selectTab(event: any) {
    this.setSelectedTabIndex(event);
    this.mapContextService.updateLayersVisibility(event);
  }


  private updateActiveTabs(activeThemeList: any[]) {
    this.thematics = THEMATIC_LIST.filter((theme) => activeThemeList.includes(theme.name));
    this.selectTab('synthese');
  }


  private setSelectedTabIndex(tabId: string) {
    let indexModifier = 0;
    for (let i = 0; i < THEMATIC_LIST.length; i++) {
      if (THEMATIC_LIST[i].name === tabId) {
        this.selectedTabIndex = i - indexModifier;
      } else if (!THEMATIC_LIST[i].active) {
        indexModifier++;
      }
    }
  }


  private initFicheList() {
    this.thematics = THEMATIC_LIST.map((thematic) => {
      if (!thematic.layers) {
        thematic.layers = [];
      }
      return thematic;
    });
  }


  private updateFicheList() {
    this.thematics = this.thematics.map((thematic) => {
      thematic.layers = thematic.layers.map((layer: any) => this.updateFicheLayerList(layer));
      return thematic;
    });
  }


  private updateFicheLayerList(layer: any) {
    layer.flatview = true;
    layer.features = [];
    layer.features = this.responseFeatures.filter((feature) => {
      return this.parseLayerFromTechnicalName(layer.technicalName) === feature.layer;
    });
    return layer;
  }


  private updateActiveThematicLayersFromFeatures(features: any) {
    for (let i = 0; i < features.length; i++) {
      const layer = features[i].layer;
      switch (layer) {
        case 'assiette_sup_s':
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'monument_historique', name: "assiette_sup_s" })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'monument_historique', name: "assiette_sup_s" });
          }
          break;
        default:
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'biodiversite', name: layer })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'biodiversite', name: layer });
          }
      }
    }
  }


  private parseLayerFromTechnicalName(technicalName: string) {
    return technicalName.split(':')[1];
  }

}



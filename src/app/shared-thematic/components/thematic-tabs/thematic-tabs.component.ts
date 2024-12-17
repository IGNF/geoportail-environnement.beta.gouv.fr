import { Component, OnInit } from '@angular/core';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { THEMATIC_LIST } from '../../models/thematic-list.enum';
import { Thematic } from '../../models/thematic.model';
import { LayerFiche } from '../../models/layer-fiche.model';
import { ThematicFeatureService } from '../../services/thematic-feature.service';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrl: './thematic-tabs.component.css'
})
export class ThematicTabsComponent implements OnInit {

  selectedTabIndex: number = 0;

  thematics: Thematic[] = [];

  responseFeatures: any[] = [];

  constructor(
    private thematicFeatureService: ThematicFeatureService,
    private mapContextService: MapContextService
  ) { }

  
  ngOnInit() {

    this.thematicFeatureService.listAllFeatures().subscribe((features: any[]) => {
      this.thematics = this.thematicFeatureService.joinThematicsFeatures(features);

      this.responseFeatures = this.deleteRedundantFeatures(features);
      this.updateActiveThematicLayersFromFeatures(features);
      this.mapContextService.updateLayersVisibility('synthese');
    });

  }


  selectTab(event: any) {
    this.selectedTabIndex = event;
    this.mapContextService.updateLayersVisibility(event);
  }


  // private setSelectedTabIndex(tabId: string) {
  //   let indexModifier = 0;
  //   for (let i = 0; i < this.thematics.length; i++) {
  //     if (this.thematics[i].name === tabId) {
  //       this.selectedTabIndex = i - indexModifier;
  //     } else if (!this.thematics[i].active) {
  //       indexModifier++;
  //     }
  //   }
  // }


  private updateFicheLayer(layer: LayerFiche) {
    layer.displaySituationMap = false;
    layer.features = [];
    layer.features = this.responseFeatures.filter((feature) => {
      if (this.parseLayerFromTechnicalName(layer.technicalName) === feature.layer) {
        if ((layer.title === 'Coeurs de parcs nationaux' && feature.zone != 'Coeur') ||
          (layer.title === 'Zones d\'adhésion de parcs nationaux' && feature.zone != 'Adhesion') ||
          (layer.title === 'Monuments historiques' && feature.suptype != 'ac1') ||
          (layer.title === 'Sites inscrits et classés' && feature.suptype != 'ac2')
        ) {
          return false
        }
        return true
      }
      return false;
    });
    return layer;
  }


  private updateActiveThematicLayersFromFeatures(features: any) {
    for (let i = 0; i < features.length; i++) {
      const layer = features[i].layer;
      switch (layer) {
        case 'assiette_sup_s':
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'patrimoine', name: "assiette_sup_s" })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'patrimoine', name: "assiette_sup_s" });
          }
          break;
        case 'prescription_surf':
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'patrimoine', name: "prescription_surf" })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'patrimoine', name: "prescription_surf" });
          }
          break;
        default:
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'biodiversite', name: layer })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'biodiversite', name: layer });
          }
      }
    }
  }

  private deleteRedundantFeatures(features: any[]): any[] {
    let res: any[] = [];
    features.forEach((feature) => {
      if (!res.filter((elem) => feature.layer == elem.layer && feature.name == elem.name && feature.link == elem.link).length) {
        res.push(feature);
      }
    })
    return res;
  }


  private parseLayerFromTechnicalName(technicalName: string) {
    return technicalName.split(':')[1];
  }

}
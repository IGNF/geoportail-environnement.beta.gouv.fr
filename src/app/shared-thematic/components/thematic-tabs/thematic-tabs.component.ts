import { Component, OnInit } from '@angular/core';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { Thematic } from '../../models/thematic.model';
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
      this.responseFeatures = this.deleteRedundantFeatures(features);
      this.thematics = this.thematicFeatureService.joinThematicsFeatures(this.responseFeatures);
      this.updateActiveThematicLayersFromFeatures(this.responseFeatures);
      this.mapContextService.updateLayersVisibility('synthese');
    });

  }


  updateMap(event: any) {
    this.mapContextService.updateLayersVisibility(event);
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
      if (!res.filter((elem) => feature.layer == elem.layer && feature.name == elem.name && feature.link == elem.link && feature.zone == elem.zone).length) {
        res.push(feature);
      }
    })
    return res;
  }

}
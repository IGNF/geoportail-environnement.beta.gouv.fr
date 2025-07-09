import { Component } from '@angular/core';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { ThematicFeatureService } from '../../services/thematic-feature.service';
import { Thematic } from '../../models/thematic.model';
import { map } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-thematic-list',
  templateUrl: './thematic-list.component.html',
  styleUrl: './thematic-list.component.css'
})
export class ThematicListComponent {

  thematics: Thematic[] = [];

  responseFeatures: any[] = [];

  constructor(
    private thematicFeatureService: ThematicFeatureService,
    private mapContextService: MapContextService
  ) { }

  ngOnInit() {

    this.thematicFeatureService.listAllFeatures().subscribe((features: any[]) => {
      const thematics = this.thematicFeatureService.joinThematicsFeatures(features);
      this.thematics = this.displaySituationMapForEachLayer(thematics);

      this.responseFeatures = features;
      this.updateActiveThematicLayersFromFeatures(features);
      this.mapContextService.updateLayersVisibility('synthese');
    });
  }

  private displaySituationMapForEachLayer(thematics: Thematic[]): Thematic[] {
    return thematics.map((thematic) => {
      if (!thematic.layers) {
        thematic.layers = [];
      }
      thematic.layers = thematic.layers.map((layer: any) => {
        layer.displaySituationMap = true;
        return layer;
      });
      return thematic;
    });
  }


  private updateActiveThematicLayersFromFeatures(features: any) {
    for (let i = 0; i < features.length; i++) {
      const layer = features[i].layer;

      switch (layer) {
        case 'assiette_sup_s':
          if (!this.mapContextService.getActiveThematicLayers().some(elem => {return JSON.stringify({ theme: 'patrimoine', name: 'assiette_sup_s' }) === JSON.stringify(elem);})) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'patrimoine', name: 'assiette_sup_s' });
          }
          break;
        case 'prescription_surf':
          if (!this.mapContextService.getActiveThematicLayers().some(elem => {return JSON.stringify({ theme: 'patrimoine', name: 'prescription_surf' }) === JSON.stringify(elem);})) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'patrimoine', name: 'prescription_surf' });
          }
          break;
        case 'troncon_hydrographique':
          if (!this.mapContextService.getActiveThematicLayers().some(elem => {return JSON.stringify({ theme: 'autres', name: 'troncon_hydrographique' }) === JSON.stringify(elem);})) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'autres', name: 'troncon_hydrographique' });
          }
          break;
        default:
          if (!this.mapContextService.getActiveThematicLayers().some(elem => {return JSON.stringify({ theme: 'biodiversite', name: layer }) === JSON.stringify(elem);})) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'biodiversite', name: layer });
          }
      }
    }
  }

}

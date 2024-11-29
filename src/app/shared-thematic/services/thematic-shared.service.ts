import { Injectable } from '@angular/core';
import { MapContextService } from '../../shared-map/services/map-context.service';
import { THEMATIC_LIST } from '../models/thematic-list.enum';

@Injectable({
  providedIn: 'root',
})
export class ThematicSharedService {
  constructor(private mapContextService: MapContextService) {}

  updateActiveTabs(activeThemeList: string[]): any[] {
    return THEMATIC_LIST.filter((theme) => activeThemeList.includes(theme.name));
  }

  setSelectedTabIndex(tabId: string): number {
    let indexModifier = 0;
    for (let i = 0; i < THEMATIC_LIST.length; i++) {
      if (THEMATIC_LIST[i].name === tabId) {
        return i - indexModifier;
      } else if (!THEMATIC_LIST[i].active) {
        indexModifier++;
      }
    }
    return 0; // Default index if not found
  }

  initThematicList(): any[] {
    return THEMATIC_LIST.map((thematic) => {
      if (!thematic.layers) {
        thematic.layers = [];
      }
      return thematic;
    });
  }

    
    updateThematicFeatures( thematics: any[], features: any[], flatview: boolean ): any[] {
    return thematics.map((thematic) => {
        thematic.layers = thematic.layers.map((layer: any) => 
        this.updateLayerFeatures(layer, features, flatview)
        );
        return thematic;
    });
    }

    updateLayerFeatures(layer: any, features: any[], flatview: boolean): any {
    layer.flatview = flatview; // Paramètre dynamique pour flatview
    layer.features = features.filter(
        (feature) => this.parseLayerFromTechnicalName(layer.technicalName) === feature.layer
    );
    return layer;
    }


  updateActiveThematicLayersFromFeatures(features: any[]): void {
    features.forEach((feature) => {
      const layer = feature.layer;
      const activeLayer = { theme: '', name: layer };

      if (layer === 'assiette_sup_s') {
        activeLayer.theme = 'monument_historique';
        activeLayer.name = 'assiette_sup_s';
      } else {
        activeLayer.theme = 'biodiversite';
      }

      const activeLayers = this.mapContextService.getActiveThematicLayers();
      if (!activeLayers.some((l) => l.name === activeLayer.name)) {
        activeLayers.push(activeLayer);
      }
    });
  }

  parseLayerFromTechnicalName(technicalName: string): string {
    return technicalName.split(':')[1];
  }
}

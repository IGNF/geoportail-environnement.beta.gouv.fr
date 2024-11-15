import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { GeoplateformeWfsService, LON_LAT_ORDER } from '../../services/geoplateforme-wfs.service';
import { MAP_BIODIVERISTE_LAYER_GROUP } from '../../models/map-thematic-layers.enum';

@Component({
  selector: 'app-biodiversite',
  templateUrl: './biodiversite.component.html',
  styleUrl: './biodiversite.component.css'
})
export class BiodiversiteComponent implements OnInit {

  sites: any[] = [];

  constructor(
    private geoplateformeWfsService: GeoplateformeWfsService,
    private mapContextService: MapContextService,
  ) { };

  ngOnInit(): void {
    const maForet = this.mapContextService.getMaForet();

    const observableRequest = MAP_BIODIVERISTE_LAYER_GROUP.getLayersArray().map((layer) => {
      return layer.get('technicalName');
    }).map((layername) => {
      return this.geoplateformeWfsService
        .buildRequest()
        .fromLayer(layername)
        .intersectCollection(maForet, 'geom', !LON_LAT_ORDER)
        .getRequest();
    }).map((request) => this.geoplateformeWfsService.getFeatures(request));

    zip(observableRequest).subscribe((responses: any[]) => {
      const features = responses.reduce((collection, response) => {
        if (response.features) {
          collection.push(...response.features);
        }
        return collection;
      }, []);

      for (let i = 0; i < features.length; i++) {
        const layer = this.parseLayerFromId(features[i].id);
        this.mapContextService.getActiveThematicLayers().push({ theme: 'biodiversite', name: layer });
      }
      this.mapContextService.updateLayersVisibility('synthese');

      this.sites = this.parseSites(features);
    });
  };

  private parseSites(features: any): any[] {
    return features.map((feature: any) => {
      const id = feature.id;
      const layer = this.parseLayerFromId(id);
      const properties = feature.properties;
      return {
        id: id,
        layer: layer,
        name: properties.sitename || properties.nom || properties.nom_site,
        link: properties.url
      };
    });
  };

  private parseLayerFromId(id: string) {
    return id.split('.')[0];
  }

}

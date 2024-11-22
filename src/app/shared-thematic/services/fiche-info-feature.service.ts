import { Injectable } from '@angular/core';
import { GeoplateformeWfsService, LON_LAT_ORDER } from './geoplateforme-wfs.service';
import { MapContextService } from '../../shared-map/services/map-context.service';
import { MAP_BIODIVERISTE_LAYER_GROUP } from '../models/map-thematic-layers.enum';
import { WfsRequest } from '../models/wfs-request';

@Injectable({
  providedIn: 'root'
})
export class FicheInfoFeatureService {

  constructor(
    private mapContextService: MapContextService,
    private geoplateformeWfsService: GeoplateformeWfsService
  ) {}

  getrequests() : WfsRequest[]{
    const maForet = this.mapContextService.getMaForet();
    const requests = MAP_BIODIVERISTE_LAYER_GROUP.getLayersArray().map((layer) => {
      return layer.get('technicalName');
    }).map((layername) => {
      return this.geoplateformeWfsService
        .buildRequest()
        .fromLayer(layername)
        .intersectCollection(maForet, 'geom', !LON_LAT_ORDER)
        .getRequest();
    });

    const monumentsRequest = this.geoplateformeWfsService
      .buildRequest()
      .fromLayer('wfs_sup:assiette_sup_s')
      .filterSupType('ac1')
      .intersectCollection(maForet)
      .getRequest();

    requests.push(monumentsRequest);

    return requests;
  }

  getObservables(requests : WfsRequest[]) {
    return requests.map((request) => this.geoplateformeWfsService.getFeatures(request));
  }

}

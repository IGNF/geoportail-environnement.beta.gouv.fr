import { Component, OnInit } from '@angular/core';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { GeoplateformeWfsService, LON_LAT_ORDER } from '../../services/geoplateforme-wfs.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-biodiversite',
  templateUrl: './biodiversite.component.html',
  styleUrl: './biodiversite.component.css'
})
export class BiodiversiteComponent implements OnInit {

  oiseaux: any[] = [];

  habitats: any[] = [];

  znieffs: any[] = [];

  znieffsType2: any[] = [];

  constructor(
    private geoplateformeWfsService: GeoplateformeWfsService,
    private mapContextService: MapContextService,
  ) { };

  ngOnInit(): void {
    const maForet = this.mapContextService.getMaForet();
    // TODO trouver un moyen de tester l'abscence de foret dessiné sinon ça requete toutes les features
    if (!maForet) {
      return;
    }

    const observableRequest = [
      'PROTECTEDAREAS.ZPS:zps',
      'PROTECTEDAREAS.SIC:sic',
      'PROTECTEDAREAS.ZNIEFF1:znieff1',
      'PROTECTEDAREAS.ZNIEFF2:znieff2'
    ].map((layername) => {
      return this.geoplateformeWfsService
        .buildRequest()
        .fromLayer(layername)
        .intersectCollection(maForet, 'geom', !LON_LAT_ORDER)
        .getRequest();
    }).map((request) => this.geoplateformeWfsService.getFeatures(request))

    zip(observableRequest).subscribe(([
      oiseauxResponse,
      habitatsResponse,
      znieffsResponse,
      znieffsType2Response
    ]) => {
      this.oiseaux = this.parseSites(oiseauxResponse);
      this.habitats = this.parseSites(habitatsResponse);
      this.znieffs = this.parseSites(znieffsResponse);
      this.znieffsType2 = this.parseSites(znieffsType2Response);
    });

    // var spatialFilter = "" + this.HttpClientService.getIntersectsFilter("geom", false, this.mapContextService.getLayerDessin().getSource().getFeatures());
    // this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.ZPS:zps");
    // this.HttpClientService.setOption("cql_filter", spatialFilter);
    // this.HttpClientService.sendRequest((resp: any) => { this.siteZps = this.getSiteList(resp.features); });
    // this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.SIC:sic");
    // this.HttpClientService.sendRequest((resp: any) => { this.siteSic = this.getSiteList(resp.features); });
    // this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.ZNIEFF1:znieff1");
    // this.HttpClientService.sendRequest((resp: any) => { this.siteZnieff1 = this.getSiteList(resp.features); });
    // this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.ZNIEFF2:znieff2");
    // this.HttpClientService.sendRequest((resp: any) => { this.siteZnieff2 = this.getSiteList(resp.features); });
  };

  private parseSites(features: any[]): any[] {
    return features.map((feature) => {
      const properties = feature.properties;
      return {
        name: properties.sitename || properties.nom,
        link: properties.link
      }
    });
  };

}

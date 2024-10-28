import { Component, OnInit } from '@angular/core';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { GeoplateformeWfsService } from '../../services/geoplateforme-wfs.service';

@Component({
  selector: 'app-biodiversite',
  templateUrl: './biodiversite.component.html',
  styleUrl: './biodiversite.component.css'
})
export class BiodiversiteComponent implements OnInit {

  constructor(
    private geoplateformeWfsService: GeoplateformeWfsService,
    private mapContextService: MapContextService,
  ) { };

  ngOnInit(): void {
    // TODO réécrire la requete sur le modele de monument historique
    // var spatialFilter = "" + this.HttpClientService.getIntersectsFilter("geom", this.mapContextService.getLayerDessin().getSource().getFeatures());
    // this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.ZPS:zps");
    // this.HttpClientService.setOption("cql_filter", spatialFilter);
    // this.HttpClientService.sendRequest((resp: any) => { console.log(resp) });
  };

}

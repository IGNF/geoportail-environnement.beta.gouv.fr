import { Component, inject, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/httpClient.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';

@Component({
  selector: 'app-biodiversite',
  templateUrl: './biodiversite.component.html',
  styleUrl: './biodiversite.component.css'
})
export class BiodiversiteComponent implements OnInit{

  private HttpClientService = inject(HttpClientService);

  constructor(
    private mapContextService: MapContextService,
  ) { };

  ngOnInit(): void {

    var spatialFilter = "" + this.HttpClientService.getIntersectsFilter("geom", this.mapContextService.getLayerDessin().getSource().getFeatures());
    this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.ZPS:zps");

    this.HttpClientService.setOption("cql_filter", spatialFilter);

    this.HttpClientService.sendRequest((resp:any) => {console.log(resp)});
  };

}

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

  siteZps : Array<any> = [];
  siteSic : Array<any> = [];
  siteZnieff1 : Array<any> = [];
  siteZnieff2 : Array<any> = [];

  constructor(
    private mapContextService: MapContextService,
  ) { };

  ngOnInit(): void {

    var spatialFilter = "" + this.HttpClientService.getIntersectsFilter("geom", false, this.mapContextService.getLayerDessin().getSource().getFeatures());
    this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.ZPS:zps");

    this.HttpClientService.setOption("cql_filter", spatialFilter);

    this.HttpClientService.sendRequest((resp:any) => {this.siteZps = this.getSiteList(resp.features);});

    this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.SIC:sic");

    this.HttpClientService.sendRequest((resp:any) => {this.siteSic = this.getSiteList(resp.features);});

    this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.ZNIEFF1:znieff1");

    this.HttpClientService.sendRequest((resp:any) => {this.siteZnieff1 = this.getSiteList(resp.features);});

    this.HttpClientService.setOption("typeName", "PROTECTEDAREAS.ZNIEFF2:znieff2");

    this.HttpClientService.sendRequest((resp:any) => {this.siteZnieff2 = this.getSiteList(resp.features);});
  };

  getSiteList(features : Array<any>) {
    var list = [];
    for(var i = 0; i < features.length; i++) {
      list.push([features[i].properties.sitename?features[i].properties.sitename:features[i].properties.nom, features[i].properties.url]);
    }
    return list;
  };

}

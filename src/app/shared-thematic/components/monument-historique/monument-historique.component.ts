import { Component, OnInit, inject } from '@angular/core';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { HttpClientService } from '../../services/httpClient.service';


@Component({
  selector: 'app-monument-historique',
  templateUrl: './monument-historique.component.html',
  styleUrl: './monument-historique.component.css'
})
export class MonumentHistoriqueComponent implements OnInit{

  private HttpClientService = inject(HttpClientService);
  monumentList: Array<Array<string>> = [];
  pdfList: Array<any> = [];

  constructor(
    private mapContextService: MapContextService,
  ) { };

  ngOnInit(): void {
    var spatialFilter = this.HttpClientService.getIntersectsFilter("the_geom", true, this.mapContextService.getLayerDessin().getSource().getFeatures());
    this.HttpClientService.setOption("typeName", "wfs_sup:assiette_sup_s");

    this.HttpClientService.setOption("cql_filter", "suptype='ac1' AND " + spatialFilter);

    this.HttpClientService.sendRequest((resp:any) => {this.monumentList = this.getMonumentList(resp.features);});
  };

  getMonumentList(features: Array<any>) {
    var list = [];
    for(var i=0; i<features.length; i++) {
      var pdf : any;
      if(features[i].properties.fichier) {
        pdf = "https://data.geopf.fr/annexes/gpu/documents/" + features[i].properties.partition + "/" + features[i].properties.gpu_doc_id + "/" + features[i].properties.fichier;
      }
      else {
        pdf = "none";
      }
      list.push([this.isoToUtf(features[i].properties.nomsuplitt), pdf]);
    }
    return list;
  }

  isoToUtf(str : string) {
    str = str.replace(/Ã©/g, "é");
    str = str.replace(/Ã¨/g, "è");
    str = str.replace(/Ã/g, "à");
    str = str.replace(/Ã¯/g, "ï");
    str = str.replace(/à´/g, "ô");
    str = str.replace(/Ã§/g, "ç");
    str = str.replace(/Ãª/g, "ê");
    str = str.replace(/àª/g, "ê");
    str = str.replace(/Ã¹/g, "ù");
    str = str.replace(/Ã¦/g, "æ");
    str = str.replace(/Å/g, "œ");
    str = str.replace(/Ã«/g, "ë");
    str = str.replace(/Ã¼/g, "ü");
    str = str.replace(/à¢/g, "â");

    return str;
  }

}

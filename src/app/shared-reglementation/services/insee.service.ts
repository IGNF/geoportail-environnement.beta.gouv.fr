import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { MapContextService } from '../../shared-map/services/map-context.service';
import { GeoplateformeWfsService } from '../../shared-thematic/services/geoplateforme-wfs.service';

@Injectable({
  providedIn: 'root'
})
export class InseeService {

  constructor(
    private mapContextService: MapContextService,
    private geoplateformeWfsService: GeoplateformeWfsService
  ) { }

  reverseGeocadageInsee(layer: string): Observable<string[]> {
    const maForet = this.mapContextService.getMaForet();
    const wfsReq = this.geoplateformeWfsService.buildRequest().fromLayer(layer);
    wfsReq.intersectCollection(maForet, 'geometrie');

    return this.geoplateformeWfsService.getFeatures(wfsReq.getRequest()).pipe(
      map((response) => this.parseResponse(response))
    );
  }

  private parseResponse(response: any): string[] {
    const features = response.features || [];
    return features.map((f: any) => f.properties['code_insee']).filter((code: string) => code);
  }

}

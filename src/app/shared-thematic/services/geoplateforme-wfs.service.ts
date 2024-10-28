import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { WfsRequest } from '../models/wfs-request';
import { toLonLat } from 'ol/proj';

@Injectable({
  providedIn: 'root'
})
export class GeoplateformeWfsService {

  private url: string = environment.geoplateformeWfsUrl;

  private request!: WfsRequest;

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  buildRequest(): GeoplateformeWfsService {
    this.request = new WfsRequest().deserialise({
      service: 'WFS',
      version: '2.0.0',
      request: 'GetFeature',
      srsName: 'CRS:84',
      outputFormat: 'application/json',
      maxFeatures: 50
    });
    return this;
  }

  fromLayer(layername: string): GeoplateformeWfsService {
    this.request.typeName = layername;
    return this;
  }

  filterSupType(subtype: string): GeoplateformeWfsService {
    this.request.cqlFilters.push(`suptype='${subtype}'`);
    return this;
  }

  intersectCollection(features: any[]): GeoplateformeWfsService {
    // const intersectFilter = 'INTERSECTS(the_geom, MULTIPOLYGON(((48.83555415770596 2.4272448684002867, 48.828209180338774 2.4310214186932555, 48.83306828591324 2.4629504348065367, 48.84312400742064 2.4552256728436457, 48.83555415770596 2.4272448684002867, 48.83555415770596 2.4272448684002867))))';
    const intersectFilter = this.getIntersectsFilter('the_geom', features);
    if (intersectFilter !== '') {
      this.request.cqlFilters.push(intersectFilter);
    }
    return this;
  }

  getRequest(): WfsRequest {
    return this.request;
  }

  getFeatures(request: WfsRequest): Observable<any> {
    // TODO correct error 500 on POST
    // return this.httpClient.post(this.url, request.serialise(), { headers: this.headers });
    return this.httpClient.get(this.toQueryParams(request), { headers: this.headers });
  }

  private toQueryParams(request: WfsRequest): string {
    const serialiseRequest = request.serialise();
    const queryParams = Object.keys(serialiseRequest).map(key => `${key}=${serialiseRequest[key]}`).join('&');
    return `${this.url}?${queryParams}`;
  }


  /**
   * Produce 'INTERSECTS(the_geom, MULTIPOLYGON(((48.83555415770596 2.4272448684002867, 48.828209180338774 2.4310214186932555, 48.83306828591324 2.4629504348065367, 48.84312400742064 2.4552256728436457, 48.83555415770596 2.4272448684002867, 48.83555415770596 2.4272448684002867))))'
   * @param geomName 
   * @param features 
   * @returns 
   */
  private getIntersectsFilter(geomName: string, features: Array<any>): string {

    let spatialFilter = '';
    if (features.length) {
      const polygons = [];
      let coordinates = [];
      let lonLatCoords = [];

      for (let i = 0; i < features.length; i++) {
        for (let j = 0; j < features[i].getGeometry().getCoordinates().length; j++) {
          for (let k = 0; k < features[i].getGeometry().getCoordinates()[j].length; k++) {
            lonLatCoords.push(toLonLat(features[i].getGeometry().getCoordinates()[j][k]));
          }
          coordinates.push(lonLatCoords);
          lonLatCoords = [];
        }
        polygons.push(coordinates);
        coordinates = [];
      }

      spatialFilter += 'INTERSECTS(' + geomName + ', MULTIPOLYGON((';
      for (let i = 0; i < polygons.length; i++) {
        spatialFilter += this.getPolygonString(polygons[i]) + '), (';
      }
      spatialFilter = spatialFilter.replace(/, \($/, '');
      spatialFilter += '))';

      return spatialFilter;
    }
    return '';
  };

  private getPolygonString = function (coords: Array<any>) {
    let str = '';
    for (let i = 0; i < coords.length; i++) {
      str += '(';
      for (let j = 0; j < coords[i].length; j++) {
        str += coords[i][j][1] + ' ' + coords[i][j][0] + ', ';
      }
      str += coords[i][0][1] + ' ' + coords[i][0][0] + '), ';
    }
    str = str.replace(/, $/, '');
    return str;
  }

}

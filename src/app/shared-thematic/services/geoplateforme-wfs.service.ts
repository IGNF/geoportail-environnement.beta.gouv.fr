import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { WfsRequest } from '../models/wfs-request';
import { toLonLat } from 'ol/proj';

export const LON_LAT_ORDER = true;
export const GEOMETRY_NAME = 'the_geom';

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

  filterByAttribute(attribute: string, value: string): GeoplateformeWfsService {
    this.request.cqlFilters.push(`${attribute}='${value}'`);
    return this;
  }

  filterByAttributeInValues(attribute: string, values: string[]) {
    let res = `${attribute} IN (`;
    for (let i = 0; i < values.length; i++) {
      res += `'${values[i]}', `
    }
    res = res.replace(/, $/, '');
    res += ')';
    return this.request.cqlFilters.push(res);
  }

  intersectCollection(features: any[], geometryName: string = GEOMETRY_NAME, lonLatOrder: boolean = LON_LAT_ORDER): GeoplateformeWfsService {
    const intersectFilter = this.getIntersectsFilter(geometryName, features, lonLatOrder);
    if (intersectFilter !== '') {
      this.request.cqlFilters.push(intersectFilter);
    }
    return this;
  }

  setIntersectsPointFilter(geomName: string, coordinate: Array<number>) {
    coordinate = toLonLat(coordinate);
    this.request.cqlFilters.push('INTERSECTS(' + geomName + ', POINT(' + coordinate[1] + " " + coordinate[0] + '))');
    return this;
  };

  getRequest(): WfsRequest {
    return this.request;
  }

  getFeatures(request: WfsRequest): Observable<any> {
    let url = 'https://data.geopf.fr/wfs/ows';
    let params = request.serialise();
    
    let body = 'cql_filter=' + params.cql_filter;
    delete params["cql_filter"];

    return this.httpClient.post(url, body, {
      params : params,
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  /**
   * Produce 'INTERSECTS(the_geom, MULTIPOLYGON(((48.83555415770596 2.4272448684002867, 48.828209180338774 2.4310214186932555, 48.83306828591324 2.4629504348065367, 48.84312400742064 2.4552256728436457, 48.83555415770596 2.4272448684002867, 48.83555415770596 2.4272448684002867))))'
   * @param geomName 
   * @param features 
   * @returns 
   */
  private getIntersectsFilter(geomName: string, features: Array<any>, lonLatOrder: boolean = LON_LAT_ORDER): string {

    let spatialFilter = '';
    if (features.length) {
      const polygons = [];
      let coordinates = [];
      let lonLatCoords = [];

      for (let i = 0; i < features.length; i++) {
        for (let j = 0; j < features[i].getGeometry().getCoordinates().length; j++) {
          for (let k = 0; k < features[i].getGeometry().getCoordinates()[j].length; k++) {
            let point = features[i].getGeometry().getCoordinates()[j][k];
            if (lonLatOrder) {
              point = toLonLat(point);
            }
            lonLatCoords.push(point);
          }
          coordinates.push(lonLatCoords);
          lonLatCoords = [];
        }
        polygons.push(coordinates);
        coordinates = [];
      }

      spatialFilter += 'INTERSECTS(' + geomName + ', MULTIPOLYGON((';
      for (let i = 0; i < polygons.length; i++) {
        spatialFilter += this.getPolygonString(polygons[i], lonLatOrder) + '), (';
      }
      spatialFilter = spatialFilter.replace(/, \($/, '');
      spatialFilter += '))';

      return spatialFilter;
    }
    return '';
  };

  private getPolygonString(coords: Array<any>, lonLatOrder: boolean = LON_LAT_ORDER) {
    let str = '';
    for (let i = 0; i < coords.length; i++) {
      str += '(';
      for (let j = 0; j < coords[i].length; j++) {
        str += coords[i][j][lonLatOrder ? 1 : 0] + ' ' + coords[i][j][lonLatOrder ? 0 : 1] + ', ';
      }
      str += coords[i][0][lonLatOrder ? 1 : 0] + ' ' + coords[i][0][lonLatOrder ? 0 : 1] + '), ';
    }
    str = str.replace(/, $/, '');
    return str;
  }

}

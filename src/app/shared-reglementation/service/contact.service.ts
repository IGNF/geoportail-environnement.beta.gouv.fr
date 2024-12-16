import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, zip } from 'rxjs';
import { environment } from '../../../environments/environment';

import { ApiAnnuaireRequest } from '../models/api-annuaire-request';
import { GeoplateformeWfsService } from '../../shared-thematic/services/geoplateforme-wfs.service';
import { MapContextService } from '../../shared-map/services/map-context.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url: string = environment.apiAnnuaireUrl;

  private request!: ApiAnnuaireRequest;

  constructor(
    private httpClient: HttpClient,
    private geoplateformeService: GeoplateformeWfsService,
    private mapContextService: MapContextService
  ) { }


  getInseeCode(layer: string): Observable<any> {
    const maForet = this.mapContextService.getMaForet();
    let wfsReq = this.geoplateformeService.buildRequest().fromLayer(layer);
    wfsReq.intersectCollection(maForet, 'geometrie');
    return this.geoplateformeService.getFeatures(wfsReq.getRequest()).pipe(
      map((response) => {
        const features = response.features || [];
        return features;
      })
    )
  }

  private getContact(contactReference: string, inseeCode: string): Observable<any> {
    this.buildRequest();
    this.filterByName(contactReference);
    this.filterByInseeCode(inseeCode);
    return this.getFeatures().pipe(
      map((response) => {
        const features = response.results || [];
        return features.map((feature: any) => this.parseFeature(feature));
      })
    )
  }

  getContacts(contactReference: string[], inseeCode: string[]): Observable<any> {
    let requestArray: Observable<any>[] = [];
    for (let i = 0; i < contactReference.length; i++) {
      for (let j = 0; j < inseeCode.length; j++) {
        requestArray.push(this.getContact(contactReference[i], inseeCode[j]))
      }
    }
    return zip(requestArray).pipe(map((contact) => {
      return contact;
    }));
  }

  private buildRequest() {
    this.request = new ApiAnnuaireRequest().deserialise({});
    return this;
  }

  private filterByName(name: string) {
    this.request.where.push('nom LIKE \' ' + name + '\'');
  }

  private filterByInseeCode(inseeCode: string) {
    this.request.where.push('startswith(code_insee_commune, \'' + inseeCode + '\')');
  }

  private getFeatures(): Observable<any> {
    return this.httpClient.get(this.toQueryParams(this.request));
  }

  private toQueryParams(request: ApiAnnuaireRequest): string {
    const serialiseRequest = request.serialise();
    const queryParams = Object.keys(serialiseRequest).map(key => `${key}=${serialiseRequest[key]}`).join('&');
    return `${this.url}?${queryParams}`;
  }

  private parseFeature(feature: any) {
    ;
    let adresse = feature.adresse ? JSON.parse(feature.adresse)[0] : '';
    return {
      name: feature.nom,
      address: adresse.numero_voie + " " + adresse.complement1 + " " + adresse.complement2 + " " + adresse.code_postal + " " + adresse.nom_commune,
      website: feature.site_internet ? JSON.parse(feature.site_internet)[0].valeur : '',
      mail: feature.adresse_courriel,
      contactForm: feature.formulaire_contact,
      tel: feature.telephone ? JSON.parse(feature.telephone)[0].valeur : ''
    }
  }

}

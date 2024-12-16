import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, zip } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Contact } from '../models/contact.model';
import { AnnuairePublicRequest } from '../models/annuaire-public-request';

@Injectable({
  providedIn: 'root'
})
export class AnnuairePublicService {

  private url: string = environment.apiAnnuaireUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getContacts(nameList: string[], inseeList: string[]): Observable<Contact[]> {
    const contactRequests = nameList.map((name) => inseeList.map(insee => {
      return { name: name, insee: insee };
    })).flat();
    return zip(contactRequests.map((request) => this.getContact(request.name, request.insee))).pipe(
      map((results: any) => results.filter((contact: Contact) => contact.name))
    );
  }

  getContact(name: string, insee: string): Observable<Contact> {
    const request = new AnnuairePublicRequest();
    request.where = [
      `nom LIKE '${name}'`,
      `startswith(code_insee_commune,'${insee}')`
    ];
    return this.httpClient.get(this.toQueryParams(request)).pipe(
      map((response: any) => {
        if (!(response && response.results.length > 0)) {
          return new Contact();
        }
        const resultatPrincipal = response.results[0];
        return new Contact().deserialise(resultatPrincipal);
      })
    );
  };

  private toQueryParams(request: AnnuairePublicRequest): string {
    const serialiseRequest = request.serialise();
    const queryParams = Object.keys(serialiseRequest).map(key => `${key}=${serialiseRequest[key]}`).join('&');
    return `${this.url}?${queryParams}`;
  }

}

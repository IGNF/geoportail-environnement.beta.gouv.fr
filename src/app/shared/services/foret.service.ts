import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';

import { Foret } from '../models/foret.model';
import { TokenService } from './token.service';
import { MOCK_DB_FORETS } from '../models/mock-db-foret.enum';
import { environment } from '../../../environments/environment';
import { INTERCEPT } from '../../core/interceptors/app-token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ForetService {

  private apiUrl = environment.apiUrl;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  list(): Observable<Foret[]> {
    const url = `${this.apiUrl}/forets`;
    return this.http.get(url, { headers: this.getHeaders(), context: this.getInterceptContext() }).pipe(
      map((response: any) => response?.map((f: any) => new Foret().deserialise(f)))
    );
  }

  getForet(id: string): Observable<Foret> {
    const url = `${this.apiUrl}/forets/${id}`;
    return this.http.get(url, { headers: this.getHeaders(), context: this.getInterceptContext() }).pipe(
      map((response: any) => new Foret().deserialise(response))
    );
  }

  getMockForet(id: string): Observable<Foret | undefined> {
    const forests = MOCK_DB_FORETS.map((foretProperties) => new Foret().deserialise(foretProperties));
    return of(forests.find((foret) => foret.id === id));
  }

  mockList(): Observable<Foret[]> {
    return of([...MOCK_DB_FORETS.map((foretProperties) => new Foret().deserialise(foretProperties))]);
  }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenService.getToken()}`
    });
  }

  private getInterceptContext() {
    return new HttpContext().set(INTERCEPT, true);
  }

}

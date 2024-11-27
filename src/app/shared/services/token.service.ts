import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string = '';

  private refreshToken: string = '';

  constructor(
    private http: HttpClient
  ) { }

  requestRefreshToken() {
    const url = `${environment.apiUrl}/token/refresh`;
    const postBody = { refresh_token: this.getRefreshToken() };
    return this.http.post(url, postBody, { headers: this.getHeaders() }).pipe(
      map((response: any) => {
        const parsedResponse = JSON.parse(response.responseText);
        this.setToken(parsedResponse.token);
      })
    );
  }

  hasToken() {
    return localStorage.getItem(environment.localStorageTokenItem) !== null;
  }

  getToken() {
    this.token = localStorage.getItem(environment.localStorageTokenItem) || '';
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  hasRefreshToken() {
    return localStorage.getItem(environment.localStorageRefreshTokenItem) !== null;
  }

  getRefreshToken() {
    this.refreshToken = localStorage.getItem(environment.localStorageRefreshTokenItem) || '';
    return this.refreshToken;
  }

  setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

}

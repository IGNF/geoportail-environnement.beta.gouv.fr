import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string = '';

  private refreshToken: string = '';

  constructor() { }

  hasToken() {
    return localStorage.getItem(environment.localStorageTokenItem) !== null;
  }

  removeToken() {
    localStorage.removeItem(environment.localStorageTokenItem);
    localStorage.removeItem(environment.localStorageRefreshTokenItem);
  }

  getToken() {
    this.token = localStorage.getItem(environment.localStorageTokenItem) || '';
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem(environment.localStorageTokenItem, this.token);
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
    localStorage.setItem(environment.localStorageRefreshTokenItem, this.token);
  }

}

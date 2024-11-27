import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { INTERCEPT } from '../../core/interceptors/app-token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  getUserInfo(): Observable<any> {
    const url = `${this.apiUrl}/me`;
    return this.http.get(url, { headers: this.getHeaders(), context: this.getContext() });
  }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenService.getToken()}`
    });
  }

  private getContext() {
    return new HttpContext().set(INTERCEPT, true);
  }

}

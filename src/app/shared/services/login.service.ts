import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';
import { INTERCEPT } from '../../core/interceptors/app-token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private router: Router
  ) { }

  getUserInfo(): Observable<any> {
    const url = `${this.apiUrl}/me`;
    return this.http.get(url, { headers: this.getHeaders(), context: this.getInterceptContext() });
  }

  refreshAccessToken() {
    const url = `${environment.apiUrl}/token/refresh`;
    const postBody = { refresh_token: this.tokenService.getRefreshToken() };
    return this.http.post(url, postBody, { headers: this.getHeaders() }).pipe(
      map((response: any) => {
        this.tokenService.setToken(response['token']);
        // this.tokenService.setRefreshToken(response['refresh_token']);
        console.log('[TokenService]', 'refreshAccessToken', 'Token raffraichi avec succes.');
      }),
      catchError((error) => {
        if (error.status === 401) {
          console.warn('[TokenService]', 'refreshAccessToken', 'Votre authentification[refreshToken] est invalide ou expirée.');
          this.logout();
        } else {
          console.error('[TokenService]', 'refreshAccessToken', 'Une erreur serveur est survenue.');
        }
        return throwError(() => error);
      })
    );
  }

  logout() {
    alert('Vous avez été déconnecté. Veuillez passer par le formulaire de connexion pour renouveler vos acces');
    this.tokenService.removeToken();
    this.router.navigate(['/']);
  }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private getInterceptContext() {
    return new HttpContext().set(INTERCEPT, true);
  }

}

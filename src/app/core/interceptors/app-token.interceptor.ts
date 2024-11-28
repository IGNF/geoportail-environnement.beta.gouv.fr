import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';

import { TokenService } from '../../shared/services/token.service';
import { LoginService } from '../../shared/services/login.service';

export const INTERCEPT = new HttpContextToken(() => false);

@Injectable({
  providedIn: 'root'
})
export class AppTokenInterceptor implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.context.get(INTERCEPT)) {
      return next.handle(request);
    }

    if (this.hasToken()) {
      request = this.addToken(request);
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => event),
      catchError((error) => {
        if (error.status >= 500) {
          this.alertUser('Une erreur serveur est survenue.');
          this.router.navigate(['/']);
        } else if (error.status === 404) {
          this.router.navigate(['/', '404']);
        } else if (error.status === 403) {
          this.alertUser('Votre authentification ne vous donne pas accès a ce contenu.');
        } else if (error.status === 401) {
          this.alertUser('Votre authentification[token] est invalide ou expirée. Veuillez vous reconnecter.');
          return this.handleTokenExpired(request, next);
        } else {
          // this.alertUser('Une erreur serveur est survenue.');
        }
        return throwError(() => error);
      })
    );

  }


  private handleTokenExpired(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);
    return loginService.refreshAccessToken().pipe(
      switchMap(() => {
        // Retry the original request with the new access token
        return next.handle(this.addToken(request));
      }),
      catchError((error) => {
        // Handle refresh token error (e.g., redirect to login page)
        console.error('Error handling expired access token:', error);
        return throwError(() => error);
      })
    );
  }


  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    const tokenService = this.injector.get(TokenService);
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
    });
  }


  private hasToken() {
    const tokenService = this.injector.get(TokenService);
    return tokenService.hasToken();
  }


  private alertUser(message: string) {
    console.warn('[AppTokenInterceptor]', message);
  }

}

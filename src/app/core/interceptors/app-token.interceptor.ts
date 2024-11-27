import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { TokenService } from '../../shared/services/token.service';
import { environment } from '../../../environments/environment';

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
    
    console.log('intercept', request.url);

    if (!this.hasToken()) {
      return next.handle(request);
    }

    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.getToken()}`)
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => event),
      catchError((error) => {
        if (error.status >= 500) {
          this.alertUser('Une erreur serveur est survenue.');
          this.router.navigate(['/']);
        } else if (error.status === 404) {
          this.router.navigate(['/', '404']);
        } else if (error.status === 403 || error.status === 401) {
          // this.alertUser('Votre authentification est invalide ou expirée. Veuillez vous reconnecter.');
          console.log('Votre authentification est invalide ou expirée. Veuillez vous reconnecter.');
          window.location.href = environment.loginUrl;
        } else {
          // this.alertUser('Une erreur serveur est survenue.');
        }
        return throwError(() => error);
      })
    );

  }


  private alertUser(message: string) {
    alert(message);
  }


  private hasToken() {
    const loginRegisterService = this.injector.get(TokenService);
    return loginRegisterService.hasToken();
  }

  /**
   * Lecture du token depuis le localStorage du navigateur
   * @returns le jeton d'authentification s'il existe
   * @memberOf AppTokenInterceptor
   */
  private getToken() {
    const loginRegisterService = this.injector.get(TokenService);
    return loginRegisterService.getToken();
  }

}

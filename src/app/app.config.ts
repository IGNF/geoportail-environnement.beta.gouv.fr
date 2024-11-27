import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { ExtendDatePipe } from './shared/pipes/extend-date.pipe';
import { TitlePrefixStrategy } from './core/strategies/title-prefix.strategy';
import { AppTokenInterceptor } from './core/interceptors/app-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    ExtendDatePipe,
    { provide: TitleStrategy, useClass: TitlePrefixStrategy },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    { provide: HTTP_INTERCEPTORS, useClass: AppTokenInterceptor, multi: true }
  ]
};

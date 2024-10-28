import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { ExtendDatePipe } from './shared/pipes/extend-date.pipe';
import { TitlePrefixStrategy } from './core/strategies/title-prefix.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    ExtendDatePipe,
    { provide: TitleStrategy, useClass: TitlePrefixStrategy },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};

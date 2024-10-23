import { LOCALE_ID, NgModule, provideZoneChangeDetection } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter, RouterModule, TitleStrategy } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedDesignDsfrModule } from './shared-design-dsfr/shared-design-dsfr.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MesForetsComponent } from './pages/mes-forets/mes-forets.component';
import { ExtendDatePipe } from './shared/pipes/extend-date.pipe';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { TitlePrefixStrategy } from './core/strategies/title-prefix.strategy';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    MesForetsComponent,
    ExtendDatePipe,
    SimplePageComponent
  ],
  imports: [
    BrowserModule,
    SharedDesignDsfrModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    ExtendDatePipe,
    { provide: TitleStrategy, useClass: TitlePrefixStrategy },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
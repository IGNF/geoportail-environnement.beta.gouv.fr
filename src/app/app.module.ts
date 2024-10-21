import { LOCALE_ID, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedDesignDsfrModule } from './shared-design-dsfr/shared-design-dsfr.module';
import { ThematicModule } from './thematic/thematic.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ForetStepperComponent } from './components/foret-stepper/foret-stepper.component';
import { ForetSearchFormComponent } from './components/foret-search-form/foret-search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NextStepComponent } from './components/next-step/next-step.component';
import { MapComponent } from './components/map/map.component';
import { MesForetsComponent } from './pages/mes-forets/mes-forets.component';
import { ExtendDatePipe } from './shared/pipes/extend-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ForetStepperComponent,
    ForetSearchFormComponent,
    NotFoundComponent,
    NextStepComponent,
    MapComponent,
    MesForetsComponent,
    ExtendDatePipe
  ],
  imports: [
    BrowserModule,
    SharedDesignDsfrModule,
    FormsModule,
    ReactiveFormsModule,
    ThematicModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedDesignDsfrModule } from './shared-design-dsfr/shared-design-dsfr.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { ForetStepperComponent } from './components/foret-stepper/foret-stepper.component';
import { ForetSearchFormComponent } from './components/foret-search-form/foret-search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NextStepComponent } from './components/next-step/next-step.component';
import { MapComponent } from './components/map/map.component';
import { MapInfoComponent } from './components/map-info/map-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    JoinUsComponent,
    ForetStepperComponent,
    ForetSearchFormComponent,
    NotFoundComponent,
    NextStepComponent,
    MapComponent,
    MapInfoComponent
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
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
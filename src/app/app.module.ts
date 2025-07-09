import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { routes } from './app.routes';

import { SharedDesignDsfrModule } from './shared-design-dsfr/shared-design-dsfr.module';

import { FooterComponent } from './components/footer/footer.component';
import { FooterPrintComponent } from './components/footer-print/footer-print.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderPrintComponent } from './components/header-print/header-print.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MesForetsComponent } from './pages/mes-forets/mes-forets.component';
import { ExtendDatePipe } from './shared/pipes/extend-date.pipe';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPrintComponent,
    FooterComponent,
    FooterPrintComponent,
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
  providers: appConfig.providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
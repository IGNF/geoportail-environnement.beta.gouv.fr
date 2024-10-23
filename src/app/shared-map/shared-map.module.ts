import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { GeolocaliseFormComponent } from './components/geolocalise-form/geolocalise-form.component';

@NgModule({
  declarations: [
    MapViewerComponent,
    GeolocaliseFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapViewerComponent,
    GeolocaliseFormComponent
  ]
})
export class SharedMapModule { }
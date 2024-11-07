import { Component, OnInit } from '@angular/core';

import { MapContextService } from '../../services/map-context.service';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.css'
})
export class MapViewerComponent implements OnInit {

  constructor(
    private mapContextService: MapContextService
  ) { }

  ngOnInit(): void {

    if (!this.mapContextService.isMapLoaded()) {
      return;
    }

    this.mapContextService.setView([261271, 6249998], 13);
    this.mapContextService.addDrawingTools();

  }
}

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { MapContextService } from '../../services/map-context.service';

@Component({
  standalone: false,
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.css'
})
export class MapViewerComponent implements OnInit, AfterViewInit {

  @Input() id: string = 'map';

  @Input() situationMap: boolean = false;

  constructor(
    private mapContextService: MapContextService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.situationMap) {
      this.copyMap();
      return;
    }
    this.newMap();
  }

  newMap() {
    this.mapContextService.createMap(this.id);
    this.mapContextService.setView([261271, 6249998], 13);
    this.mapContextService.addDrawingTools();
  }

  copyMap() {
    const mapClone = this.mapContextService.createSituationMap(this.id, this.id);
    this.mapContextService.centerOnDessin(mapClone);
  }

}

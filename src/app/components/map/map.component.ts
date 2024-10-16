import { Component, OnInit } from '@angular/core';
import SearchGeoportail from 'ol-ext/control/SearchGeoportail';

import { MapContextService } from '../../shared/services/map-context.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  constructor(
    private mapContextService: MapContextService
  ) { }

  ngOnInit(): void {
    this.mapContextService.createMap('map');

    // barre de recherche ol-ext
    const search = new SearchGeoportail({
      target: 'location',
      maxItems: 3,
      className: 'fr-input-wrap fr-input-wrap--addon'
    });
    this.mapContextService.map?.addControl(search);
  }

}

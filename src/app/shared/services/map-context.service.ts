import { Injectable } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

@Injectable({
  providedIn: 'root'
})
export class MapContextService {

  map?: Map;

  constructor() { }

  createMap(elementId: string) {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: elementId
    });
  }
}

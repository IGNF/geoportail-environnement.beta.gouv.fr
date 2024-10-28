import { EventEmitter, Injectable } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js'
import VectorLayer from 'ol/layer/Vector';
import { Vector } from 'ol/source';
import OSM from 'ol/source/OSM.js';

@Injectable({
  providedIn: 'root'
})
export class MapContextService {

  map?: Map;

  mapLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  getMap(): Map | any {
    return this.map;
  }

  isMapLoaded() {
    return this.map || this.map !== null;
  }

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
        new VectorLayer({
          source: new Vector(),
          properties: { title: "Dessin" }
        })
      ],
      target: elementId
    });

    this.map.on('rendercomplete', (event) => this.mapLoaded.next(event));
  }

  setView(coordinates: any[], zoom: number) {
    this.map?.getView().setCenter(coordinates);
    this.map?.getView().setZoom(zoom);
  }

  getLayerDessin(): any {
    var layers = this.map?.getLayers().getArray();
    if (layers) {
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].get("title") == "Dessin") {
          return layers[i];
        }
      }
    }
    return null;
  }
}

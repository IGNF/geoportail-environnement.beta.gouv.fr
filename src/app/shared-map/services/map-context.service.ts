import { EventEmitter, Injectable } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import LayerSwitcher from 'ol-ext/control/LayerSwitcher';
import { MAP_LAYERS_DEFAULT } from '../models/map-layers-default.enum';
import { MAP_BIODIVERISTE_LAYERS, MAP_MONUMENTS_LAYERS } from '../../shared-thematic/models/map-thematic-layers.enum';
import VectorLayer from 'ol/layer/Vector';
import { Vector } from 'ol/source';
import LayerGroup from 'ol/layer/Group';

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
        ...MAP_LAYERS_DEFAULT,
        ...MAP_BIODIVERISTE_LAYERS,
        ...MAP_MONUMENTS_LAYERS,
        new VectorLayer({
          source: new Vector(),
          properties: { title: 'Ma Forêt' }
        })
      ],
      target: elementId
    });

    this.map.addControl(new LayerSwitcher());

    this.map.on('rendercomplete', (event) => this.mapLoaded.next(event));
  }

  updateLayers(thematicName: string) {
    // const layers = this.map?.getLayers().getArray();
    // layers?.forEach((layer) => {
    //   const group = layer.get('group') || 'base-layer';
    //   if (group !== 'base-layer') {
    //     this.map?.removeLayer(layer);
    //   }
    // });

    // [...MAP_BIODIVERISTE_LAYERS, ...MAP_MONUMENTS_LAYERS].forEach((newlayer) => {
    //   const group = newlayer.get('group') || 'no-group';
    //   if (group === thematicName) {
    //     this.map?.addLayer(newlayer);
    //   }
    // });
  }

  setView(coordinates: any[], zoom: number) {
    this.map?.getView().setCenter(coordinates);
    this.map?.getView().setZoom(zoom);
  }

  getLayerDessin(): any {
    const layers = this.map?.getLayers().getArray();
    if (layers) {
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].get('title') === 'Ma Forêt') {
          return layers[i];
        }
      }
    }
    return null;
  }

  getMaForet() {
    if (!this.getLayerDessin()) {
      return [];
    }
    return this.getLayerDessin().getSource().getFeatures();
  }

  resetDessin() {
    this.getLayerDessin().getSource().forEachFeature((f: any) => {
      this.getLayerDessin()?.getSource().removeFeature(f);
    });
  }

}

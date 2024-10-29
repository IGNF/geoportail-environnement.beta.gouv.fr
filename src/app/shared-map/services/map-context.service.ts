import { EventEmitter, Injectable } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js'
import TileWMS from 'ol/source/TileWMS.js';
import VectorLayer from 'ol/layer/Vector';
import GeoportailLayer from 'ol-ext/layer/Geoportail';
import LayerSwitcher from 'ol-ext/control/LayerSwitcher';
import { Vector } from 'ol/source';

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
        new GeoportailLayer({
          layer: "ORTHOIMAGERY.ORTHOPHOTOS"
        }),
        new GeoportailLayer({
          layer: "ADMINEXPRESS-COG-CARTO.LATEST"
        }),
        new GeoportailLayer({
          layer: "CADASTRALPARCELS.PARCELLAIRE_EXPRESS"
        }),
        new GeoportailLayer({
          layer: "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2"
        }),
        new TileLayer ({
          //@ts-ignore
          "title": "Natura 2000 Habitats",
          "extent": [
            -20037508.342789244,
            -44927335.42709704,
            20037508.342789244,
            44927335.42709663
          ],
          "minResolution": 0,
          "maxResolution": 156543.03392804097,
          "source": new TileWMS({
            "url": "https://data.geopf.fr/wms-r/ows?",
            "projection": "EPSG:3857",
            "attributions": [],
            "crossOrigin": "anonymous",
            "params": {
              "LAYERS": "PROTECTEDAREAS.SIC",
              "FORMAT": "image/png",
              "VERSION": "1.3.0"
            }
          })
        }),
        new TileLayer ({
          //@ts-ignore
          "title": "Natura 2000 Oiseaux",
          "extent": [
            -20037508.342789244,
            -44927335.42709704,
            20037508.342789244,
            44927335.42709663
          ],
          "minResolution": 0,
          "maxResolution": 156543.03392804097,
          "source": new TileWMS({
            "url": "https://data.geopf.fr/wms-r/ows?",
            "projection": "EPSG:3857",
            "attributions": [],
            "crossOrigin": "anonymous",
            "params": {
              "LAYERS": "PROTECTEDAREAS.ZPS",
              "FORMAT": "image/png",
              "VERSION": "1.3.0"
            }
          })
        }),
        new TileLayer ({
          //@ts-ignore
          "title": "Prairies sensibles",
          "extent": [
            -20037508.342789244,
            -44927335.42709704,
            20037508.342789244,
            44927335.42709663
          ],
          "minResolution": 0,
          "maxResolution": 156543.03392804097,
          "source": new TileWMS({
            "url": "https://data.geopf.fr/wms-r/ows?",
            "projection": "EPSG:3857",
            "attributions": [],
            "crossOrigin": "anonymous",
            "params": {
              "LAYERS": "PRAIRIES.SENSIBLES.BCAE",
              "FORMAT": "image/png",
              "VERSION": "1.3.0"
            }
          })
        }),
        new TileLayer ({
          //@ts-ignore
          "title": "ZNIEFF2",
          "extent": [
            -20037508.342789244,
            -44927335.42709704,
            20037508.342789244,
            44927335.42709663
          ],
          "minResolution": 0,
          "maxResolution": 156543.03392804097,
          "source": new TileWMS({
            "url": "https://data.geopf.fr/wms-r/ows?",
            "projection": "EPSG:3857",
            "attributions": [],
            "crossOrigin": "anonymous",
            "params": {
              "LAYERS": "PROTECTEDAREAS.ZNIEFF2",
              "FORMAT": "image/png",
              "VERSION": "1.3.0"
            }
          })
        }),
        new TileLayer ({
          //@ts-ignore
          "title": "ZNIEFF1",
          "extent": [
            -20037508.342789244,
            -44927335.42709704,
            20037508.342789244,
            44927335.42709663
          ],
          "minResolution": 0,
          "maxResolution": 156543.03392804097,
          "source": new TileWMS({
            "url": "https://data.geopf.fr/wms-r/ows?",
            "projection": "EPSG:3857",
            "attributions": [],
            "crossOrigin": "anonymous",
            "params": {
              "LAYERS": "PROTECTEDAREAS.ZNIEFF1",
              "FORMAT": "image/png",
              "VERSION": "1.3.0"
            }
          })
        }),
        new TileLayer ({
          //@ts-ignore
          "title": "Monuments historiques",
          "extent": [
            -20037508.342789244,
            -44927335.42709704,
            20037508.342789244,
            44927335.42709663
          ],
          "minResolution": 0,
          "maxResolution": 156543.03392804097,
          "source": new TileWMS({
            "url": "https://data.geopf.fr/wms-v/ows?",
            "projection": "EPSG:3857",
            "attributions": [],
            "crossOrigin": "anonymous",
            "params": {
              "LAYERS": "monument_historique",
              "FORMAT": "image/png",
              "VERSION": "1.3.0"
            }
          })
        }),
        new VectorLayer({
          source: new Vector(),
          properties: { title: 'Dessin' }
        })
      ],
      target: elementId
    });

    this.map.addControl(new LayerSwitcher())

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
        if (layers[i].get('title') == 'Dessin') {
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
}

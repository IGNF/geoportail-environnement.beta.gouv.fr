import { EventEmitter, Injectable } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import LayerSwitcher from 'ol-ext/control/LayerSwitcher';
import { Fill, Stroke, Style } from 'ol/style';
import { Select } from 'ol/interaction';
import EditBar from 'ol-ext/control/EditBar.js';
import { MAP_DEFAULT_LAYER_GROUP } from '../models/map-layers-default.enum';
import VectorLayer from 'ol/layer/Vector';
import { Vector } from 'ol/source';

import { MAP_BIODIVERISTE_LAYER_GROUP, MAP_PATRIMOINE_LAYER_GROUP } from '../../shared-thematic/models/map-thematic-layers.enum';
import { THEMATIC_FICHE_LIST } from '../../shared-thematic/models/thematic-fiche-list';

@Injectable({
  providedIn: 'root'
})
export class MapContextService {

  map?: Map;

  mapLoaded: EventEmitter<any> = new EventEmitter<any>();

  private activeThematicLayers: any[] = [];

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
        MAP_DEFAULT_LAYER_GROUP,
        new VectorLayer({
          source: new Vector(),
          properties: { title: 'Ma Forêt' },
          zIndex: 1000
        })
      ],
      target: elementId
    });

    this.map.addControl(new LayerSwitcher());

    this.map.on('rendercomplete', (event) => this.mapLoaded.next(event));
  }

  addDrawingTools() {
    if (!this.getLayerDessin()) {
      return;
    }

    const style = new Style({
      fill: new Fill({
        color: 'rgba(73,73,232,0.4)',
      }),
      stroke: new Stroke({
        color: '#3399CC'
      })
    });


    this.getLayerDessin().setStyle(style);

    const selectStyle = new Style({
      fill: new Fill({
        color: 'rgba(255,40,48,0.4)',
      }),
      stroke: new Stroke({
        color: '#F44336',
        width: 4
      })
    });

    const select = new Select({
      layers: [this.getLayerDessin()],
      style: selectStyle
    });

    const editBar = new EditBar({
      interactions: {
        Select: select,
        Delete: true,
        Info: false,
        DrawPoint: false,
        DrawLine: false,
        DrawPolygon: true,
        //@ts-ignore
        DrawHole: true,
        DrawRegular: false,
        Transform: false,
        Split: false,
        Offset: false
      },
      source: this.getLayerDessin().getSource()
    });
    editBar.setProperties({ name: 'editBar' });
    this.map?.addControl(editBar);
  }

  removeDrawingTools() {
    let editBar: any;
    this.map?.getControls().forEach((control) => {
      if (control.get('name') == 'editBar') {
        editBar = control;
      }
    })

    this.map?.removeControl(editBar);
  };

  updateLayers() {
    const layers: any = this.map?.getLayers().getArray();
    //utiliser 'layers.forEach(...)' ne fonctionne pas
    for (let i = layers.length - 1; i > -1; i--) {
      const group = layers[i].get('group') || 'base-layer';
      if (group !== 'base-layer') {
        this.map?.removeLayer(layers[i]);
      }
    }

    [MAP_BIODIVERISTE_LAYER_GROUP, MAP_PATRIMOINE_LAYER_GROUP].forEach((newlayer) => {
      const group = newlayer.get('group') || 'no-group';
      for (let i = 0; i < THEMATIC_FICHE_LIST.length; i++) {
        if (group === THEMATIC_FICHE_LIST[i].name && THEMATIC_FICHE_LIST[i].active) {
          this.map?.addLayer(newlayer);
          continue;
        }
      }
    });
  }

  updateLayersVisibility(event: any) {
    const layersGroup: any = this.map?.getLayers().getArray();
    layersGroup?.forEach((layerGroup: any) => {
      const group = layerGroup.get('group') || 'base-layer';
      if (group === 'base-layer' || group === event || event === 'synthese') {
        layerGroup.setVisible(true);
        if (group === event || (event === 'synthese' && group != 'base-layer')) {
          let visible: boolean;
          layerGroup.getLayers().forEach((layer: any) => {
            visible = false;
            for (let i = 0; i < this.activeThematicLayers.length; i++) {
              if (layer.get('technicalName').match(new RegExp(this.activeThematicLayers[i].name + '$'))) {
                visible = true;
                break;
              }
            }
            layer.setVisible(visible);
          })
        }
      } else {
        layerGroup.setVisible(false);
      }
    });
  }

  setView(coordinates: any[], zoom: number) {
    this.map?.getView().setCenter(coordinates);
    this.map?.getView().setZoom(zoom);
  }

  getLayerDessin(): any {
    const layers = this.map?.getAllLayers();
    const dessin = layers?.find((layer) => layer.get('title') === 'Ma Forêt');
    return dessin;
  }

  /**
   * liste des couches thematiques pour lesquels on a une réponse avec notre zone forestiere
   * @returns 
   */
  getActiveThematicLayers() {
    return this.activeThematicLayers;
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

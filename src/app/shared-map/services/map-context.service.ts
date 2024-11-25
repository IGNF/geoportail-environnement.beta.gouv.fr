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

import { Feature } from 'ol';
import Geometry  from 'ol/geom/Geometry';
import Polygon from 'ol/geom/Polygon';
import MultiPolygon from 'ol/geom/MultiPolygon';
import { boundingExtent, extend } from 'ol/extent';
import { getCenter } from 'ol/extent';

import { MAP_BIODIVERISTE_LAYER_GROUP, MAP_MONUMENTS_LAYER_GROUP } from '../../shared-thematic/models/map-thematic-layers.enum';
import { THEMATIC_FICHE_LIST } from '../../shared-thematic/models/thematic-fiche-list';

@Injectable({
  providedIn: 'root'
})
export class MapContextService {
  private map?: Map; // Instance unique de la carte
  mapLoaded: EventEmitter<any> = new EventEmitter<any>();
  private activeThematicLayers: any[] = [];
  private clones: Map[] = []; // Liste des clones de cartes

  constructor() { }

  // Obtenir la carte
  getMap(): Map | undefined {
    return this.map;
  }

  // Vérifier si une carte est déjà chargée
  isMapLoaded(): boolean {
    return !!this.map;
  }

  // Générer dynamiquement un ID unique pour un clone
  generateCloneId(): string {
    return `mapClone-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Créer ou réaffecter la carte
  createMap(elementId: string): void {
    if (!this.map) {
      // Initialiser une nouvelle carte si elle n'existe pas
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
            zIndex: 1000,
          }),
        ],
        target: elementId,
      });

      this.map.addControl(new LayerSwitcher());

      this.map.on('rendercomplete', (event) => this.mapLoaded.emit(event));
    } else {
      // Réutiliser la carte existante
      this.map.setTarget(elementId);
    }
  }

  // Détruire la carte (réinitialiser sa cible)
  destroyMap(): void {
    if (this.map) {
      this.map.setTarget(undefined); // Libère la carte de sa cible DOM
    }
  }

  // Ajouter une carte situation, clone de la map origine
  createSituationMap(idClone: string, layersToLoad: any[]): Map {
    const clone = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: layersToLoad, // Couches spécifiques à charger dans ce clone
      target: idClone,
    });

    clone.addControl(new LayerSwitcher());

    this.clones.push(clone); // Ajouter le clone à la liste
    return clone;
  }

  // Obtenir la liste des clones
  getClones(): Map[] {
    return this.clones;
  }

  // Détruire un clone spécifique
  destroyClone(idClone: string): void {
    const index = this.clones.findIndex((clone) => clone.getTarget() === idClone);
    if (index > -1) {
      const clone = this.clones[index];
      clone.setTarget(undefined); // Libère le DOM lié
      this.clones.splice(index, 1); // Supprime de la liste
    }
  }
  // Détruire toutes les cartes clones
  destroyAllClones(): void {
    this.clones.forEach((clone) => {
      clone.setTarget(undefined); // Libère le DOM lié
    });
    this.clones = []; // Réinitialise la liste des clones
  }

  setTarget(elementId: string) {
    if (this.map) {
      this.map.setTarget(elementId);
    }
  }
  // Outils de dessin, couches, et autres fonctions non modifiées
  addDrawingTools() {
    if (!this.getLayerDessin()) {
      return;
    }

    const style = new Style({
      fill: new Fill({
        color: 'rgba(73,73,232,0.4)',
      }),
      stroke: new Stroke({
        color: '#3399CC',
      }),
    });

    this.getLayerDessin().setStyle(style);

    const selectStyle = new Style({
      fill: new Fill({
        color: 'rgba(255,40,48,0.4)',
      }),
      stroke: new Stroke({
        color: '#F44336',
        width: 4,
      }),
    });

    const select = new Select({
      layers: [this.getLayerDessin()],
      style: selectStyle,
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
        Offset: false,
      },
      source: this.getLayerDessin().getSource(),
    });
    editBar.setProperties({ name: 'editBar' });
    this.map?.addControl(editBar);
  }

  removeDrawingTools() {
    let editBar: any;
    this.map?.getControls().forEach((control) => {
      if (control.get('name') === 'editBar') {
        editBar = control;
      }
    });

    this.map?.removeControl(editBar);
  }

  updateLayers() {
    const layers: any = this.map?.getLayers().getArray();
    //utiliser 'layers.forEach(...)' ne fonctionne pas
    for (let i = layers.length - 1; i > -1; i--) {
      const group = layers[i].get('group') || 'base-layer';
      if (group !== 'base-layer') {
        this.map?.removeLayer(layers[i]);
      }
    }

    [MAP_BIODIVERISTE_LAYER_GROUP, MAP_MONUMENTS_LAYER_GROUP].forEach((newlayer) => {
      const group = newlayer.get('group') || 'no-group';
      for (let i = 0; i < THEMATIC_FICHE_LIST.length; i++) {
        if (group === THEMATIC_FICHE_LIST[i].name && THEMATIC_FICHE_LIST[i].active) {
          this.map?.addLayer(newlayer);
          continue;
        }
      }
    });
  }
  
  // Méthode mise à jour des couches pour un clone ou la carte principale
  updateLayersForMap(map: Map, layersToLoad: any[]): void {
    const currentLayers = map.getLayers();
    currentLayers.clear(); // Supprime toutes les couches existantes
    layersToLoad.forEach((layer) => {
      map.addLayer(layer); // Ajoute les nouvelles couches
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
  
  centerOnDessin() {
    const dessinLayer = this.getLayerDessin();
    if (!dessinLayer) {
      console.warn('No dessin layer found.');
      return;
    }

    const source = dessinLayer.getSource();
    const features = source.getFeatures();

    if (features.length === 0) {
      console.warn('No features in dessin layer.');
      return;
    }

    // Initialiser l'extension globale
    let globalExtent: number[] | null = null;

    // Calculer l'extension globale de toutes les géométries
    features.forEach((feature: Feature<Geometry>) => {
      const geometry = feature.getGeometry();
      if (geometry) {
        const featureExtent = geometry.getExtent(); // Étendue de la géométrie actuelle
        if (globalExtent === null) {
          globalExtent = featureExtent.slice(); // Initialiser l'extension
        } else {
          extend(globalExtent, featureExtent); // Étendre l'extension globale
        }
      }
    });

    if (globalExtent) {
      // Centrer la carte et ajuster le zoom pour voir toutes les entités
      this.map?.getView().fit(globalExtent, {
        size: this.map?.getSize(), // Taille de la carte
        padding: [50, 50, 50, 50], // Espacement autour des entités (en pixels)
        duration: 500, // Durée de l'animation (en ms)
        maxZoom: 20, // Facultatif : limite maximale du zoom
      });
    } else {
      console.warn('No valid global extent found.');
    }
  }

}

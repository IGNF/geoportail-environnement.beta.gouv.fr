import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { BreadcrumbTransformerService } from '../../../shared-design-dsfr/transformers/breadcrumb-transformer.service';
import { THEMATIC_LIST } from '../../../shared-thematic/models/thematic-list.enum';
import { Foret } from '../../../shared/models/foret.model';
import { LocalStorageForetService } from '../../../shared/services/local-storage-foret.service';
import GeoJSON from 'ol/format/GeoJSON';

import shp from 'shpjs';
import JSZip from 'jszip';
import proj4 from 'proj4';
import { transform, get as getProjection, ProjectionLike } from 'ol/proj';

// Définition d'alias pour EPSG:3857
proj4.defs("EPSG:3857", "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs");


import { HttpClient } from '@angular/common/http';


@Component({
  standalone: false,
  selector: 'app-requete-new',
  templateUrl: './requete-new.component.html',
  styleUrl: './requete-new.component.css'
})
export class RequeteNewComponent implements OnInit, AfterViewInit {

  foret?: Foret;

  step: number = 0;

  breadcrumb?: any;

  fileFormatError: boolean = false;

  constructor(
    private breadcrumbTransformerService: BreadcrumbTransformerService,
    private localStorageForetService: LocalStorageForetService,
    private mapContextService: MapContextService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.data.pipe(
      map((response: any) => {
        if (response && response.data) {
          this.foret = response.data;
        }
        // if (response && !response.data) {
        //   this.router.navigate(['/', '404']);
        // }
        this.loadPageComponent();
      })
    ).subscribe();
  }

  ngAfterViewInit(): void {
    this.loadWithForet();
  }

  saveForet() {
    const geoJson = this.mapContextService.maForetToGeoJson();
  }

  confirmSelect() {
  }

  nextStep() {
    this.step++;
    if (this.step === 1) {
      if (!this.mapContextService.getLayerDessin().getSource().getFeatures().length) {
        alert("Veuillez préciser le périmètre de votre forêt à l'aide des outils de dessins disponible sur la carte.");
        this.step--;
        return;
      }
      this.mapContextService.removeDrawingTools();
      for (let i = 0; i < THEMATIC_LIST.length; i++) {
        THEMATIC_LIST[i].active = true;
      }
      this.mapContextService.updateLayers();
    }

    if (this.step === 2) {
      this.localSaveForet();
    }
  }


  previousStep() {
    this.step--;
    switch (this.step) {
      case 0:
        this.mapContextService.resetDessin();
        this.mapContextService.addDrawingTools();
        this.mapContextService.setIsMerged(false);
        for (let i = this.mapContextService.getActiveThematicLayers().length; i >= 0; i--) {
          this.mapContextService.getActiveThematicLayers().pop();
        }
        for (let i = 0; i < THEMATIC_LIST.length; i++) {
          THEMATIC_LIST[i].active = false;
        }
        this.mapContextService.updateLayers();
    }
  }


  updateThematics() {
    this.mapContextService.updateLayers();
  }


  private localSaveForet() {
    if (this.foret) {
      this.localStorageForetService.setForet(this.foret);
    }
  }


  private loadWithForet() {
    if (!this.foret) {
      return;
    }
    if (this.foret.geometry) {
      this.mapContextService.maForetFromGeoJson(this.foret.geometry);
    }
    this.step = 0;
    this.nextStep();
    this.mapContextService.centerOnDessin();
  }


  private loadPageComponent() {
    const label = this.foret ? `Requête sur ${this.foret.name}` : 'Nouvelle requête';
    this.breadcrumb = this.breadcrumbTransformerService.fromOptions({
      label: label, route: ''
    });
  }

  /**
   * Gestion des fichiers importés (GeoJSON, ZIP, Shapefile)
   */
  async uploadContour(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const files = Array.from(input.files);
    const geoJsons: any[] = [];
    const shpFiles: { [key: string]: Blob } = {}; // Stocker les fichiers Shapefile

    for (const file of files) {
      try {
        const fileExtension = file.name.split('.').pop()?.toLowerCase();

        if (fileExtension === 'geojson') {
          let geoJson = await this.readFileAsText(file);
          geoJson = this.reprojectGeoJson(JSON.parse(geoJson), 'EPSG:3857');
          geoJsons.push(geoJson);

        } else if (fileExtension === 'zip') {
          const extractedGeoJsons = await this.handleZipFile(file);
          const reprojectedGeoJsons = extractedGeoJsons.map(gj => this.reprojectGeoJson(gj, 'EPSG:3857'));
          geoJsons.push(...reprojectedGeoJsons);

        } else if (['shp', 'dbf', 'shx', 'prj'].includes(fileExtension!)) {
          shpFiles[file.name] = file;
        }

      } catch (error) {
        //console.error(`Erreur lors du traitement du fichier ${file.name} :`, error);
        this.fileFormatError = true;
      }
    }

    // Si on a des fichiers Shapefile valides (shp, dbf, shx, prj), on les traite
    if (Object.keys(shpFiles).some(name => name.endsWith('.shp'))) {
      const shapefileGeoJsonArray = await this.handleShpFiles(shpFiles);
      const reproShapefileGeoJsonArray = shapefileGeoJsonArray.map(gj => this.reprojectGeoJson(gj, 'EPSG:3857'));
      geoJsons.push(...reproShapefileGeoJsonArray);
    }


    if (geoJsons.length > 0) {
      this.fileFormatError = false;
      const mergedGeoJson = this.mergeGeoJsons(geoJsons);
      this.mapContextService.maForetFromGeoJson(mergedGeoJson);
      this.mapContextService.centerOnDessin();
    } else {
      this.fileFormatError = true;
    }
  }


  /**
   * Gestion des fichiers ZIP contenant des GeoJSON et/ou des Shapefiles.
   */
  private async handleZipFile(file: File): Promise<any[]> {
    try {
      const zip = await JSZip.loadAsync(file);
      const geoJsons: any[] = [];
      const shpFiles: { [key: string]: Blob } = {};

      for (const fileName of Object.keys(zip.files)) {
        const file = zip.files[fileName];
        if (file.dir) continue;

        const fileExtension = fileName.split('.').pop()?.toLowerCase();

        if (fileExtension === 'geojson') {
          const geoJsonContent = await file.async('string');
          geoJsons.push(JSON.parse(geoJsonContent));

        } else if (['shp', 'dbf', 'shx', 'prj'].includes(fileExtension!)) {
          shpFiles[fileName] = await file.async('blob');
        }
      }

      // Si on a des fichiers Shapefile valides, on les convertit
      if (Object.keys(shpFiles).some(name => name.endsWith('.shp'))) {
        const shapefileGeoJson = await this.handleShpFiles(shpFiles);
        geoJsons.push(...shapefileGeoJson);
      }

      return geoJsons;

    } catch (error) {
      //console.error("Erreur lors du traitement du fichier ZIP :", error);
      return [];
    }
  }

  /**
   * Convertit un ensemble de fichiers Shapefile en GeoJSON.
   */
  private async handleShpFiles(shpFiles: { [key: string]: Blob }): Promise<any[]> {
    try {
      const zip = new JSZip();
      for (const [fileName, blob] of Object.entries(shpFiles)) {
        zip.file(fileName, blob);
      }

      const zipArrayBuffer = await zip.generateAsync({ type: 'arraybuffer' });
      const shapefileGeoJson = await shp(zipArrayBuffer);

      return Array.isArray(shapefileGeoJson) ? shapefileGeoJson : [shapefileGeoJson];

    } catch (error) {
      //console.error("Erreur lors de la conversion du Shapefile :", error);
      return [];
    }
  }

  /**
   * Lecture d'un fichier texte (GeoJSON).
   */
  private readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  /**
   * Fusionne plusieurs fichiers GeoJSON en un seul FeatureCollection.
   */
  private mergeGeoJsons(geoJsons: any[]): any {
    return {
      type: 'FeatureCollection',
      features: geoJsons.flatMap((geoJson) => geoJson.features || []),
    };
  }

  /**
   * Reprojette un GeoJSON d'une projection inconnue vers la projection cible (par défaut : EPSG:3857)
   * @param geoJson - Le GeoJSON à reprojeter
   * @param targetProj - La projection cible (ex: 'EPSG:3857')
   * @returns GeoJSON reprojeté
   */
  private reprojectGeoJson(geoJson: any, targetProj: string = 'EPSG:3857'): any {
    if (!geoJson || geoJson.type !== 'FeatureCollection') return geoJson;

    const sourceProj = this.detectGeoJsonProjection(geoJson) || 'EPSG:4326'; // Si non trouvé, on suppose WGS84

    if (sourceProj === targetProj) {
      return geoJson;
    }
    
    return {
      ...geoJson,
      features: geoJson.features.map((feature: GeoJSON.Feature) => {
        // Vérifie si `feature.geometry` est un objet avec `coordinates`
        if (feature.geometry && 'coordinates' in feature.geometry) {
          return {
            ...feature,
            geometry: {
              ...feature.geometry,
              coordinates: this.reprojectCoordinates(
                feature.geometry.coordinates, 
                feature.geometry.type, 
                sourceProj, 
                targetProj
              )
            }
          };
        } else {
          // Si c'est un `GeometryCollection`, on ne modifie pas
          return feature;
        }
      })
    };
  }



  /**
   * Détecte la projection d'un GeoJSON en se basant sur les métadonnées
   * @param geoJson - L'objet GeoJSON
   * @returns La projection détectée (ex: 'EPSG:4326') ou undefined si inconnue
   */
  private detectGeoJsonProjection(geoJson: any): string | undefined {
    // Cas où le CRS est explicitement défini dans le GeoJSON
    if (geoJson.crs && geoJson.crs.properties && geoJson.crs.properties.name) {
      return geoJson.crs.properties.name;
    }

    // Si le fichier provient d'un Shapefile, il peut y avoir un fichier PRJ
    if (geoJson.proj4) {
      const epsgCode = this.getEpsgFromProj4(geoJson.proj4);
      return epsgCode ? `EPSG:${epsgCode}` : undefined;
    }

    return undefined; // On ne peut pas déterminer la projection
  }

  /**
   * Transforme les coordonnées d'un GeoJSON (Point, LineString, Polygon, MultiPolygon...)
   */
  private reprojectCoordinates(coordinates: any, type: string, sourceProj: string, targetProj: string): any {
    if (!getProjection(sourceProj) || !getProjection(targetProj)) {
      //console.warn(`Projection inconnue : ${sourceProj} ou ${targetProj}. Aucune transformation appliquée.`);
      return coordinates;
    }

    switch (type) {
      case 'Point':
        return transform(coordinates, sourceProj, targetProj);
      case 'LineString':
      case 'MultiPoint':
        return coordinates.map((coord: [number, number]) => transform(coord, sourceProj, targetProj));
      case 'Polygon':
      case 'MultiLineString':
        return coordinates.map((ring: Array<[number, number]>) => ring.map((coord: [number, number]) => transform(coord, sourceProj, targetProj)));
      case 'MultiPolygon':
        return coordinates.map((polygon: Array<Array<[number, number]>>) => polygon.map((ring: Array<[number, number]>) => ring.map((coord: [number, number]) => transform(coord, sourceProj, targetProj))));

      default:
        return coordinates;
    }
  }

  /**
   * Extrait le code EPSG à partir d'une définition Proj4
   * @param proj4String - Chaîne de caractères Proj4
   * @returns Code EPSG (ex: 4326) ou undefined si non trouvé
   */
  private getEpsgFromProj4(proj4String: string): number | undefined {
    const match = proj4String.match(/EPSG:(\d+)/);
    return match ? parseInt(match[1], 10) : undefined;
  }
}

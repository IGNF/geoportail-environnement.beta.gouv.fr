import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';

import shp from 'shpjs';
import JSZip from 'jszip';



import { RequeteNewComponent } from './requete-new.component';
import { RequeteStepperComponent } from '../../components/requete-stepper/requete-stepper.component';
import { RequeteStepperControlComponent } from '../../components/requete-stepper-control/requete-stepper-control.component';
import { MapViewerComponent } from '../../../shared-map/components/map-viewer/map-viewer.component';
import { ThematicTabsComponent } from '../../../shared-thematic/components/thematic-tabs/thematic-tabs.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { GeolocaliseFormComponent } from '../../../shared-map/components/geolocalise-form/geolocalise-form.component';

describe('RequeteNewComponent', () => {
  let component: RequeteNewComponent;
  let fixture: ComponentFixture<RequeteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RequeteNewComponent,
        RequeteStepperComponent,
        RequeteStepperControlComponent,
        GeolocaliseFormComponent,
        MapViewerComponent,
        ThematicTabsComponent
      ],
      imports: [
        SharedDesignDsfrModule
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RequeteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getEpsgFromProj4', () => {
    it('devrait extraire le code EPSG à partir d\'une chaîne Proj4 valide', () => {
      const proj4String = '+proj=longlat +datum=WGS84 +no_defs +type=crs EPSG:4326';
      const result = (component as any).getEpsgFromProj4(proj4String);
      expect(result).toBe(4326);
    });

    it('devrait retourner undefined si la chaîne Proj4 ne contient pas de code EPSG', () => {
      const proj4String = '+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs';
      const result = (component as any).getEpsgFromProj4(proj4String);
      expect(result).toBeUndefined();
    });

    it('devrait retourner undefined pour une chaîne mal formatée', () => {
      const proj4String = 'EPSG-4326';
      const result = (component as any).getEpsgFromProj4(proj4String);
      expect(result).toBeUndefined();
    });
  });

  describe('mergeGeoJsons', () => {
    it('devrait fusionner plusieurs fichiers GeoJSON en un seul FeatureCollection', () => {
      const geoJson1 = {
        type: 'FeatureCollection',
        features: [{ type: 'Feature', properties: { id: 1 }, geometry: null }],
      };

      const geoJson2 = {
        type: 'FeatureCollection',
        features: [{ type: 'Feature', properties: { id: 2 }, geometry: null }],
      };

      const result = (component as any).mergeGeoJsons([geoJson1, geoJson2]);

      expect(result.type).toBe('FeatureCollection');
      expect(result.features.length).toBe(2);
      expect(result.features[0].properties.id).toBe(1);
      expect(result.features[1].properties.id).toBe(2);
    });

    it('devrait retourner un FeatureCollection vide si aucun GeoJSON n\'est fourni', () => {
      const result = (component as any).mergeGeoJsons([]);
      
      expect(result.type).toBe('FeatureCollection');
      expect(result.features.length).toBe(0);
    });

    it('devrait ignorer les fichiers GeoJSON sans features', () => {
      const geoJson1 = {
        type: 'FeatureCollection',
        features: [{ type: 'Feature', properties: { id: 1 }, geometry: null }],
      };

      const geoJson2 = {
        type: 'FeatureCollection',
        features: [], // Aucune feature
      };

      const result = (component as any).mergeGeoJsons([geoJson1, geoJson2]);

      expect(result.type).toBe('FeatureCollection');
      expect(result.features.length).toBe(1);
      expect(result.features[0].properties.id).toBe(1);
    });
  });

  describe('reprojectGeoJson', () => {
    beforeEach(() => {
      jasmine.getEnv().allowRespy(true); // Autorise le re-spy si nécessaire
      
      // Mock `reprojectCoordinates` pour éviter de tester la vraie reprojection
      spyOn(component as any, 'reprojectCoordinates').and.callFake((coords: any) => coords);

      // Mock `detectGeoJsonProjection` UNE SEULE FOIS ici
      spyOn(component as any, 'detectGeoJsonProjection').and.returnValue('EPSG:4326');
    });

    afterEach(() => {
      // Réinitialise les spies après chaque test
      (component as any).detectGeoJsonProjection.and.restore?.();
      (component as any).reprojectCoordinates.and.restore?.();
    });

    it('devrait reprojeter un GeoJSON vers la projection cible', () => {
      const geoJson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { id: 1 },
            geometry: { type: 'Point', coordinates: [2.2945, 48.8584] }
          }
        ]
      };

      const result = (component as any).reprojectGeoJson(geoJson, 'EPSG:3857');

      expect(result.type).toBe('FeatureCollection');
      expect(result.features.length).toBe(1);
      expect(result.features[0].geometry.coordinates).toEqual([2.2945, 48.8584]); // Vérifie que la fonction mockée est bien appelée
      expect(component['reprojectCoordinates']).toHaveBeenCalledWith(
        [2.2945, 48.8584], 'Point', 'EPSG:4326', 'EPSG:3857'
      );
    });

    it('devrait retourner le GeoJSON inchangé si null ou invalide', () => {
      expect((component as any).reprojectGeoJson(null)).toBeNull();
      expect((component as any).reprojectGeoJson({ type: 'Invalid' })).toEqual({ type: 'Invalid' });
    });

    it('devrait ne pas modifier les features sans geometry', () => {
      const geoJson = {
        type: 'FeatureCollection',
        features: [
          { type: 'Feature', properties: { id: 1 }, geometry: null }
        ]
      };

      const result = (component as any).reprojectGeoJson(geoJson, 'EPSG:3857');

      expect(result.features[0].geometry).toBeNull();
    });

    it('devrait ne pas modifier les coordonnées si la projection source et cible sont identiques', () => {
      // Change la valeur mockée de `detectGeoJsonProjection`
      (component as any).detectGeoJsonProjection.and.returnValue('EPSG:3857');

      const geoJson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { id: 1 },
            geometry: { type: 'Point', coordinates: [1000, 2000] }
          }
        ]
      };

      const result = (component as any).reprojectGeoJson(geoJson, 'EPSG:3857');

      expect(result.features[0].geometry.coordinates).toEqual([1000, 2000]);
      expect(component['reprojectCoordinates']).not.toHaveBeenCalled();
    });
  });

  describe('detectGeoJsonProjection', () => {
    beforeEach(() => {
      // Mock de la fonction getEpsgFromProj4 pour éviter d'utiliser une vraie conversion
      spyOn(component as any, 'getEpsgFromProj4').and.callFake((proj4String: string) => {
        if (proj4String.includes('EPSG:4326')) return 4326;
        return undefined;
      });
    });

    it('devrait retourner la projection définie dans crs', () => {
      const geoJson = {
        type: 'FeatureCollection',
        crs: { properties: { name: 'EPSG:3857' } }
      };

      const result = (component as any).detectGeoJsonProjection(geoJson);
      expect(result).toBe('EPSG:3857');
    });

    it('devrait retourner la projection extraite de proj4', () => {
      const geoJson = {
        type: 'FeatureCollection',
        proj4: '+proj=longlat +datum=WGS84 +no_defs EPSG:4326'
      };

      const result = (component as any).detectGeoJsonProjection(geoJson);
      expect(result).toBe('EPSG:4326');
    });

    it('devrait retourner undefined si proj4 ne contient pas de code EPSG valide', () => {
      const geoJson = {
        type: 'FeatureCollection',
        proj4: '+proj=merc +datum=WGS84 +no_defs' // Pas de code EPSG
      };

      const result = (component as any).detectGeoJsonProjection(geoJson);
      expect(result).toBeUndefined();
    });

    it('devrait retourner undefined si aucun crs ni proj4 n’est défini', () => {
      const geoJson = {
        type: 'FeatureCollection'
      };

      const result = (component as any).detectGeoJsonProjection(geoJson);
      expect(result).toBeUndefined();
    });
  });

  
  describe('handleShpFiles', () => {

    it('devrait retourner un tableau vide en cas d\'erreur', async () => {
      // Simule un fichier Shapefile
      const fakeBlob = new Blob(['dummy content'], { type: 'application/octet-stream' });
      const shpFiles = { 'test.shp': fakeBlob, 'test.dbf': fakeBlob, 'test.shx': fakeBlob, 'test.prj': fakeBlob };

      // Mock JSZip qui lève une erreur
      spyOn(JSZip.prototype, 'generateAsync').and.returnValue(Promise.reject(new Error('Erreur ZIP')));

      // Exécution de la méthode
      const result = await (component as any).handleShpFiles(shpFiles);

      // Vérifications
      expect(JSZip.prototype.generateAsync).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });
  
  describe('handleZipFile', () => {

    it('devrait charger un fichier ZIP et extraire les fichiers GeoJSON', async () => {
      const fakeGeoJson = { type: 'FeatureCollection', features: [] };
      const fakeGeoJsonContent = JSON.stringify(fakeGeoJson);

      // Déclaration correcte du fichier GeoJSON
      const geoJsonFile = {
        name: 'file.geojson',
        async: jasmine.createSpy().and.returnValue(Promise.resolve(fakeGeoJsonContent))
      };

      // Initialisation de zip après avoir défini loadAsync
      const zip: any = {
        files: {
          'file.geojson': geoJsonFile
        },
        loadAsync: jasmine.createSpy().and.callFake(function() {
          return Promise.resolve(zip);
        })
      };

      // Utilisation de JSZip.loadAsync
      spyOn(JSZip, 'loadAsync').and.callFake(zip.loadAsync);

      const result = await (component as any).handleZipFile(new File([], 'test.zip'));

      expect(result).toEqual([fakeGeoJson]);
      expect(zip.loadAsync).toHaveBeenCalled();
      expect(geoJsonFile.async).toHaveBeenCalledWith('string');
    });

    it('devrait extraire les fichiers Shapefile et les convertir en GeoJSON', async () => {
      const shpFile = {
        name: 'file.shp',
        async: jasmine.createSpy().and.returnValue(Promise.resolve(new Blob([])))
      };
      const dbfFile = {
        name: 'file.dbf',
        async: jasmine.createSpy().and.returnValue(Promise.resolve(new Blob([])))
      };
      const shxFile = {
        name: 'file.shx',
        async: jasmine.createSpy().and.returnValue(Promise.resolve(new Blob([])))
      };
      const prjFile = {
        name: 'file.prj',
        async: jasmine.createSpy().and.returnValue(Promise.resolve(new Blob([])))
      };

      // Initialisation de zip après avoir défini loadAsync
      const zip: any = {
        files: {
          'file.shp': shpFile,
          'file.dbf': dbfFile,
          'file.shx': shxFile,
          'file.prj': prjFile,
        },
        loadAsync: jasmine.createSpy().and.callFake(function() {
          return Promise.resolve(zip);
        })
      };

      const shpFiles = { 'file.shp': new Blob([]), 'file.dbf': new Blob([]), 'file.shx': new Blob([]), 'file.prj': new Blob([]) };
      const mockGeoJson = [{ type: 'FeatureCollection', features: [] }];
      
      spyOn(JSZip, 'loadAsync').and.callFake(zip.loadAsync);
      spyOn(component as any, 'handleShpFiles').and.returnValue(Promise.resolve(mockGeoJson));

      const result = await (component as any).handleZipFile(new File([], 'test.zip'));

      expect(result).toEqual([...mockGeoJson]);
      expect((component as any).handleShpFiles).toHaveBeenCalledWith(shpFiles);
    });

    it('devrait retourner un tableau vide en cas d\'erreur', async () => {
      spyOn(JSZip, 'loadAsync').and.returnValue(Promise.reject('Erreur de chargement'));

      const result = await (component as any).handleZipFile(new File([], 'test.zip'));

      expect(result).toEqual([]);
    });

    it('ne devrait pas tenter de convertir si aucun fichier Shapefile n\'est présent', async () => {
      const geoJsonFile = {
        name: 'file.geojson',
        async: jasmine.createSpy().and.returnValue(Promise.resolve('{"type": "FeatureCollection", "features": []}'))
      };

      // Initialisation de zip après avoir défini loadAsync
      const zip: any = {
        files: {
          'file.geojson': geoJsonFile
        },
        loadAsync: jasmine.createSpy().and.callFake(function() {
          return Promise.resolve(zip);
        })
      };

      spyOn(JSZip, 'loadAsync').and.callFake(zip.loadAsync);
      spyOn(component as any, 'handleShpFiles');

      const result = await (component as any).handleZipFile(new File([], 'test.zip'));

      expect(result).toEqual([JSON.parse('{"type": "FeatureCollection", "features": []}')]);
      expect((component as any).handleShpFiles).not.toHaveBeenCalled();
    });
  });

  describe('uploadContour', () => {

    it('devrait retourner une erreur si aucun fichier n\'est valide', async () => {
      const invalidFile = new File([], 'invalid.txt');
      const event = { target: { files: [invalidFile] } } as unknown as Event;

      await component.uploadContour(event);

      expect(component.fileFormatError).toBe(true);
    });

    it('devrait gérer une erreur lors de la lecture d\'un fichier', async () => {
      const geoJsonFile = new File([], 'test.geojson');
      spyOn(component as any, 'readFileAsText').and.returnValue(Promise.reject('Erreur lors de la lecture'));

      const event = { target: { files: [geoJsonFile] } } as unknown as Event;

      await component.uploadContour(event);

      expect(component.fileFormatError).toBe(true);
    });

    it('devrait traiter un fichier GeoJSON', async () => {
      const geoJsonFile = new File([JSON.stringify({ type: 'FeatureCollection', features: [] })], 'test.geojson');
      const event = { target: { files: [geoJsonFile] } } as unknown as Event;

      spyOn(component as any, 'readFileAsText').and.returnValue(Promise.resolve('{"type": "FeatureCollection", "features": []}'));
      spyOn(component as any, 'reprojectGeoJson').and.callFake((geoJson: any, projection: any) => geoJson); // Mock de la fonction de reprojection
      spyOn((component as any).mapContextService, 'maForetFromGeoJson');
      spyOn((component as any).mapContextService, 'centerOnDessin');

      await component.uploadContour(event);

      expect((component as any).readFileAsText).toHaveBeenCalledWith(geoJsonFile);
      expect((component as any).reprojectGeoJson).toHaveBeenCalled();
      expect((component as any).mapContextService.maForetFromGeoJson).toHaveBeenCalled();
      expect((component as any).mapContextService.centerOnDessin).toHaveBeenCalled();
      expect(component.fileFormatError).toBe(false);
    });

    it('devrait traiter un fichier ZIP contenant un fichier GeoJSON', async () => {
      // Créer un fichier GeoJSON simulé
      const geoJsonContent = '{"type": "FeatureCollection", "features": []}';
      const geoJsonBlob = new Blob([geoJsonContent], { type: 'application/json' });
      const geoJsonFile = new File([geoJsonBlob], 'file.geojson');
      
      // Simuler le fichier ZIP contenant ce fichier GeoJSON
      const zipFile = new File([], 'test.zip');
            // Initialisation de zip après avoir défini loadAsync
      const zip: any = {
        files: {
          'file.geojson': geoJsonFile
        },
        loadAsync: jasmine.createSpy().and.callFake(function() {
          return Promise.resolve(zip);
        })
      };
      
      // Créer un événement
      const event = { target: { files: [zipFile] } } as unknown as Event;
      
      // Espionner les méthodes
      spyOn(component as any, 'handleZipFile').and.returnValue(Promise.resolve([JSON.parse(geoJsonContent)]));
      spyOn(component as any, 'reprojectGeoJson').and.callFake((geoJson: any, projection: any) => geoJson); // Mock de la fonction de reprojection
      spyOn((component as any).mapContextService, 'maForetFromGeoJson');
      spyOn((component as any).mapContextService, 'centerOnDessin');
      
      // Appeler la méthode
      await component.uploadContour(event);
      
      // Vérifier que la méthode handleZipFile a été appelée avec le fichier ZIP
      expect((component as any).handleZipFile).toHaveBeenCalledWith(zipFile);
      
      // Vérifier que les méthodes ont été appelées
      expect((component as any).reprojectGeoJson).toHaveBeenCalled();
      expect((component as any).mapContextService.maForetFromGeoJson).toHaveBeenCalled();
      expect((component as any).mapContextService.centerOnDessin).toHaveBeenCalled();
      
      // Vérifier l'absence d'erreur de format de fichier
      expect(component.fileFormatError).toBe(false);
    });


  });


});

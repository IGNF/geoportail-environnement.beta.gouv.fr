import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';

import * as proj from 'ol/proj';

import { Coordinate } from 'ol/coordinate';

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

  // describe('reprojectCoordinates', () => {
  //   beforeEach(() => {
  //     // Mock `transform`
  //     spyOn(proj, 'transform').and.callFake((coords: Coordinate, _src: string, _tgt: string) => 
  //       [coords[0] + 1, coords[1] + 1, coords[2] ? coords[2] + 1 : undefined].filter(n => n !== undefined)
  //     );

  //     // Mock `get`
  //     spyOn(proj, 'get').and.callFake((projection: string | undefined) => 
  //       projection && projection.startsWith('EPSG:') ? {} : null
  //     );
  //   });

  //   it('devrait retourner les coordonnées inchangées si la projection source ou cible est inconnue', () => {
  //     (proj.get as jasmine.Spy).and.callFake(() => null); // Simule une projection inconnue

  //     const coords: Coordinate = [2, 48];
  //     const result = (component as any).reprojectCoordinates(coords, 'Point', 'EPSG:9999', 'EPSG:3857');
  //     expect(result).toEqual(coords);
  //   });

  //   it('devrait transformer un Point', () => {
  //     const coords: Coordinate = [2, 48];
  //     const result = (component as any).reprojectCoordinates(coords, 'Point', 'EPSG:4326', 'EPSG:3857');
  //     expect(result).toEqual([3, 49]); // Simulation (x+1, y+1)
  //     expect(proj.transform).toHaveBeenCalledWith(coords, 'EPSG:4326', 'EPSG:3857');
  //   });

  //   it('devrait transformer un LineString ou MultiPoint', () => {
  //     const coords: Coordinate[] = [[2, 48], [3, 49]];
  //     const result = (component as any).reprojectCoordinates(coords, 'LineString', 'EPSG:4326', 'EPSG:3857');
  //     expect(result).toEqual([[3, 49], [4, 50]]);
  //     expect(proj.transform).toHaveBeenCalledTimes(2);
  //   });

  //   it('devrait transformer un Polygon ou MultiLineString', () => {
  //     const coords: Coordinate[][] = [[[2, 48], [3, 49], [4, 50]]];
  //     const result = (component as any).reprojectCoordinates(coords, 'Polygon', 'EPSG:4326', 'EPSG:3857');
  //     expect(result).toEqual([[[3, 49], [4, 50], [5, 51]]]);
  //     expect(proj.transform).toHaveBeenCalledTimes(3);
  //   });

  //   it('devrait transformer un MultiPolygon', () => {
  //     const coords: Coordinate[][][] = [[[[2, 48], [3, 49]], [[4, 50], [5, 51]]]];
  //     const result = (component as any).reprojectCoordinates(coords, 'MultiPolygon', 'EPSG:4326', 'EPSG:3857');
  //     expect(result).toEqual([[[[3, 49], [4, 50]], [[5, 51], [6, 52]]]]);
  //     expect(proj.transform).toHaveBeenCalledTimes(4);
  //   });

  //   it('devrait retourner les coordonnées inchangées pour un type inconnu', () => {
  //     const coords: Coordinate = [2, 48];
  //     const result = (component as any).reprojectCoordinates(coords, 'UnknownType', 'EPSG:4326', 'EPSG:3857');
  //     expect(result).toEqual(coords);
  //     expect(proj.transform).not.toHaveBeenCalled();
  //   });
  // });

  
});


import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { RequeteNewComponent } from './requete-new.component';
import { RequeteStepperComponent } from '../../components/requete-stepper/requete-stepper.component';
import { RequeteStepperControlComponent } from '../../components/requete-stepper-control/requete-stepper-control.component';
import { MapViewerComponent } from '../../../shared-map/components/map-viewer/map-viewer.component';
import { ThematicTabsComponent } from '../../../shared-thematic/components/thematic-tabs/thematic-tabs.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { GeolocaliseFormComponent } from '../../../shared-map/components/geolocalise-form/geolocalise-form.component';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { LocalStorageForetService } from '../../../shared/services/local-storage-foret.service';
import { ActivatedRoute } from '@angular/router';

describe('RequeteNewComponent', () => {
  let component: RequeteNewComponent;
  let fixture: ComponentFixture<RequeteNewComponent>;
  let mapContextService: jasmine.SpyObj<MapContextService>;
  let localStorageForetService: jasmine.SpyObj<LocalStorageForetService>;
  let activatedRouteStub: Partial<ActivatedRoute>;

  beforeEach(async () => {
    mapContextService = jasmine.createSpyObj('MapContextService', ['getLayerDessin', 'resetDessin', 'addDrawingTools', 'updateLayers']);
    localStorageForetService = jasmine.createSpyObj('LocalStorageForetService', ['setForet']);
    activatedRouteStub = {
      data: of({ data: { name: 'Forêt Test', geometry: { type: 'FeatureCollection', features: [] } } })
    };

    await TestBed.configureTestingModule({
      declarations: [
        RequeteNewComponent,
        RequeteStepperComponent,
        RequeteStepperControlComponent,
        GeolocaliseFormComponent,
        MapViewerComponent,
        ThematicTabsComponent
      ],
      imports: [SharedDesignDsfrModule],
      providers: [
        { provide: MapContextService, useValue: mapContextService },
        { provide: LocalStorageForetService, useValue: localStorageForetService },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
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

  it('should load forest from route data', () => {
    expect(component.foret).toBeDefined();
    expect(component.foret?.name).toEqual('Forêt Test');
  });

  it('should go to next step when features are present', () => {
    component.step = 0;
    mapContextService.getLayerDessin.and.returnValue({
      getSource: () => ({ getFeatures: () => [{ id: 1 }] })
    });

    component.nextStep();
    expect(component.step).toBe(1);
  });

  it('should not advance if no features are drawn', () => {
    component.step = 0;
    mapContextService.getLayerDessin.and.returnValue({
      getSource: () => ({ getFeatures: () => [] })
    });

    spyOn(window, 'alert');
    component.nextStep();

    expect(component.step).toBe(0);
    expect(window.alert).toHaveBeenCalledWith(
      "Veuillez préciser le périmètre de votre forêt à l'aide des outils de dessins disponible sur la carte."
    );
  });

  it('should go back to previous step', () => {
    component.step = 1;
    component.previousStep();

    expect(component.step).toBe(0);
    expect(mapContextService.resetDessin).toHaveBeenCalled();
    expect(mapContextService.addDrawingTools).toHaveBeenCalled();
    expect(mapContextService.updateLayers).toHaveBeenCalled();
  });


  it('should upload and process a GeoJSON file', fakeAsync(async () => {
    const mockFile = new File([JSON.stringify({ type: 'FeatureCollection', features: [] })], 'test.geojson', { type: 'application/json' });

    spyOn(component as any, 'readFileAsText').and.returnValue(Promise.resolve(mockFile.text()));
    spyOn(component as any, 'reprojectGeoJson').and.returnValue({ type: 'FeatureCollection', features: [] });

    const event = { target: { files: [mockFile] } } as unknown as Event;
    await component.uploadContour(event);

    expect(component.fileFormatError).toBeFalse();
    expect(mapContextService.getLayerDessin).toHaveBeenCalled();
  }));

  it('should show error for invalid GeoJSON file', fakeAsync(async () => {
    const mockFile = new File(['{invalid json}'], 'test.geojson', { type: 'application/json' });
    spyOn(component as any, 'readFileAsText').and.returnValue(Promise.resolve('{invalid json}'));

    const event = { target: { files: [mockFile] } } as unknown as Event;
    await component.uploadContour(event);

    expect(component.fileFormatError).toBeTrue();
  }));
});
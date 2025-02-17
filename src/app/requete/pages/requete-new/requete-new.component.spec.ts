import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { appConfig } from '../../../app.config';
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
        provideRouter([]),
        appConfig.providers
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RequeteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

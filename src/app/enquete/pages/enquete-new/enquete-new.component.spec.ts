import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { EnqueteNewComponent } from './enquete-new.component';
import { EnqueteStepperComponent } from '../../components/enquete-stepper/enquete-stepper.component';
import { EnqueteStepperControlComponent } from '../../components/enquete-stepper-control/enquete-stepper-control.component';
import { MapViewerComponent } from '../../../shared-map/components/map-viewer/map-viewer.component';
import { ThematicTabsComponent } from '../../../shared-thematic/components/thematic-tabs/thematic-tabs.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { GeolocaliseFormComponent } from '../../../shared-map/components/geolocalise-form/geolocalise-form.component';

describe('EnqueteNewComponent', () => {
  let component: EnqueteNewComponent;
  let fixture: ComponentFixture<EnqueteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EnqueteNewComponent,
        EnqueteStepperComponent,
        EnqueteStepperControlComponent,
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

    fixture = TestBed.createComponent(EnqueteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

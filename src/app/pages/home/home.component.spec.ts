import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { HomeComponent } from './home.component';
import { EnqueteStepperComponent } from '../../enquete/components/enquete-stepper/enquete-stepper.component';
import { EnqueteStepperControlComponent } from '../../enquete/components/enquete-stepper-control/enquete-stepper-control.component';
import { GeolocaliseFormComponent } from '../../shared-map/components/geolocalise-form/geolocalise-form.component';
import { MapViewerComponent } from '../../shared-map/components/map-viewer/map-viewer.component';
import { SharedThematicModule } from '../../shared-thematic/shared-thematic.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        EnqueteStepperComponent,
        EnqueteStepperControlComponent,
        GeolocaliseFormComponent,
        MapViewerComponent
      ],
      imports: [
        SharedDesignDsfrModule,
        ReactiveFormsModule,
        SharedThematicModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(true).toBeTruthy();
  });
});

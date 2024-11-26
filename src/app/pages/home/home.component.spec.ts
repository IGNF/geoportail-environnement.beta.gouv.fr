import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { HomeComponent } from './home.component';
import { RequeteStepperComponent } from '../../requete/components/requete-stepper/requete-stepper.component';
import { RequeteStepperControlComponent } from '../../requete/components/requete-stepper-control/requete-stepper-control.component';
import { GeolocaliseFormComponent } from '../../shared-map/components/geolocalise-form/geolocalise-form.component';
import { MapViewerComponent } from '../../shared-map/components/map-viewer/map-viewer.component';
import { SharedThematicModule } from '../../shared-thematic/shared-thematic.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        RequeteStepperComponent,
        RequeteStepperControlComponent,
        GeolocaliseFormComponent,
        MapViewerComponent
      ],
      imports: [
        SharedDesignDsfrModule,
        ReactiveFormsModule,
        SharedThematicModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(true).toBeTruthy();
  });

  it('should navigate to /requete/nouvelle', () => {
    spyOn(router, 'navigate');
    component.newRequete();
    expect(router.navigate).toHaveBeenCalledWith(['/', 'requete', 'nouvelle']);
  });

});

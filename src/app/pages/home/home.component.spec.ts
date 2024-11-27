import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

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
  let location: Location;

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
        SharedThematicModule,
        RouterModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /requete/nouvelle when newRequete is called', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.newRequete();
    expect(navigateSpy).toHaveBeenCalledWith(['/', 'requete', 'nouvelle']);
  });

});

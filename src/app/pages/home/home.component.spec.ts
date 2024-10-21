import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { ThematicModule } from '../../thematic/thematic.module';
import { HomeComponent } from './home.component';
import { ForetStepperComponent } from '../../components/foret-stepper/foret-stepper.component';
import { ForetSearchFormComponent } from '../../components/foret-search-form/foret-search-form.component';
import { NextStepComponent } from '../../components/next-step/next-step.component';
import { MapComponent } from '../../components/map/map.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ForetStepperComponent,
        ForetSearchFormComponent,
        NextStepComponent,
        MapComponent
      ],
      imports: [
        SharedDesignDsfrModule,
        ReactiveFormsModule,
        ThematicModule
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

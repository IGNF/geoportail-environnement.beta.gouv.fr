import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { HomeComponent } from './home.component';
import { ForetStepperComponent } from '../../components/foret-stepper/foret-stepper.component';
import { ForetSearchFormComponent } from '../../components/foret-search-form/foret-search-form.component';
import { NextStepComponent } from '../../components/next-step/next-step.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ForetStepperComponent,
        ForetSearchFormComponent,
        NextStepComponent
      ],
      imports: [
        SharedDesignDsfrModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

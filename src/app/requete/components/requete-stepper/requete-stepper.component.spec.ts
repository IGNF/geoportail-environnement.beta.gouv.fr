import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteStepperComponent } from './requete-stepper.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { provideRouter } from '@angular/router';

describe('RequeteStepperComponent', () => {
  let component: RequeteStepperComponent;
  let fixture: ComponentFixture<RequeteStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequeteStepperComponent],
      imports: [
        SharedDesignDsfrModule
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RequeteStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

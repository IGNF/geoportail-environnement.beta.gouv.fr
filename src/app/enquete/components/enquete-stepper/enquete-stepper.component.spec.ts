import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteStepperComponent } from './enquete-stepper.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { provideRouter } from '@angular/router';

describe('EnqueteStepperComponent', () => {
  let component: EnqueteStepperComponent;
  let fixture: ComponentFixture<EnqueteStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnqueteStepperComponent],
      imports: [
        SharedDesignDsfrModule
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EnqueteStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

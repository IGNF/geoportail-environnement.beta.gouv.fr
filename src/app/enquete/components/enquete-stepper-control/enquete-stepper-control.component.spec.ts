import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteStepperControlComponent } from './enquete-stepper-control.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';

describe('EnqueteStepperControlComponent', () => {
  let component: EnqueteStepperControlComponent;
  let fixture: ComponentFixture<EnqueteStepperControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnqueteStepperControlComponent],
      imports: [SharedDesignDsfrModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnqueteStepperControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

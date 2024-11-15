import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteStepperControlComponent } from './requete-stepper-control.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';

describe('RequeteStepperControlComponent', () => {
  let component: RequeteStepperControlComponent;
  let fixture: ComponentFixture<RequeteStepperControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequeteStepperControlComponent],
      imports: [SharedDesignDsfrModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequeteStepperControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

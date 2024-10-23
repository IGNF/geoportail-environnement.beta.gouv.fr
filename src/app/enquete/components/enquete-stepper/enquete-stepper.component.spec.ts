import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteStepperComponent } from './enquete-stepper.component';

describe('EnqueteStepperComponent', () => {
  let component: EnqueteStepperComponent;
  let fixture: ComponentFixture<EnqueteStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnqueteStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnqueteStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

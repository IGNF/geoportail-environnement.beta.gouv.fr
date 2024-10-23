import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteStepperControlComponent } from './enquete-stepper-control.component';

describe('EnqueteStepperControlComponent', () => {
  let component: EnqueteStepperControlComponent;
  let fixture: ComponentFixture<EnqueteStepperControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnqueteStepperControlComponent]
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

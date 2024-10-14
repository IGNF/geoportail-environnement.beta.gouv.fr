import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForetStepperComponent } from './foret-stepper.component';

describe('ForetStepperComponent', () => {
  let component: ForetStepperComponent;
  let fixture: ComponentFixture<ForetStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForetStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForetStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

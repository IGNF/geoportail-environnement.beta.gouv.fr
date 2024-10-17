import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { NextStepComponent } from './next-step.component';

describe('NextStepComponent', () => {
  let component: NextStepComponent;
  let fixture: ComponentFixture<NextStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextStepComponent],
      imports: [SharedDesignDsfrModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NextStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

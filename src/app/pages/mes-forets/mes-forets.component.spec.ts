import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesForetsComponent } from './mes-forets.component';
import { ExtendDatePipe } from '../../shared/pipes/extend-date.pipe';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';

describe('MesForetsComponent', () => {
  let component: MesForetsComponent;
  let fixture: ComponentFixture<MesForetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MesForetsComponent,
        ExtendDatePipe
      ],
      imports: [
        SharedDesignDsfrModule
      ],
      providers: [
        ExtendDatePipe
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MesForetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

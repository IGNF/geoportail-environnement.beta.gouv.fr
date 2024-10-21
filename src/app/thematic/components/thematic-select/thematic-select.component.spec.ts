import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';

import { ThematicSelectComponent } from './thematic-select.component';

describe('ThematicSelectComponent', () => {
  let component: ThematicSelectComponent;
  let fixture: ComponentFixture<ThematicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicSelectComponent],
      imports:[SharedDesignDsfrModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

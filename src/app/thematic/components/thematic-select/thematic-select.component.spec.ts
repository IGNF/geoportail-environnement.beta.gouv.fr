import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicSelectComponent } from './thematic-select.component';

describe('ThematicSelectComponent', () => {
  let component: ThematicSelectComponent;
  let fixture: ComponentFixture<ThematicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicSelectComponent]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesForetsComponent } from './mes-forets.component';

describe('MesForetsComponent', () => {
  let component: MesForetsComponent;
  let fixture: ComponentFixture<MesForetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesForetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesForetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

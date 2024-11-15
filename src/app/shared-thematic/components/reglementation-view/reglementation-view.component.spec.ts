import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementationViewComponent } from './reglementation-view.component';

describe('ReglementationViewComponent', () => {
  let component: ReglementationViewComponent;
  let fixture: ComponentFixture<ReglementationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReglementationViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglementationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

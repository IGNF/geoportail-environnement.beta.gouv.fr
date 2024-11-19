import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheInfoViewComponent } from './fiche-info-view.component';

describe('FicheInfoViewComponent', () => {
  let component: FicheInfoViewComponent;
  let fixture: ComponentFixture<FicheInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FicheInfoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

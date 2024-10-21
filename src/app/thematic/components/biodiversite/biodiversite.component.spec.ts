import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodiversiteComponent } from './biodiversite.component';

describe('BiodiversiteComponent', () => {
  let component: BiodiversiteComponent;
  let fixture: ComponentFixture<BiodiversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiodiversiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodiversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

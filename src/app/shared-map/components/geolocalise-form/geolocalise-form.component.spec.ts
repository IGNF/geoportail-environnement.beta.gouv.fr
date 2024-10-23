import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocaliseFormComponent } from './geolocalise-form.component';

describe('GeolocaliseFormComponent', () => {
  let component: GeolocaliseFormComponent;
  let fixture: ComponentFixture<GeolocaliseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeolocaliseFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeolocaliseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

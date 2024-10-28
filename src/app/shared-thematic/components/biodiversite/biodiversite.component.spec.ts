import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodiversiteComponent } from './biodiversite.component';
import { appConfig } from '../../../app.config';

describe('BiodiversiteComponent', () => {
  let component: BiodiversiteComponent;
  let fixture: ComponentFixture<BiodiversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiodiversiteComponent],
      providers: appConfig.providers
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

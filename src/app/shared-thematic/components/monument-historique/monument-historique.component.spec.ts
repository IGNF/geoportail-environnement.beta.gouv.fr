import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentHistoriqueComponent } from './monument-historique.component';
import { appConfig } from '../../../app.config';

describe('MonumentHistoriqueComponent', () => {
  let component: MonumentHistoriqueComponent;
  let fixture: ComponentFixture<MonumentHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonumentHistoriqueComponent],
      providers: appConfig.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonumentHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

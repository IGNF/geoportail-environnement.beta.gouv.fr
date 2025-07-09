import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';

import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { FooterPrintComponent } from './footer-print.component';

describe('FooterComponent', () => {
  let component: FooterPrintComponent;
  let fixture: ComponentFixture<FooterPrintComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterPrintComponent],
      imports: [SharedDesignDsfrModule, RouterModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterPrintComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

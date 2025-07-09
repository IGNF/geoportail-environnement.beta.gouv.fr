import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { HeaderPrintComponent } from './header-print.component';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { appConfig } from '../../app.config';

describe('HeaderComponent', () => {
  let component: HeaderPrintComponent;
  let fixture: ComponentFixture<HeaderPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPrintComponent],
      imports: [
        SharedDesignDsfrModule,
        RouterModule
      ],
      providers: appConfig.providers
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

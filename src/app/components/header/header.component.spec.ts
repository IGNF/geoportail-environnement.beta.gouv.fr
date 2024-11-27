import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { appConfig } from '../../app.config';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        SharedDesignDsfrModule,
        RouterModule
      ],
      providers: appConfig.providers
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

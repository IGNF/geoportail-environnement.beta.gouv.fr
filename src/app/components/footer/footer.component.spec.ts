import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';

import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [SharedDesignDsfrModule, RouterModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the correct route when linkSelect is called', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    const route = 'mentions-legales';
    component.linkSelect(route);
    expect(navigateSpy).toHaveBeenCalledWith(['/', route]);
  });

});

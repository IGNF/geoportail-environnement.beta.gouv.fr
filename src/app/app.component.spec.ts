import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedDesignDsfrModule } from './shared-design-dsfr/shared-design-dsfr.module';
import { of } from 'rxjs';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let title: HTMLElement;
  let router: Router;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SimplePageComponent
      ],
      imports: [SharedDesignDsfrModule, RouterModule],
      providers: appConfig.providers
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    title = fixture.nativeElement.querySelector('#title-page');
    document = TestBed.inject(DOCUMENT);
    router = TestBed.inject(Router);
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('should display a title', () => {
    fixture.detectChanges();
    expect(title.textContent?.trim()).toContain('Géoportail de l\'environnement');
  });


  it('should display a different title', () => {
    component.title = 'Test';
    fixture.detectChanges();
    expect(title.textContent?.trim()).toContain('Test');
  });


  it('should display a different title after routing', async () => {
    // spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    await router.navigate(['/accessibilite']);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(title.textContent?.trim()).toContain(document.title);
  });


  it('should focus on footer', () => {
    component.skipLinkSelect('footer');
    fixture.detectChanges();
    expect(title.textContent?.trim()).toContain('Géoportail de l\'environnement');
  });

});

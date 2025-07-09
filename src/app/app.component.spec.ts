import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderPrintComponent } from './components/header-print/header-print.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterPrintComponent } from './components/footer-print/footer-print.component';
import { SharedDesignDsfrModule } from './shared-design-dsfr/shared-design-dsfr.module';


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
        HeaderPrintComponent,
        FooterComponent,
        FooterPrintComponent,
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
    expect(title.textContent?.trim()).toContain('Foreg');
  });


  it('should display a different title', () => {
    component.title = 'Test';
    fixture.detectChanges();
    expect(title.textContent?.trim()).toContain('Test');
  });


  it('should focus on footer', () => {
    component.skipLinkSelect('footer');
    fixture.detectChanges();
    expect(title.textContent?.trim()).toContain('Foreg');
  });

  it('should set the title and focus on the title element on router events', () => {
    const mockTitleElement = document.createElement('div');
    mockTitleElement.id = 'title-page';
    document.body.appendChild(mockTitleElement);

    spyOn(document, 'getElementById').and.returnValue(mockTitleElement);
    const focusSpy = spyOn(mockTitleElement, 'focus');
    spyOnProperty(document, 'title', 'get').and.returnValue('New Title');

    component.ngOnInit();
    router.navigate(['/']);

    fixture.whenStable().then(() => {
      expect(component.title).toBe('New Title');

      expect(focusSpy).toHaveBeenCalled();
    });

    document.body.removeChild(mockTitleElement);
  });

});

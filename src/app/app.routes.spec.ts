import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { SharedDesignDsfrModule } from './shared-design-dsfr/shared-design-dsfr.module';
import { appConfig } from './app.config';
import { RequeteModule } from './requete/requete.module';
import { RequeteNewComponent } from './requete/pages/requete-new/requete-new.component';


describe('Router - Requete lazy loading', () => {

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RequeteNewComponent
      ],
      imports: [SharedDesignDsfrModule, RequeteModule, RouterModule],
      providers: appConfig.providers
    }).compileComponents();

    router = TestBed.inject(Router);
  });


  it('should set page title correctly when navigate /', fakeAsync(() => {
    router.navigate(['/']);
    tick();
    expect(document.title).toBe('Foreg');
  }));


  it('should set page title correctly when navigate /requete/nouvelle', fakeAsync(() => {
    router.navigate(['/', 'requete', 'nouvelle']);
    tick();
    expect(document.title).toBe('Nouvelle Requête - Foreg');
  }));

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { ThematicTabsComponent } from './thematic-tabs.component';
import { SyntheseComponent } from '../synthese/synthese.component';
import { FicheInfoViewComponent } from '../fiche-info-view/fiche-info-view.component';
import { appConfig } from '../../../app.config';


describe('ThematicTabsComponent', () => {
  let component: ThematicTabsComponent;
  let fixture: ComponentFixture<ThematicTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicTabsComponent, SyntheseComponent, FicheInfoViewComponent],
      imports: [SharedDesignDsfrModule],
      providers: appConfig.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

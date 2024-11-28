import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { ThematicTabsComponent } from './thematic-tabs.component';
import { SyntheseComponent } from '../synthese/synthese.component';
import { appConfig } from '../../../app.config';
import { ThematicViewComponent } from '../thematic-view/thematic-view.component';
import { LayerInfoViewComponent } from '../layer-fiche-view/layer-fiche-view.component';


describe('ThematicTabsComponent', () => {
  let component: ThematicTabsComponent;
  let fixture: ComponentFixture<ThematicTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ThematicTabsComponent,
        SyntheseComponent,
        ThematicViewComponent,
        LayerInfoViewComponent
      ],
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

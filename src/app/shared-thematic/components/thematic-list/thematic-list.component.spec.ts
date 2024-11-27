import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThematicListComponent } from './thematic-list.component';

import { FicheInfoViewComponent } from '../../../shared-thematic/components/fiche-info-view/fiche-info-view.component'; 
import { LayerInfoViewComponent } from '../../../shared-thematic/components/layer-info-view/layer-info-view.component';
import { SyntheseComponent } from '../synthese/synthese.component';

import { appConfig } from '../../../app.config';


describe('ThematicListComponent', () => {
  let component: ThematicListComponent;
  let fixture: ComponentFixture<ThematicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicListComponent, SyntheseComponent, FicheInfoViewComponent, LayerInfoViewComponent],
      imports: [],
      providers: appConfig.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

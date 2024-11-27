import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { appConfig } from '../../../app.config';
import { ThematicListComponent } from './thematic-list.component';
import { FicheInfoViewComponent } from '../../../shared-thematic/components/fiche-info-view/fiche-info-view.component';
import { LayerInfoViewComponent } from '../../../shared-thematic/components/layer-info-view/layer-info-view.component';
import { SyntheseComponent } from '../synthese/synthese.component';
import { CommonModule } from '@angular/common';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { SharedMapModule } from '../../../shared-map/shared-map.module';
import { MapViewerComponent } from '../../../shared-map/components/map-viewer/map-viewer.component';


describe('ThematicListComponent', () => {
  let component: ThematicListComponent;
  let fixture: ComponentFixture<ThematicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ThematicListComponent,
        SyntheseComponent,
        FicheInfoViewComponent,
        LayerInfoViewComponent,
        MapViewerComponent,
      ],
      imports: [
        CommonModule,
        SharedDesignDsfrModule,
        SharedMapModule,
      ],
      providers: appConfig.providers
    }).compileComponents();

    fixture = TestBed.createComponent(ThematicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

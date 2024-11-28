import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { appConfig } from '../../../app.config';
import { RequetePrinterComponent } from './requete-printer.component';
import { ThematicListComponent } from '../../../shared-thematic/components/thematic-list/thematic-list.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { SharedMapModule } from '../../../shared-map/shared-map.module';
import { SyntheseComponent } from '../../../shared-thematic/components/synthese/synthese.component';
import { MapViewerComponent } from '../../../shared-map/components/map-viewer/map-viewer.component';
import { ThematicViewComponent } from '../../../shared-thematic/components/thematic-view/thematic-view.component';
import { LayerInfoViewComponent } from '../../../shared-thematic/components/layer-fiche-view/layer-fiche-view.component';


describe('RequetePrinterComponent', () => {
  let component: RequetePrinterComponent;
  let fixture: ComponentFixture<RequetePrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RequetePrinterComponent,
        ThematicListComponent,
        SyntheseComponent,
        ThematicViewComponent,
        LayerInfoViewComponent,
        MapViewerComponent
      ],
      imports: [
        CommonModule,
        SharedDesignDsfrModule,
        SharedMapModule,
      ],
      providers: appConfig.providers
    }).compileComponents();

    fixture = TestBed.createComponent(RequetePrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

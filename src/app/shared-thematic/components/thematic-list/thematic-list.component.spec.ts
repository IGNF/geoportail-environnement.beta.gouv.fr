import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { appConfig } from '../../../app.config';
import { ThematicListComponent } from './thematic-list.component';
import { SyntheseComponent } from '../synthese/synthese.component';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { SharedMapModule } from '../../../shared-map/shared-map.module';
import { MapViewerComponent } from '../../../shared-map/components/map-viewer/map-viewer.component';
import { ThematicViewComponent } from '../thematic-view/thematic-view.component';
import { LayerInfoViewComponent } from '../layer-fiche-view/layer-fiche-view.component';


describe('ThematicListComponent', () => {
  let component: ThematicListComponent;
  let fixture: ComponentFixture<ThematicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ThematicListComponent,
        SyntheseComponent,
        ThematicViewComponent,
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

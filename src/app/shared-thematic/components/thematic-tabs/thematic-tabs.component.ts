import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

import { ThematicSelectService } from '../../services/thematic-select.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { GeoplateformeWfsService } from '../../services/geoplateforme-wfs.service';
import { FicheInfoFeatureService } from '../../services/fiche-info-feature.service';
import { THEMATIC_FICHE_LIST } from '../../models/thematic-fiche-list';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrls: ['./thematic-tabs.component.css']
})
export class ThematicTabsComponent implements OnInit {
  selectedTabIndex: number = 0;

  ficheTabs: any[] = [];

  responseFeatures: any[] = [];

  constructor(
    private ficheInfoFeatureService: FicheInfoFeatureService,
    private thematicSelectService: ThematicSelectService,
    private mapContextService: MapContextService
  ) {}

  ngOnInit() {

    this.initFicheList();

    this.thematicSelectService.thematicSelection.subscribe((activeThemeList: any[]) => {
      activeThemeList.unshift('synthese');
      this.updateActiveTabs(activeThemeList);
    });

    this.ficheInfoFeatureService.listFicheFeatures().subscribe((features: any[]) => {
      this.responseFeatures = features;
      this.updateActiveThematicLayersFromFeatures(features);
      this.mapContextService.updateLayersVisibility('synthese');
      this.initFicheList();
      this.updateFiche();
    });

  }


  selectTab(event: any) {
    this.setSelectedTabIndex(event);
    this.mapContextService.updateLayersVisibility(event);
  }


  private updateActiveTabs(activeThemeList: any[]) {
    this.ficheTabs = THEMATIC_FICHE_LIST.filter((theme) => activeThemeList.includes(theme.name));
    this.selectTab('synthese');
  }


  private setSelectedTabIndex(tabId: string) {
    let indexModifier = 0;
    for (let i = 0; i < THEMATIC_FICHE_LIST.length; i++) {
      if (THEMATIC_FICHE_LIST[i].name === tabId) {
        this.selectedTabIndex = i - indexModifier;
      } else if (!THEMATIC_FICHE_LIST[i].active) {
        indexModifier++;
      }
    }
  }


  private initFicheList() {
    this.ficheTabs = THEMATIC_FICHE_LIST.map((fiche) => {
      if (!fiche.layers) {
        fiche.layers = [];
      }
      return fiche;
    });
  }


  private updateFiche() {
    this.ficheTabs = this.ficheTabs.map((fiche) => {
      fiche.layers = fiche.layers.map((layer: any) => this.updateFicheLayer(layer));
      return fiche;
    });
  }


  private updateFicheLayer(layer: any) {
    layer.features = [];
    layer.features = this.responseFeatures.filter((feature) => {
      return this.parseLayerFromTechnicalName(layer.technicalName) === feature.layer;
    });
    return layer;
  }


  private updateActiveThematicLayersFromFeatures(features: any) {
    for (let i = 0; i < features.length; i++) {
      const layer = features[i].layer;
      switch (layer) {
        case 'assiette_sup_s':
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'monument_historique', name: "assiette_sup_s" })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'monument_historique', name: "assiette_sup_s" });
          }
          break;
        default:
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'biodiversite', name: layer })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'biodiversite', name: layer });
          }
      }
    }
  }


  private parseLayerFromTechnicalName(technicalName: string) {
    return technicalName.split(':')[1];
  }

}

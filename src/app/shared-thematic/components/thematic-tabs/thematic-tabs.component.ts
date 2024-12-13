import { Component, OnInit } from '@angular/core';

import { ThematicSelectService } from '../../services/thematic-select.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { ThematicFeatureService } from '../../services/fiche-info-feature.service';
import { THEMATIC_LIST } from '../../models/thematic-list.enum';
import { Thematic } from '../../models/thematic.model';
import { LayerFiche } from '../../models/layer-fiche.model';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrl: './thematic-tabs.component.css'
})
export class ThematicTabsComponent implements OnInit {

  selectedTabIndex: number = 0;

  thematicTabs: Thematic[] = [];

  responseFeatures: any[] = [];

  constructor(
    private thematicFeatureService: ThematicFeatureService,
    private thematicSelectService: ThematicSelectService,
    private mapContextService: MapContextService
  ) { }

  ngOnInit() {

    this.initFicheList();

    this.thematicSelectService.thematicSelection.subscribe((activeThemeList: any[]) => {
      activeThemeList.unshift('synthese');
      this.updateActiveTabs(activeThemeList);
    });

    this.thematicFeatureService.listFicheFeatures().subscribe((features: any[]) => {
      this.responseFeatures = this.deleteRedundantFeatures(features);
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
    this.thematicTabs = THEMATIC_LIST.filter((theme) => activeThemeList.includes(theme.name));
    this.selectTab('synthese');
  }


  private setSelectedTabIndex(tabId: string) {
    let indexModifier = 0;
    for (let i = 0; i < THEMATIC_LIST.length; i++) {
      if (THEMATIC_LIST[i].name === tabId) {
        this.selectedTabIndex = i - indexModifier;
      } else if (!THEMATIC_LIST[i].active) {
        indexModifier++;
      }
    }
  }


  private initFicheList() {
    this.thematicTabs = THEMATIC_LIST.map((fiche) => {
      if (!fiche.layers) {
        fiche.layers = [];
      }
      return fiche;
    });
  }


  private updateFiche() {
    this.thematicTabs = this.thematicTabs.map((fiche) => {
      fiche.layers = fiche.layers.map((layer: LayerFiche) => this.updateFicheLayer(layer));
      return fiche;
    });
  }


  private updateFicheLayer(layer: LayerFiche) {
    layer.flatview = false;
    layer.features = [];
    layer.features = this.responseFeatures.filter((feature) => {
      if(this.parseLayerFromTechnicalName(layer.technicalName) === feature.layer) {
        if((layer.title === 'Coeurs de parcs nationaux' && feature.zone != 'Coeur') ||
            (layer.title === 'Zones d\'adhésion de parcs nationaux' && feature.zone != 'Adhesion') ||
            (layer.title === 'Monuments historiques' && feature.suptype != 'ac1') ||
            (layer.title === 'Sites inscrits et classés' && feature.suptype != 'ac2')
          ) {
          return false
        }
        return true
      }
      return false;
    });
    return layer;
  }


  private updateActiveThematicLayersFromFeatures(features: any) {
    for (let i = 0; i < features.length; i++) {
      const layer = features[i].layer;
      switch (layer) {
        case 'assiette_sup_s':
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'patrimoine', name: "assiette_sup_s" })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'patrimoine', name: "assiette_sup_s" });
          }
          break;
        case 'prescription_surf':
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'patrimoine', name: "prescription_surf" })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'patrimoine', name: "prescription_surf" });
          }
          break;
        default:
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'biodiversite', name: layer })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'biodiversite', name: layer });
          }
      }
    }
  }

  private deleteRedundantFeatures(features : any[]) : any[]{
    let res : any[] = [];
    features.forEach((feature) => {
      if(!res.filter((elem) => feature.layer == elem.layer && feature.name == elem.name && feature.link == elem.link).length) {
        res.push(feature);
      }
    })
    return res;
  }


  private parseLayerFromTechnicalName(technicalName: string) {
    return technicalName.split(':')[1];
  }

}
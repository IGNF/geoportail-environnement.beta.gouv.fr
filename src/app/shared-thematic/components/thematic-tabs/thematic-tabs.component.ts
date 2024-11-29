import { Component, OnInit } from '@angular/core';

import { ThematicSharedService } from '../../services/thematic-shared.service';
import { ThematicSelectService } from '../../services/thematic-select.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { ThematicFeatureService } from '../../services/fiche-info-feature.service';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrl: './thematic-tabs.component.css'
})
export class ThematicTabsComponent implements OnInit {

  selectedTabIndex: number = 0;

  thematicTabs: any[] = [];

  responseFeatures: any[] = [];

  flatview: boolean = false;

  constructor(
    private thematicFeatureService: ThematicFeatureService,
    private thematicSelectService: ThematicSelectService,
    private thematicSharedService: ThematicSharedService,
    private mapContextService: MapContextService
  ) { }

  ngOnInit() {
    this.thematicTabs = this.thematicSharedService.initThematicList();

    this.thematicSelectService.thematicSelection.subscribe((activeThemeList: any[]) => {
      activeThemeList.unshift('synthese');
      this.thematicTabs = this.thematicSharedService.updateActiveTabs(activeThemeList);
    });

    this.thematicFeatureService.listFicheFeatures().subscribe((features: any[]) => {
      this.responseFeatures = this.deleteRedundantFeatures(features);
      this.thematicSharedService.updateActiveThematicLayersFromFeatures(features);
      this.mapContextService.updateLayersVisibility('synthese');
      this.thematicTabs = this.thematicSharedService.updateThematicFeatures(this.thematicTabs, this.responseFeatures, this.flatview)
    });

  }


  selectTab(event: any) {
      this.thematicSharedService.setSelectedTabIndex(event);
      this.mapContextService.updateLayersVisibility(event);
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

}
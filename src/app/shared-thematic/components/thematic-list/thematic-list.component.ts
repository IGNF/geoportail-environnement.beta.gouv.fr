import { Component, OnInit } from '@angular/core';
import { ThematicSelectService } from '../../services/thematic-select.service';
import { ThematicSharedService } from '../../services/thematic-shared.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { ThematicFeatureService } from '../../services/fiche-info-feature.service';

@Component({
  selector: 'app-thematic-list',
  templateUrl: './thematic-list.component.html',
  styleUrl: './thematic-list.component.css'
})
export class ThematicListComponent implements OnInit {
  selectedTabIndex: number = 0;
  thematics: any[] = [];
  responseFeatures: any[] = [];
  flatview: boolean = true;

  constructor(
    private thematicSharedService: ThematicSharedService,
    private thematicFeatureService: ThematicFeatureService,
    private thematicSelectService: ThematicSelectService,
    private mapContextService: MapContextService
  ) {}

  ngOnInit() {
    this.thematics = this.thematicSharedService.initThematicList();

    this.thematicSelectService.thematicSelection.subscribe((activeThemeList: string[]) => {
      activeThemeList.unshift('synthese');
      this.thematics = this.thematicSharedService.updateActiveTabs(activeThemeList);
      this.selectTab('synthese');
    });

    this.thematicFeatureService.listFicheFeatures().subscribe((features: any[]) => {
      this.responseFeatures = features;
      this.thematicSharedService.updateActiveThematicLayersFromFeatures(features);
      this.mapContextService.updateLayersVisibility('synthese');
      this.thematics = this.thematicSharedService.updateThematicFeatures(this.thematics, features, this.flatview);
    });
  }

  selectTab(tabId: string) {
    this.selectedTabIndex = this.thematicSharedService.setSelectedTabIndex(tabId);
    this.mapContextService.updateLayersVisibility(tabId);
  }
}

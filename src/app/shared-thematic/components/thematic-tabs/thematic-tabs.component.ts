import { Component, OnInit } from '@angular/core';
import { ThematicSelectService } from '../../services/thematic-select.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { THEMATIC_FICHE_LIST } from '../../models/thematic-fiche-list';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrl: './thematic-tabs.component.css'
})
export class ThematicTabsComponent implements OnInit {

  selectedTabIndex: number = 0;

  tabsConfig: any[] = [];

  selectedThematic: any = 0;

  constructor(
    private thematicSelectService: ThematicSelectService,
    private mapContextService: MapContextService
  ) { }

  ngOnInit() {
    this.tabsConfig = THEMATIC_FICHE_LIST;
    this.thematicSelectService.thematicSelection.subscribe(() => {
      this.tabsConfig = THEMATIC_FICHE_LIST;
      if (!THEMATIC_FICHE_LIST[this.selectedTabIndex].active) {
        this.selectedTabIndex = 0;
        this.selectTab("synthese");
      }
    });
  }


  selectTab(event: any) {
    this.setSelectedTabIndex(event);
    this.mapContextService.updateLayersVisibility(event);
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

}
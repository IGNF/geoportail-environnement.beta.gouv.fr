import { Component, OnInit } from '@angular/core';
import { ThematicSelectService } from '../../services/thematic-select.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { THEMATICS } from '../../models/thematic.enum';

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
    this.tabsConfig = THEMATICS;
    this.thematicSelectService.thematicSelection.subscribe(() => {
      this.tabsConfig = THEMATICS;
      if (!THEMATICS[this.selectedTabIndex].checked) {
        this.selectedTabIndex = 0;
        this.selectTab("synthese");
      }
    });
  }

  selectTab(event: any) {
    this.setSelectedTabIndex(event);
    this.mapContextService.updateLayersVisibility(event);
  }

  setSelectedTabIndex(tabId: string) {
    let indexModifier = 0;
    for (let i = 0; i < THEMATICS.length; i++) {
      if (THEMATICS[i].name === tabId) {
        this.selectedTabIndex = i - indexModifier;
      } else if (!THEMATICS[i].checked) {
        indexModifier++;
      }
    }
  }

}
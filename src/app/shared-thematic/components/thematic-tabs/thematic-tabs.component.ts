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

    this.thematicSelectService.thematicSelection.subscribe((activeThemeList: any[]) => {
      // TODO recuperer la liste des couches actives et reconstruire le tableau tabconfig a partir de cette liste
      activeThemeList = ['biodiversite', 'monument-historique'];
      activeThemeList.unshift('synthese');
      this.updateActiveTabs(activeThemeList);
    });
  }


  selectTab(event: any) {
    this.setSelectedTabIndex(event);
    this.mapContextService.updateLayersVisibility(event);
  }

  private updateActiveTabs(activeThemeList: any[]) {
    this.tabsConfig = THEMATIC_FICHE_LIST.filter((theme) => activeThemeList.includes(theme.name));
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

}
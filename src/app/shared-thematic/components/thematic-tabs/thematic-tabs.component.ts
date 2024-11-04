import { Component, OnInit } from '@angular/core';
import { ThematicSelectService } from '../../services/thematic-select.service';
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
    private thematicSelectService: ThematicSelectService
  ) { }

  ngOnInit() {
    this.configFromThemes();
    this.thematicSelectService.thematicSelection.subscribe((theme) => {
      this.configFromThemes(theme);
    });
  }

  private configFromThemes(selectTheme: any = null) {
    this.tabsConfig = THEMATICS.map((theme: any) => {
      let active = false;
      if (theme.name === 'synthese') {
        active = true;
      }
      if (selectTheme && theme.name === selectTheme.name) {
        active = true;
      }
      return {
        tabId: theme.name,
        label: theme.label,
        active: active
      };
    });
  }

}
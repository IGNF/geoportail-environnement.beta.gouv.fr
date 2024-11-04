import { Component, OnInit } from '@angular/core';
import { ThematicSelectService } from '../../services/thematic-select.service';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrl: './thematic-tabs.component.css'
})
export class ThematicTabsComponent implements OnInit {

  selectedTabIndex: number = 0;

  tabsConfig = [{
    tabId: "synthese",
    label: "Synthèse"
  }, {
    tabId: "agriculture",
    label: "Agriculture"
  }, {
    tabId: "biodiversite",
    label: "biodiversite"
  }, {
    tabId: "eau",
    label: "eau"
  }, {
    tabId: "monument-historique",
    label: "Monument Historique"
  }];

  selectedThematic: any;

  constructor(
    private thematicSelectService: ThematicSelectService
  ) { }

  ngOnInit() {
    this.thematicSelectService.thematicSelection.subscribe((thematicId) => {
      this.selectedThematic = thematicId;
    });
  }

  // Méthode pour vérifier si l'onglet doit être affiché
  shouldDisplayTab(thematicId: any): boolean {
    console.log(thematicId, this.selectedThematic);
    return this.selectedThematic === thematicId;
  }

}
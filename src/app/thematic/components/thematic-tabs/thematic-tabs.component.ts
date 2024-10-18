import { Component, OnInit } from '@angular/core';
import { ThematicSelectService } from '../../shared/service/thematic-select.service';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrl: './thematic-tabs.component.css'
})
export class ThematicTabsComponent implements OnInit {
  selectedTabIndex: number = 0; // Onglet par défaut (Synthèse)
  selectedThematic: number | null = null; // Stocke la thématique sélectionnée

  constructor(private thematicSelectService: ThematicSelectService) {}

  ngOnInit() {
    // S'abonner aux changements de la sélection
    this.thematicSelectService.selectedThematic$.subscribe((thematicId) => {
      this.selectedThematic = thematicId;
    });
  }

  // Méthode pour vérifier si l'onglet doit être affiché
  shouldDisplayTab(thematicId: number): boolean {
    return this.selectedThematic === thematicId;
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-thematic-info-container',
  templateUrl: './thematic-info-container.component.html',
  styleUrl: './thematic-info-container.component.css'
})
export class ThematicInfoContainerComponent {
  selectedTabIndex: number = 0; // Onglet par défaut Synthèse
}

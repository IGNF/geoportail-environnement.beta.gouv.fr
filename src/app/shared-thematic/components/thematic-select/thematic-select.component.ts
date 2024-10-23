import { Component } from '@angular/core';
import { ThematicSelectService } from '../../services/thematic-select.service';

@Component({
  selector: 'app-thematic-select',
  templateUrl: './thematic-select.component.html',
  styleUrls: ['./thematic-select.component.css']
})
export class ThematicSelectComponent {

  options: any[] = [
    { label: 'Agriculture', value: 1 },
    { label: 'Biodiversité', value: 2 },
    { label: 'Eau', value: 3 }
  ];

  constructor(
    private thematicSelectService: ThematicSelectService
  ) { }

  // Méthode appelée lors du changement de sélection
  selectChange(event: any): void {

    const thematicId = event; // L'ID de la thématique sélectionnée

    // Mettre à jour la sélection dans le service si l'ID est valide
    if (typeof thematicId === 'number') {
      this.thematicSelectService.updateSelectedThematic(thematicId);
    } else {
      console.error('ID thématique non valide:', thematicId);
    }
  }

}

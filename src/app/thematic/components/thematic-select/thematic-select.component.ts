import { Component } from '@angular/core';
import { ThematicSelectService } from '../../shared/service/thematic-select.service';

@Component({
  selector: 'app-thematic-select',
  templateUrl: './thematic-select.component.html',
  styleUrl: './thematic-select.component.css'
})
export class ThematicSelectComponent {

  constructor(private thematicSelectService: ThematicSelectService) { }
  
  // Méthode appelée lors du changement de sélection
  selectChange(event: any): void {
    // Mettre à jour la sélection dans le service
    const thematicId = event.value; // L'ID de la thématique sélectionnée
    this.thematicSelectService.updateSelectedThematic(thematicId);
  }

}

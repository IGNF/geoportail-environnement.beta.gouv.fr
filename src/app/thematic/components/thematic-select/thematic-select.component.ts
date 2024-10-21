import { Component } from '@angular/core';
import { ThematicSelectService } from '../../shared/service/thematic-select.service';

@Component({
  selector: 'app-thematic-select',
  templateUrl: './thematic-select.component.html',
  styleUrls: ['./thematic-select.component.css']
})
export class ThematicSelectComponent {

  constructor(private thematicSelectService: ThematicSelectService) { }
  
  // Méthode appelée lors du changement de sélection
  selectChange(event: any): void {

    const thematicId = event; // L'ID de la thématique sélectionnée

    // Vérifier la valeur reçue
    console.log('Thématique sélectionnée:', thematicId);

    // Mettre à jour la sélection dans le service si l'ID est valide
    if (typeof thematicId === 'number') {
      this.thematicSelectService.updateSelectedThematic(thematicId);
    } else {
      console.error('ID thématique non valide:', thematicId);
    }
  }

}

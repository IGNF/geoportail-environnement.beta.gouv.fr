import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThematicSelectService {

  // BehaviorSubject pour stocker la sélection actuelle, avec une valeur par défaut
  private selectedThematic = new BehaviorSubject<number | null>(null);

  // Observable pour écouter les changements
  selectedThematic$ = this.selectedThematic.asObservable();

  // Méthode pour mettre à jour la sélection
  updateSelectedThematic(thematicId: number | null) {
    this.selectedThematic.next(thematicId);
  }
}

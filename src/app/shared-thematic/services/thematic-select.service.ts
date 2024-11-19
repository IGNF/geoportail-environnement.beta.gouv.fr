import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThematicSelectService {

  thematicSelection: EventEmitter<any> = new EventEmitter<any>(); //event pour les checkboxes
  thematicTabSelection: EventEmitter<any> = new EventEmitter<any>(); //event pour la sélection d'un onglet

  constructor() {}

  updateThematics(thematics: any) {
    this.thematicSelection.emit(thematics);
  }

  selectThematicTab(data : any[]) {
    this.thematicTabSelection.emit(data);
  }

}

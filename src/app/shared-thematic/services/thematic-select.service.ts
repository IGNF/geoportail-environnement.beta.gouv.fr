import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThematicSelectService {

  thematicSelection: EventEmitter<any> = new EventEmitter<any>(); //event pour les checkboxes

  constructor() {}

  updateThematics(thematics: any) {
    this.thematicSelection.emit(thematics);
  }

}

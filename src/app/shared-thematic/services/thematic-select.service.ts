import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThematicSelectService {

  thematicSelection: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  updateThematics(thematics: any) {
    this.thematicSelection.next(thematics);
  }

}

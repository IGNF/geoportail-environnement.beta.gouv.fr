import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThematicSelectService {

  thematicSelection: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  updateSelectedThematic(thematic: any) {
    this.thematicSelection.next(thematic);
  }

}

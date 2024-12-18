import { Injectable } from '@angular/core';

import { Foret } from '../models/foret.model';

const LOCAL_STORAGE_FORET_ITEM = 'gpe-site-foret';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageForetService {

  private foret?: Foret;

  constructor() { }

  hasForet() {
    return localStorage.getItem(LOCAL_STORAGE_FORET_ITEM) !== null;
  }

  removeForet() {
    localStorage.removeItem(LOCAL_STORAGE_FORET_ITEM);
  }

  getForet() {
    const item = localStorage.getItem(LOCAL_STORAGE_FORET_ITEM);
    if (!item) {
      return;
    }
    const properties = JSON.parse(item);
    this.foret = new Foret().deserialise(properties);
    return this.foret;
  }

  setForet(foret: Foret) {
    this.foret = foret;
    const foretText = JSON.stringify(this.foret);
    localStorage.setItem(LOCAL_STORAGE_FORET_ITEM, foretText);
  }

}

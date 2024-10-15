import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  etapeChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  updateEtape(etape: number) {
    this.etapeChange.next(etape);
  }

}

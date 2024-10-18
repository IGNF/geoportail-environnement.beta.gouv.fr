import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Foret } from '../models/foret.model';
import { MOCK_DB_FORETS } from '../models/mock-db-foret.enum';

@Injectable({
  providedIn: 'root'
})
export class ForetService {

  constructor() { }

  list(): Observable<Foret[]> {
    return of([...MOCK_DB_FORETS.map((foretProperties) => new Foret().deserialise(foretProperties))]);
  }

}

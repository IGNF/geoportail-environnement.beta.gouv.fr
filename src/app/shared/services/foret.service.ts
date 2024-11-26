import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

import { Foret } from '../models/foret.model';
import { ApiService } from '../../shared/services/api.service';
import { MOCK_DB_FORETS } from '../models/mock-db-foret.enum';

@Injectable({
  providedIn: 'root'
})
export class ForetService {

  constructor(private apiService: ApiService) { }

  list(): Observable<Foret[]> {
    console.log('list')
    this.apiService.getForets().pipe(
      map( (resp: any) => {
        console.log(resp)
        return of([resp.map((foretProperties: any) => new Foret().deserialise(foretProperties))]);
      })
    );
    // return of([]);
    // return of([...MOCK_DB_FORETS.map((foretProperties) => new Foret().deserialise(foretProperties))]);
  }

}

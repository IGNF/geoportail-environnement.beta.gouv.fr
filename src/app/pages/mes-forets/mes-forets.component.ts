import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { Foret } from '../../shared/models/foret.model';
import { ForetService } from '../../shared/services/foret.service';
import { ForetCardTransformerService  } from '../../shared/services/foret-card-transformer.service';
import { DsfrTag } from '@edugouvfr/ngx-dsfr';

@Component({
  selector: 'app-mes-forets',
  templateUrl: './mes-forets.component.html',
  styleUrl: './mes-forets.component.css'
})
export class MesForetsComponent implements OnInit {

  // forets!: Foret[];
  foretCards: any[] = [];

  constructor(
    private foretService: ForetService,
    private foretCardTransformerService: ForetCardTransformerService,
  ) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // appel au service de foret est asynchrone: on utilise un observable
    // pour simuler une API dans se contexte on utilise of()

    this.foretService.list().pipe(
      map((forets) => { 
        forets.forEach( foret => {
          this.foretCards.push( this.foretCardTransformerService.transform(foret));
        });
      })
    ).subscribe();

  }
}

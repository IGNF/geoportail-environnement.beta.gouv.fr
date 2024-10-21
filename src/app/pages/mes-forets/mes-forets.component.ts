import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { ForetService } from '../../shared/services/foret.service';
import { CardTransformerService } from '../../shared/services/foret-card-transformer.service';

@Component({
  selector: 'app-mes-forets',
  templateUrl: './mes-forets.component.html',
  styleUrl: './mes-forets.component.css'
})
export class MesForetsComponent implements OnInit {

  foretCards: any[] = [];

  constructor(
    private foretService: ForetService,
    private cardTransformerService: CardTransformerService
  ) { }

  ngOnInit(): void {
    this.foretService.list().pipe(
      map((forets) => {
        this.foretCards = forets.map((foret) => this.cardTransformerService.fromForet(foret));
      })
    ).subscribe();
  }

}

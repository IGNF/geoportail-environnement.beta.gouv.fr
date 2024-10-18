import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { Foret } from '../../shared/models/foret.model';
import { ForetService } from '../../shared/services/foret.service';

@Component({
  selector: 'app-mes-forets',
  templateUrl: './mes-forets.component.html',
  styleUrl: './mes-forets.component.css'
})
export class MesForetsComponent implements OnInit {

  forets!: Foret[];

  constructor(
    private foretService: ForetService
  ) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // appel au service de foret est asynchrone: on utilise un observable
    // pour simuler une API dans se contexte on utilise of()
    this.foretService.list().pipe(
      map((forets) => this.forets = forets)
    ).subscribe();
  }
}

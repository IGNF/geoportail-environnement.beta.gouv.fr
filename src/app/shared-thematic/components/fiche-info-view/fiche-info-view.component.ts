import { Component, Input, OnInit } from '@angular/core';
import { FicheInfo } from '../../models/fiche-info.model';
import { THEMATIC_FICHE_LIST } from '../../models/thematic-fiche-list';

@Component({
  selector: 'app-fiche-info-view',
  templateUrl: './fiche-info-view.component.html',
  styleUrl: './fiche-info-view.component.css'
})
export class FicheInfoViewComponent implements OnInit {

  @Input() fiche!: FicheInfo;

  constructor() { }

  ngOnInit(): void {
    if (!this.fiche) {
      this.fiche = THEMATIC_FICHE_LIST[1];
    }
  }

}

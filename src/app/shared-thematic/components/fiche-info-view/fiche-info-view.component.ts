import { Component, Input, OnInit } from '@angular/core';
import { FicheInfo } from '../../models/fiche-info.model';
@Component({
  selector: 'app-fiche-info-view',
  templateUrl: './fiche-info-view.component.html',
  styleUrl: './fiche-info-view.component.css'
})
export class FicheInfoViewComponent implements OnInit {

  @Input() fiche!: FicheInfo;
  

  constructor(
  ) { }

  ngOnInit(): void {

  }

}

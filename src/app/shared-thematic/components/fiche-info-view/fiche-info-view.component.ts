import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FicheInfo } from '../../models/fiche-info.model';
@Component({
  selector: 'app-fiche-info-view',
  templateUrl: './fiche-info-view.component.html',
  styleUrl: './fiche-info-view.component.css'
})
export class FicheInfoViewComponent implements OnInit, OnChanges {

  @Input() fiche!: FicheInfo;

  @Input() features: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('FicheInfoViewComponent', 'ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('FicheInfoViewComponent', 'ngOnChanges', changes);
  }

}

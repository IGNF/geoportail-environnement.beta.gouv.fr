import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LayerFiche } from '../../models/layer-fiche.model';

@Component({
  selector: 'app-layer-fiche-view',
  templateUrl: './layer-fiche-view.component.html',
  styleUrl: './layer-fiche-view.component.css'
})
export class LayerInfoViewComponent implements OnChanges {

  @Input() layer!: LayerFiche;

  @Input() displaySituationMap: boolean = false;

  map: string = '';

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    this.prepareMap();
  }

  private prepareMap() {
    if (this.layer && this.displaySituationMap) {
      this.map = this.layer.technicalName;
    }
  }
}

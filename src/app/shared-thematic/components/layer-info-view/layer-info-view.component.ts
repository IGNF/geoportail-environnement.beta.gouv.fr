import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-layer-info-view',
  templateUrl: './layer-info-view.component.html',
  styleUrl: './layer-info-view.component.css'
})
export class LayerInfoViewComponent implements OnChanges {

  @Input() layer!: any;

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

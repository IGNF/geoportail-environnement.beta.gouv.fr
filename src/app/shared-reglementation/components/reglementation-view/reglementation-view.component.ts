import { Component, Input, OnInit } from '@angular/core';
import { Reglementation } from '../../models/reglementation.model';
import { REGLEMENTATION_LIST } from '../../models/reglementation-list.enum';

@Component({
  selector: 'app-reglementation-view',
  templateUrl: './reglementation-view.component.html',
  styleUrl: './reglementation-view.component.css'
})
export class ReglementationViewComponent implements OnInit {

  @Input() layerReference: string = '';

  @Input() reglementation?: Reglementation;

  constructor() { }

  ngOnInit() {
    if (!this.reglementation) {
      this.reglementation = REGLEMENTATION_LIST.find(reglement => reglement.layerName === this.layerReference);
    }
  }

}

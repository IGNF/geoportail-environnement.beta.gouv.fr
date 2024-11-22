import { Component, Input, OnInit} from '@angular/core';
import { FicheInfo } from '../../models/fiche-info.model';
@Component({
  selector: 'app-layer-info-view',
  templateUrl: './layer-info-view.component.html',
  styleUrl: './layer-info-view.component.css'
})
export class LayerInfoViewComponent implements OnInit {

  @Input() layer!: any;

  constructor() { }

  ngOnInit(): void {
  }

}

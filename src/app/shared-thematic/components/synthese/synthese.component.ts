import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Thematic } from '../../models/thematic.model';

@Component({
  standalone: false,
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrl: './synthese.component.css'
})
export class SyntheseComponent implements OnInit, OnChanges {

  @Input() thematics!: Thematic[];

  noFeatures: boolean = false;  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.thematics) {
      this.checkFeatures();
    }
  }

  private checkFeatures() {
    this.noFeatures = this.thematics.map(t => t.layers).flat().map((l) => l.features).flat().length === 0;
  }

  checkThematicFeatures(thematic: Thematic) {
    return thematic.layers.map((l) => l.features).flat().length > 0;
  }

}

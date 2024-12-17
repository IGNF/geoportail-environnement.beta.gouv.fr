import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Thematic } from '../../models/thematic.model';

@Component({
  selector: 'app-thematic-view',
  templateUrl: './thematic-view.component.html',
  styleUrl: './thematic-view.component.css'
})
export class ThematicViewComponent implements OnInit, OnChanges {

  @Input() thematic!: Thematic;

  noFeatures: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.thematic) {
      this.checkThematicFeature();
    }
  }

  private checkThematicFeature() {
    this.noFeatures = this.thematic.layers.map((l) => l.features).flat().length === 0;
  }

}

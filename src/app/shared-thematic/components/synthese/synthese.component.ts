import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrl: './synthese.component.css'
})
export class SyntheseComponent implements OnInit, OnChanges {

  @Input() features!: any[];

  @Input() thematicTabs!: any[];

  noFeatureAtAll: boolean = false;  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.noFeatureAtAll = this.thematicTabs && !this.thematicTabs[1].hasFeature && !this.thematicTabs[2].hasFeature;
  }

}

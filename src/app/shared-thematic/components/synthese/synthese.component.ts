import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrl: './synthese.component.css'
})
export class SyntheseComponent implements OnInit {

  @Input() features!: any[];

  @Input() thematicTabs!: any[];

  noFeatureAtAll: boolean = false;  

  constructor() { }

  ngOnInit(): void {
    this.noFeatureAtAll = this.thematicTabs && !this.thematicTabs[1].hasFeature && !this.thematicTabs[2].hasFeature;
  }

}

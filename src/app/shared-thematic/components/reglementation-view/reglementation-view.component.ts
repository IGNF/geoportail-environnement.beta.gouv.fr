import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reglementation-view',
  templateUrl: './reglementation-view.component.html',
  styleUrl: './reglementation-view.component.css'
})
export class ReglementationViewComponent {

  @Input() reglementation!: any;

  constructor() {}

}

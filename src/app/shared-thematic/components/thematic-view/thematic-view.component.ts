import { Component, Input, OnInit } from '@angular/core';

import { Thematic } from '../../models/thematic.model';

@Component({
  selector: 'app-thematic-view',
  templateUrl: './thematic-view.component.html',
  styleUrl: './thematic-view.component.css'
})
export class ThematicViewComponent implements OnInit {

  @Input() thematic!: Thematic;

  constructor() { }

  ngOnInit(): void { 
  }

}

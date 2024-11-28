import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ThematicSelectService } from '../../services/thematic-select.service';
import { THEMATIC_LIST } from '../../models/thematic-list.enum';

@Component({
  selector: 'app-thematic-select',
  templateUrl: './thematic-select.component.html',
  styleUrls: ['./thematic-select.component.css']
})
export class ThematicSelectComponent implements OnInit {

  @Output() select: EventEmitter<any> = new EventEmitter<any>();

  checkboxes: any[] = [];

  constructor(
    private thematicSelectService: ThematicSelectService
  ) { }

  ngOnInit(): void {
    this.checkboxes = THEMATIC_LIST.slice(1).map((theme) => {
      return Object.assign(theme);
    });
  };

  onCheckboxChange(event: any): void {
    if (!event) {
      return;
    }
    let label = event.target.labels[0].textContent;

    let thematics : any[] = [];

    this.checkboxes.forEach((theme) => {
      if(theme.label == label) {
        theme.active = !theme.active;
      }
      if(theme.active) {
        thematics.push(theme.name);
      }
    })

    this.thematicSelectService.updateThematics(thematics);
    this.select.emit(event);
  };

}

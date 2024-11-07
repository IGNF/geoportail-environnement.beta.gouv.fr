import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThematicSelectService } from '../../services/thematic-select.service';
import { THEMATICS } from '../../models/thematic.enum';

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
     this.checkboxes = THEMATICS.slice(1);
  };

  onCheckboxChange(event: any): void {
    if (!event) {
      return;
    }
    let label = event.target.labels[0].textContent;

    for(let i = 0; i < THEMATICS.length; i++) {
      if(THEMATICS[i].label == label) {
        THEMATICS[i].checked = !THEMATICS[i].checked;
      }
    }

    this.thematicSelectService.updateThematics(THEMATICS);
    this.select.emit(event);
  };

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThematicSelectService } from '../../services/thematic-select.service';
import { THEMATIC_FICHE_LIST } from '../../models/thematic-fiche-list';

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
    this.checkboxes = THEMATIC_FICHE_LIST.slice(1).map((theme) => {
      return Object.assign(theme, {
        checked: theme.active
      });
    });
  };

  onCheckboxChange(event: any): void {
    if (!event) {
      return;
    }
    let label = event.target.labels[0].textContent;

    this.thematicSelectService.updateThematics([]);
    this.select.emit(event);
  };

}

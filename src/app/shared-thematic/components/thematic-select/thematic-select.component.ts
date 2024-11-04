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

  options: any[] = [];

  constructor(
    private thematicSelectService: ThematicSelectService
  ) { }

  ngOnInit(): void {
    this.optionsFromThematics();
  }

  // Méthode appelée lors du changement de sélection
  selectChange(event: any): void {
    if (!event) {
      return;
    }
    this.thematicSelectService.updateSelectedThematic(event);
    this.select.emit(event);
  }

  private optionsFromThematics(): void {
    this.options = THEMATICS.filter((theme) => theme.name !== 'synthese').map((theme) => {
      return {
        label: theme.label,
        value: theme
      };
    });
  }

}

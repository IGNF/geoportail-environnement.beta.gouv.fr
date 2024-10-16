import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import SearchGeoportail from 'ol-ext/control/SearchGeoportail';

import { MapContextService } from '../../shared/services/map-context.service';

@Component({
  selector: 'app-foret-search-form',
  templateUrl: './foret-search-form.component.html',
  styleUrl: './foret-search-form.component.css'
})
export class ForetSearchFormComponent implements OnInit {

  @Output() search: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private mapContextService: MapContextService
  ) { }


  ngOnInit(): void {

    // barre de recherche ol-ext
    const search = new SearchGeoportail({
      target: 'location',
      maxItems: 3,
      className: 'fr-input-wrap fr-input-wrap--addon'
    });
    this.mapContextService.map?.addControl(search);

  }

  private isValid() {
    return true;
  }

  private validNeedle() {
    this.search.emit();
  }

}

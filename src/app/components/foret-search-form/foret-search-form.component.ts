import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import SearchGeoportail from 'ol-ext/control/SearchGeoportail';

import { MapContextService } from '../../shared/services/map-context.service';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-foret-search-form',
  templateUrl: './foret-search-form.component.html',
  styleUrl: './foret-search-form.component.css'
})
export class ForetSearchFormComponent implements OnInit {

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  private searchControlSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private mapContextService: MapContextService
  ) { };


  ngOnInit(): void {

    // barre de recherche ol-ext
    const searchControl = new SearchGeoportail({
      target: 'location',
      maxItems: 3,
      className: 'fr-input-wrap fr-input-wrap--addon'
    });
    this.mapContextService.map?.addControl(searchControl);

    searchControl.on('select', (event: any) => this.searchControlSelect.emit(event));

    this.searchControlSelect.pipe(
      distinctUntilChanged(),
      map((event) => {
        searchControl.setInput(event.search.fulltext, false);
        this.mapContextService.map?.getView().setCenter(event.coordinate);
        this.mapContextService.map?.getView().setZoom(14);
        searchControl.clearHistory();
        this.change.emit();
      })
    ).subscribe();

    //ajustement css
    const element = document.querySelector("#location input.search");
    if (element) {
      document.querySelector("#location input.search")?.classList.add("fr-input");
      (document.querySelector("#location input.search") as HTMLElement).style.height = "50px";
      (document.querySelector("#location input.search") as HTMLElement).style.maxWidth = "250px";
      (document.querySelector("#location div.fr-input-wrap") as HTMLElement).style.left = "0";
    }

  };

  private isValid() {
    return true;
  };

}

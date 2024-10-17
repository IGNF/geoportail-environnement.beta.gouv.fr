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
  ) { };


  ngOnInit(): void {

    // barre de recherche ol-ext
    const search = new SearchGeoportail({
      target: 'location',
      maxItems: 3,
      className: 'fr-input-wrap fr-input-wrap--addon'
    });
    this.mapContextService.map?.addControl(search);

    search.on('select', (e:any) => {
      search.setInput(e.search.fulltext, false);
      this.mapContextService.map?.getView().setCenter(e.coordinate);
      this.mapContextService.map?.getView().setZoom(14);
      search.clearHistory();
    })

    //ajustement css
    document.querySelector("#location input.search")?.classList.add("fr-input");
    (document.querySelector("#location input.search") as HTMLElement).style.height = "50px";
    (document.querySelector("#location input.search") as HTMLElement).style.maxWidth = "250px";
    (document.querySelector("#location div.fr-input-wrap") as HTMLElement).style.left = "0";

  };

  private isValid() {
    return true;
  };

  private validNeedle() {
    this.search.emit();
  };

}

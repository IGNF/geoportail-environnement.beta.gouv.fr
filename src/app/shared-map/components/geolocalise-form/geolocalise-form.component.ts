import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import SearchGeoportail from 'ol-ext/control/SearchGeoportail';
import { distinctUntilChanged, first, map } from 'rxjs';
import { MapContextService } from '../../services/map-context.service';

@Component({
  selector: 'app-geolocalise-form',
  templateUrl: './geolocalise-form.component.html',
  styleUrl: './geolocalise-form.component.css'
})
export class GeolocaliseFormComponent implements OnInit {

  @Output() select: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('searchControlGroup') searchControlGroup!: ElementRef;

  private searchControlSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private mapContextService: MapContextService
  ) { };

  ngOnInit(): void {
  this.mapContextService.mapLoaded.pipe(
    first(() => true)
  ).subscribe(() => {
    this.initControl();
  });

  this.searchControlSelect.pipe(
    distinctUntilChanged(),
    map((event) => {
      this.mapContextService.setView(event.coordinate, 14);
      this.select.emit();
    })
  ).subscribe();
  }

  private initControl() {
    const map = this.mapContextService.getMap();
    if (map) {
      const searchControl = new SearchGeoportail({
        type: 'StreetAddress', //Par defaut StreetAddress,PositionOfInterest
        target: 'location',
        maxItems: 10,
        className: 'fr-input-wrap fr-input-wrap--addon',
        placeholder: 'Rechercher...'
      });
      map.addControl(searchControl);

      searchControl.on('select', (event: any) => {
        searchControl.setInput(event.search.fulltext, false);
        searchControl.clearHistory();
        this.searchControlSelect.emit(event);
      });

      if (!this.searchControlGroup) {
        return;
      }
      const input = this.searchControlGroup.nativeElement.querySelector('input.search');
      if (input) {
        input.classList.add('fr-input');
      }
    } else {
      console.warn('Carte non initialisée lors de initControl.');
    }
  }

}

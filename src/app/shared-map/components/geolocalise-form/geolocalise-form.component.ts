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

    // lorsqu'un choix est fait on zoom et on transmet la confirmation
    this.searchControlSelect.pipe(
      distinctUntilChanged(),
      map((event) => {
        this.mapContextService.setView(event.coordinate, 14);
        this.select.emit();
      })
    ).subscribe();
  };


  private initControl() {
    // barre de recherche ol-ext
    const searchControl = new SearchGeoportail({
      target: 'location',
      maxItems: 3,
      className: 'fr-input-wrap fr-input-wrap--addon'
    });
    this.mapContextService.getMap().addControl(searchControl);

    // en confirmant un choix, on rempli le champ et supprime l'historique
    searchControl.on('select', (event: any) => {
      searchControl.setInput(event.search.fulltext, false);
      searchControl.clearHistory();
      this.searchControlSelect.emit(event);
    });

    // apres le chargement de la carte on est placé après le AfterViewInit
    if (!this.searchControlGroup) {
      return;
    }
    const input = this.searchControlGroup.nativeElement.querySelector('input.search');
    if (input) {
      input.classList.add('fr-input');
    }
  }

}
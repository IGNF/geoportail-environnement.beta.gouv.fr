import { Component, Input, OnInit} from '@angular/core';
import { MapContextService } from '../../../shared-map/services/map-context.service';

@Component({
  selector: 'app-layer-info-view',
  templateUrl: './layer-info-view.component.html',
  styleUrl: './layer-info-view.component.css'
})
export class LayerInfoViewComponent implements OnInit {

  @Input() layer!: any;
  @Input() flatview: boolean = false;
  map!: string;
  constructor(
    private mapContextService: MapContextService
  ) { }

  ngOnInit(): void {
    if (this.layer) {
      this.map = this.layer.technicalName;
    }
  }

  createMapForFeature(feature: any): void {
    const mapId = this.mapContextService.generateCloneId();
    // Vérifier si le conteneur existe
    const container = document.getElementById(mapId);

    if (container) {
      this.mapContextService.createSituationMap(this.map, [this.map]); // Clone de la map original pour une situation
      this.mapContextService.centerOnDessin(); // Recentrer sur la géométrie
    }
  }



}

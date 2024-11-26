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
  constructor(
    private mapContextService: MapContextService
  ) { }

  ngOnInit(): void {
  }

  createMapForFeature(feature: any): void {
    const mapId = this.mapContextService.generateCloneId();
    // Vérifier si le conteneur existe
    const container = document.getElementById(mapId);
    if (container) {
      //this.mapContextService.createSituationMap(mapId, layersToLoad); // Clone de la map original pour une situation
      this.mapContextService.centerOnDessin(); // Recentrer sur la géométrie
    }
  }



}

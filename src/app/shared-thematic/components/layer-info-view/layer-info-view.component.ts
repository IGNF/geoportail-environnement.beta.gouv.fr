import { Component, Input, OnInit} from '@angular/core';
import { MapContextService } from '../../../shared-map/services/map-context.service';

@Component({
  selector: 'app-layer-info-view',
  templateUrl: './layer-info-view.component.html',
  styleUrl: './layer-info-view.component.css'
})
export class LayerInfoViewComponent implements OnInit {

  @Input() layer!: any;
  map!: string;
  constructor(
    private mapContextService: MapContextService
  ) { }

  ngOnInit(): void {
    console.log(this.layer);
    if (this.layer && this.layer.flatview) {
      this.map = this.layer.technicalName;
    }
  }
  ngAfterViewInit(): void {
    console.log("Layer Flatview:", this.layer.flatview);
    
    if (this.layer.flatview) {
      console.log('ngAfterViewInit');
      this.createMapForFeature(this.layer.technicalName);
    }
  }

  createMapForFeature(technicalName: string): void {
    // Vérifier si le conteneur existe
    const container = document.getElementById(technicalName);
    console.log(container);
    if (container) {
      this.mapContextService.createSituationMap(technicalName, technicalName); // Clone de la map original pour une situation
      this.mapContextService.centerOnDessin(); // Recentrer sur la géométrie
    }
  }
}

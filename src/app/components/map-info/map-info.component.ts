import { Component, Input, OnInit,} from '@angular/core';
import { MapContextService } from '../../shared/services/map-context.service';

@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrl: './map-info.component.css'
})
export class MapInfoComponent {

  @Input() nbFeatures: number = 0;

  constructor(
    private mapContextService: MapContextService
  ) { };

  ngOnInit(): void {

    //@ts-ignore
    this.nbFeatures = this.mapContextService.getLayerDessin()?.getSource().getFeatures().length

  };

}

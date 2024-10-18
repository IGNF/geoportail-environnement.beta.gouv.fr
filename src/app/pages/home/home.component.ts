import { Component, OnInit } from '@angular/core';

import { EnqueteService } from '../../shared/services/enquete.service';
import { MapContextService } from '../../shared/services/map-context.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  step: number = 0;

  constructor(
    private enqueteService: EnqueteService,
    private mapContextService: MapContextService
  ) { }


  ngOnInit(): void {
    this.mapContextService.createMap('map');
  }


  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
    if (this.step == 0) {
      this.mapContextService.getLayerDessin().getSource().forEachFeature((f: any) => {
        this.mapContextService.getLayerDessin()?.getSource().removeFeature(f);
      });
    }
  }

}

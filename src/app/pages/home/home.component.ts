import { Component, OnInit } from '@angular/core';

import { MapContextService } from '../../shared/services/map-context.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  step: number = 0;

  constructor(
    private mapContextService: MapContextService
  ) { }


  ngOnInit(): void {
    this.mapContextService.createMap('map');
  }

  confirmSelect() {
    if (this.step === 0) {
      this.nextStep();
    }
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

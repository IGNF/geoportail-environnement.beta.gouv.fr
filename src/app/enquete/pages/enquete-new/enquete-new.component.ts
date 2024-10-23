import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MapContextService } from '../../../shared-map/services/map-context.service';

@Component({
  selector: 'app-enquete-new',
  templateUrl: './enquete-new.component.html',
  styleUrl: './enquete-new.component.css'
})
export class EnqueteNewComponent implements OnInit {

  forestId: string = '';

  step: number = 0;

  constructor(
    private mapContextService: MapContextService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map((params) => {
        if (!params['id']) {
          return;
        }
        this.forestId = params['id'];
        this.step = 2;
      })
    ).subscribe();

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { BreadcrumbTransformerService } from '../../../shared-design-dsfr/transformers/breadcrumb-transformer.service';
import { INTERSECTED_LAYERS, THEMATICS } from '../../../shared-thematic/models/thematic.enum';

@Component({
  selector: 'app-enquete-new',
  templateUrl: './enquete-new.component.html',
  styleUrl: './enquete-new.component.css'
})
export class EnqueteNewComponent implements OnInit {

  forestId: string = '';

  step: number = 0;

  breadcrumb?: any;

  constructor(
    private breadcrumbTransformerService: BreadcrumbTransformerService,
    private mapContextService: MapContextService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map((params) => {
        if (params['id']) {
          this.forestId = params['id'];
          this.step = 2;
        }
        this.buildBreadcrumb();
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
    switch(this.step) {
      case 2:
        if(!this.mapContextService.getLayerDessin().getSource().getFeatures().length) {
          alert("Veuillez préciser le périmètre de votre forêt à l'aide des outils de dessins disponible sur la carte.");
          this.step--;
        }else {
          this.mapContextService.removeDrawingTools();
          for(let i = 0; i < THEMATICS.length; i++) {
            THEMATICS[i].checked = true;
          }
          this.mapContextService.updateLayers();
        };
        return;
    }
  }


  previousStep() {
    this.step--;
    switch(this.step) {
      case 0:
        this.mapContextService.resetDessin();
        return;
      case 1:
        this.mapContextService.addDrawingTools();
        for(let i = INTERSECTED_LAYERS.length; i >= 0; i--) {
          INTERSECTED_LAYERS.pop();
        }
        for(let i = 0; i < THEMATICS.length; i++) {
          THEMATICS[i].checked = false;
        }
        this.mapContextService.updateLayers();
        
    }
  }

  updateThematics() {
    this.mapContextService.updateLayers();
  }


  private buildBreadcrumb() {
    const label = this.forestId ? `Enquête ${this.forestId}` : 'Nouvelle enquête';
    this.breadcrumb = this.breadcrumbTransformerService.fromOptions({
      label: label, route: ''
    });
  }

}

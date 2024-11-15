import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { BreadcrumbTransformerService } from '../../../shared-design-dsfr/transformers/breadcrumb-transformer.service';
import { THEMATIC_FICHE_LIST } from '../../../shared-thematic/models/thematic-fiche-list';

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
    if (this.step === 2) {
      if (!this.mapContextService.getLayerDessin().getSource().getFeatures().length) {
        alert("Veuillez préciser le périmètre de votre forêt à l'aide des outils de dessins disponible sur la carte.");
        this.step--;
        return;
      }
      this.mapContextService.removeDrawingTools();
      for (let i = 0; i < THEMATIC_FICHE_LIST.length; i++) {
        THEMATIC_FICHE_LIST[i].active = true;
      }
      this.mapContextService.updateLayers();
    }
  }


  previousStep() {
    this.step--;
    switch (this.step) {
      case 0:
        this.mapContextService.resetDessin();
        return;
      case 1:
        this.mapContextService.addDrawingTools();
        for (let i = this.mapContextService.getActiveThematicLayers().length; i >= 0; i--) {
          this.mapContextService.getActiveThematicLayers().pop();
        }
        for (let i = 0; i < THEMATIC_FICHE_LIST.length; i++) {
          THEMATIC_FICHE_LIST[i].active = false;
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

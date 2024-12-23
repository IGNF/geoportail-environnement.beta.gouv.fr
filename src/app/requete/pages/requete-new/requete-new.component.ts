import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { BreadcrumbTransformerService } from '../../../shared-design-dsfr/transformers/breadcrumb-transformer.service';
import { THEMATIC_LIST } from '../../../shared-thematic/models/thematic-list.enum';
import { Foret } from '../../../shared/models/foret.model';
import { LocalStorageForetService } from '../../../shared/services/local-storage-foret.service';

@Component({
  selector: 'app-requete-new',
  templateUrl: './requete-new.component.html',
  styleUrl: './requete-new.component.css'
})
export class RequeteNewComponent implements OnInit, AfterViewInit {

  foret?: Foret;

  step: number = 0;

  breadcrumb?: any;

  constructor(
    private breadcrumbTransformerService: BreadcrumbTransformerService,
    private localStorageForetService: LocalStorageForetService,
    private mapContextService: MapContextService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.data.pipe(
      map((response: any) => {
        if (response && response.data) {
          this.foret = response.data;
        }
        // if (response && !response.data) {
        //   this.router.navigate(['/', '404']);
        // }
        this.loadPageComponent();
      })
    ).subscribe();
  }

  ngAfterViewInit(): void {
    this.loadWithForet();
  }

  saveForet() {
    const geoJson = this.mapContextService.maForetToGeoJson();
  }

  confirmSelect() {
  }

  nextStep() {
    this.step++;
    if (this.step === 1) {
      if (!this.mapContextService.getLayerDessin().getSource().getFeatures().length) {
        alert("Veuillez préciser le périmètre de votre forêt à l'aide des outils de dessins disponible sur la carte.");
        this.step--;
        return;
      }
      this.mapContextService.removeDrawingTools();
      for (let i = 0; i < THEMATIC_LIST.length; i++) {
        THEMATIC_LIST[i].active = true;
      }
      this.mapContextService.updateLayers();
    }

    if (this.step === 2) {
      this.localSaveForet();
    }
  }


  previousStep() {
    this.step--;
    switch (this.step) {
      case 0:
        this.mapContextService.resetDessin();
        this.mapContextService.addDrawingTools();
        for (let i = this.mapContextService.getActiveThematicLayers().length; i >= 0; i--) {
          this.mapContextService.getActiveThematicLayers().pop();
        }
        for (let i = 0; i < THEMATIC_LIST.length; i++) {
          THEMATIC_LIST[i].active = false;
        }
        this.mapContextService.updateLayers();
    }
  }


  updateThematics() {
    this.mapContextService.updateLayers();
  }


  private localSaveForet() {
    if (this.foret) {
      this.localStorageForetService.setForet(this.foret);
    }
  }


  private loadWithForet() {
    if (!this.foret) {
      return;
    }
    if (this.foret.geometry) {
      this.mapContextService.maForetFromGeoJson(this.foret.geometry);
    }
    this.step = 0;
    this.nextStep();
    this.mapContextService.centerOnDessin();
  }


  private loadPageComponent() {
    const label = this.foret ? `Requête sur ${this.foret.name}` : 'Nouvelle requête';
    this.breadcrumb = this.breadcrumbTransformerService.fromOptions({
      label: label, route: ''
    });
  }

}

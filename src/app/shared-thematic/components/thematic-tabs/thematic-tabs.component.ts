import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { ThematicSelectService } from '../../services/thematic-select.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { GeoplateformeWfsService, LON_LAT_ORDER } from '../../services/geoplateforme-wfs.service';
import { FicheInfoFeatureService } from '../../services/fiche-info-feature.service';
import { THEMATIC_FICHE_LIST } from '../../models/thematic-fiche-list';
import { MAP_BIODIVERISTE_LAYER_GROUP } from '../../models/map-thematic-layers.enum';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrl: './thematic-tabs.component.css'
})
export class ThematicTabsComponent implements OnInit {

  selectedTabIndex: number = 0;

  ficheTabs: any[] = [];

  responseFeatures: any[] = [];

  constructor(
    private thematicSelectService: ThematicSelectService,
    private mapContextService: MapContextService,
    private geoplateformeWfsService: GeoplateformeWfsService,
    private ficheInfoFeatureService: FicheInfoFeatureService
  ) { }

  ngOnInit() {

    this.initFicheList();

    this.thematicSelectService.thematicSelection.subscribe((activeThemeList: any[]) => {
      activeThemeList.unshift('synthese');
      this.updateActiveTabs(activeThemeList);
    });

    //requêtes
    const requests = this.ficheInfoFeatureService.getrequests();

    const observableRequest = this.ficheInfoFeatureService.getObservables(requests);

    zip(observableRequest).subscribe((responses: any[]) => {
      let features = responses.reduce((collection, response) => {
        if (response.features) {
          collection.push(...response.features);
        }
        return collection;
      }, []);

      this.updateActiveThematicLayersFromFeatures(features);
      this.mapContextService.updateLayersVisibility('synthese');
      this.responseFeatures = this.parseFeatures(features);
      this.initFicheList();
      this.updateFiche();
    });

  }


  selectTab(event: any) {
    this.setSelectedTabIndex(event);
    this.mapContextService.updateLayersVisibility(event);
  }

  private updateActiveTabs(activeThemeList: any[]) {
    this.ficheTabs = THEMATIC_FICHE_LIST.filter((theme) => activeThemeList.includes(theme.name));
    this.selectTab('synthese');
  }


  private setSelectedTabIndex(tabId: string) {
    let indexModifier = 0;
    for (let i = 0; i < THEMATIC_FICHE_LIST.length; i++) {
      if (THEMATIC_FICHE_LIST[i].name === tabId) {
        this.selectedTabIndex = i - indexModifier;
      } else if (!THEMATIC_FICHE_LIST[i].active) {
        indexModifier++;
      }
    }
  }

  private parseFeatures(features: any): any[] {
    return features.map((feature: any) => {
      const id = feature.id;
      const layer = this.parseLayerFromId(id);
      const properties = feature.properties;
      let link;
      if (properties['partition'] && properties['gpu_doc_id'] && properties['fichier']) {
        link = `${environment.geoportailUrbanismeDocumentsUrl}/${properties['partition']}/${properties['gpu_doc_id']}/${properties['fichier']}`;
      } else {
        link = properties.url;
      }
      return {
        id: id,
        layer: layer,
        name: properties.sitename || properties.nom || properties.nom_site || this.forceUtfEncoded(properties['nomsuplitt']),
        link: properties.url
      };
    });
  }

  private parseLayerFromId(id: string) {
    return id.split('.')[0];
  }

  private parseLayerFromTechnicalName(technicalName: string) {
    return technicalName.split(':')[1];
  }

  private initFicheList() {
    this.ficheTabs = THEMATIC_FICHE_LIST.map((fiche) => {
      if (!fiche.layers) {
        fiche.layers = [];
      }
      return fiche;
    });
  }

  private updateFicheLayer(layer: any) {
    layer.features = [];
    layer.features = this.responseFeatures.filter((feature) => {
      const id = feature.id;
      return this.parseLayerFromTechnicalName(layer.technicalName) === this.parseLayerFromId(id);
    });
    return layer;
  }

  private updateFiche() {
    this.ficheTabs = this.ficheTabs.map((fiche) => {
      fiche.layers = fiche.layers.map((layer: any) => this.updateFicheLayer(layer));
      return fiche;
    });
  }

  private updateActiveThematicLayersFromFeatures(features: any) {
    for (let i = 0; i < features.length; i++) {
      const layer = this.parseLayerFromId(features[i].id);
      switch (layer) {
        case 'assiette_sup_s':
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'monument_historique', name: "assiette_sup_s" })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'monument_historique', name: "assiette_sup_s" });
          }
          break;
        default:
          if (!this.mapContextService.getActiveThematicLayers().includes({ theme: 'biodiversite', name: layer })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'biodiversite', name: layer });
          }
      }
    }
  }

  // TODO a deplacer dans une pipe
  private forceUtfEncoded(encodedErrorStr: string): string {
    return encodedErrorStr.replace(/Ã©/g, 'é')
      .replace(/Ã¨/g, 'è')
      .replace(/Ã/g, 'à')
      .replace(/Ã¯/g, 'ï')
      .replace(/à´/g, 'ô')
      .replace(/Ã§/g, 'ç')
      .replace(/Ãª/g, 'ê')
      .replace(/àª/g, 'ê')
      .replace(/Ã¹/g, 'ù')
      .replace(/Ã¦/g, 'æ')
      .replace(/Å/g, 'œ')
      .replace(/Ã«/g, 'ë')
      .replace(/Ã¼/g, 'ü')
      .replace(/à¢/g, 'â');
  }

}
import { Component, OnInit } from '@angular/core';
import { FicheInfo } from '../../models/fiche-info.model';
import { ThematicSelectService } from '../../services/thematic-select.service';
import { MapContextService } from '../../../shared-map/services/map-context.service';
import { GeoplateformeWfsService, LON_LAT_ORDER } from '../../services/geoplateforme-wfs.service';
import { THEMATIC_FICHE_LIST } from '../../models/thematic-fiche-list';
import { MAP_BIODIVERISTE_LAYER_GROUP } from '../../models/map-thematic-layers.enum';
import { zip } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-thematic-tabs',
  templateUrl: './thematic-tabs.component.html',
  styleUrl: './thematic-tabs.component.css'
})
export class ThematicTabsComponent implements OnInit {

  selectedTabIndex: number = 0;

  tabsConfig: any[] = [];

  selectedThematic: any = 0;

  features : any[] = [];

  fiche!: FicheInfo;

  constructor(
    private thematicSelectService: ThematicSelectService,
    private mapContextService: MapContextService,
    private geoplateformeWfsService: GeoplateformeWfsService,
  ) { }

  ngOnInit() {

    this.initFicheList();

    this.features = [];

    this.thematicSelectService.thematicSelection.subscribe((activeThemeList: any[]) => {
      activeThemeList.unshift('synthese');
      this.updateActiveTabs(activeThemeList);
    });


    const maForet = this.mapContextService.getMaForet();

    //requêtes
    const requests = MAP_BIODIVERISTE_LAYER_GROUP.getLayersArray().map((layer) => {
      return layer.get('technicalName');
    }).map((layername) => {
      return this.geoplateformeWfsService
        .buildRequest()
        .fromLayer(layername)
        .intersectCollection(maForet, 'geom', !LON_LAT_ORDER)
        .getRequest();
    })

    const monumentsRequest = this.geoplateformeWfsService
    .buildRequest()
    .fromLayer('wfs_sup:assiette_sup_s')
    .filterSupType('ac1')
    .intersectCollection(maForet)
    .getRequest();

    requests.push(monumentsRequest);

    const observableRequest = requests.map((request) => this.geoplateformeWfsService.getFeatures(request));

    zip(observableRequest).subscribe((responses: any[]) => {
      const feats = responses.reduce((collection, response) => {
        if (response.features) {
          collection.push(...response.features);
        }
        return collection;
      }, []);

      this.updateActiveThematicLayersFromFeatures(feats);
      this.mapContextService.updateLayersVisibility('synthese');
      this.features = this.parseFeatures(feats);
      this.tabsConfig = THEMATIC_FICHE_LIST;
      this.updateFiche(this.features);
    });

  }


  selectTab(event: any) {
    this.setSelectedTabIndex(event);
    this.thematicSelectService.selectThematicTab([event, this.features])
    this.mapContextService.updateLayersVisibility(event);
  }

  private updateActiveTabs(activeThemeList: any[]) {
    this.tabsConfig = THEMATIC_FICHE_LIST.filter((theme) => activeThemeList.includes(theme.name));
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
      }else {
        link = properties.url;
      }
      return{
        id: id,
        layer: layer,
        name: properties.sitename || properties.nom || properties.nom_site || this.forceUtfEncoded(properties['nomsuplitt']),
        link: properties.url
      }
    })
  }

  private parseLayerFromId(id: string) {
    return id.split('.')[0];
  }
  
  private parseLayerFromTechnicalName(technicalName: string) {
    return technicalName.split(':')[1];
  }
 
  // TODO a deplacer dans une pipe
  forceUtfEncoded(encodedErrorStr: string): string {
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

  initFicheList() {
    THEMATIC_FICHE_LIST.forEach((fiche) => {
      if(fiche.layers) {
        fiche.layers.forEach((layer) => {
          layer.features = null;
        })
      }
    })
  }

  updateFiche(feats: any) {
    this.tabsConfig.forEach((fiche) => {
      if(fiche.layers) {
        fiche.layers.forEach((layer : any) => {
          feats.forEach((f : any) => {
            if(this.parseLayerFromTechnicalName(layer.technicalName) == this.parseLayerFromId(f.id)) {
              if(!layer.features) {
                layer.features = [];
              }
              layer.features.push(f);
            }
          })
        });
      }
    })
  }

  setFicheLayersFeatures(features : any) {
    features.forEach((feature : any) => {
      this.fiche.layers.forEach((layer) => {
        if(this.parseLayerFromTechnicalName(layer.technicalName) == this.parseLayerFromId(feature.id)) {
          if(!layer.features) {
            layer.features = [];
          }
          layer.features.push(feature);
        }
      });
    });
  }

  updateActiveThematicLayersFromFeatures(features : any) {
    for (let i = 0; i < features.length; i++) {
      const layer = this.parseLayerFromId(features[i].id);
      switch(layer){
        case 'assiette_sup_s':
          if(!this.mapContextService.getActiveThematicLayers().includes({ theme: 'monument_historique', name: "assiette_sup_s"})) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'monument_historique', name: "assiette_sup_s"});
          }
          break;
        default:
          if(!this.mapContextService.getActiveThematicLayers().includes({ theme: 'biodiversite', name: layer })) {
            this.mapContextService.getActiveThematicLayers().push({ theme: 'biodiversite', name: layer });
          }
      }
    }
  }

}
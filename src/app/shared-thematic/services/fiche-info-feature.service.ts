import { Injectable } from '@angular/core';
import { map, Observable, zip } from 'rxjs';
import { environment } from '../../../environments/environment';

import { THEMATIC_FICHE_LIST } from '../models/thematic-fiche-list';
import { GeoplateformeWfsService, LON_LAT_ORDER } from './geoplateforme-wfs.service';
import { MapContextService } from '../../shared-map/services/map-context.service';
import { FicheInfo } from '../models/fiche-info.model';
import { WfsRequest } from '../models/wfs-request';

@Injectable({
  providedIn: 'root'
})
export class FicheInfoFeatureService {

  constructor(
    private geoplateformeWfsService: GeoplateformeWfsService,
    private mapContextService: MapContextService
  ) { }


  /**
   * Get all features from all FicheInfos
   * @returns 
   */
  listFicheFeatures(): Observable<any[]> {
    return zip(THEMATIC_FICHE_LIST.filter(fiche => fiche.layers).reduce((request: Observable<any>[], fiche) => {
      request = [...request, ...this.getFicheFeatures(fiche)];
      return request;
    }, [])).pipe(
      map((featuresByThematics) => {
        const features = featuresByThematics.reduce((results, featuresByThematic) => {
          results.push(...featuresByThematic);
          return results;
        }, []);
        return features;
      })
    );
  }

  /**
   * Get all features from one FicheInfo
   * @param ficheinfo 
   * @returns 
   */
  getFicheFeatures(ficheInfo: FicheInfo): Observable<any>[] {
    const requests = ficheInfo.layers.map((layer) => this.buildRequest(layer));
    return requests.map((request) => {
      return this.geoplateformeWfsService.getFeatures(request).pipe(
        map((response) => {
          const features = response.features || [];
          return features.map((feature: any) => this.parseFeature(feature))
            .filter((feature: any) => this.filterFeature(feature));
        })
      )
    });
  }

  /**
   * Build wfs request to access all features of a layer
   * @param layer 
   * @returns 
   */
  private buildRequest(layer: any): WfsRequest {
    const maForet = this.mapContextService.getMaForet();

    const request = this.geoplateformeWfsService.buildRequest()
      .fromLayer(layer.technicalName);

    if (layer.group === 'biodiversite') {
      request.intersectCollection(maForet, 'geom', !LON_LAT_ORDER);
    } else {
      request.intersectCollection(maForet);
    }

    if (layer.title === 'Monuments historiques') {
      request.filterSupType('ac1');
    }

    return request.getRequest();
  }


  /**
   * Lecture des properties issue du WFS request
   * @param feature 
   * @returns 
   */
  private parseFeature(feature: any): any {
    const id = feature.id;
    const layer = this.parseLayerFromId(id);
    const properties = feature.properties;
    let link;
    if (properties['partition'] && properties['gpu_doc_id'] && properties['fichier']) {
      link = `${environment.geoportailUrbanismeDocumentsUrl}/${properties['partition']}/${properties['gpu_doc_id']}/${properties['fichier']}`;
    } else {
      link = properties.url;
    }
    const name = properties.sitename || properties.nom || properties.nom_site || this.forceUtfEncoded(properties['nomsuplitt']);
    const newFeature = Object.assign(feature.properties, {
      id: id,
      layer: layer,
      name: name,
      link: properties.url
    });
    return newFeature;
  }

  /**
   * Cas particuliers selon les couches, pour les AC1 'Monuments historique' on ne garde que les abords
   * @param feature 
   * @returns boolean
   */
  private filterFeature(feature: any): boolean {
    if (feature.suptype === 'ac1' && feature.typeass !== 'Périmètre des abords') {
      return false;
    }
    return true;
  }


  private parseLayerFromId(id: string) {
    return id.split('.')[0];
  }


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

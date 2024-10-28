import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { MapContextService } from '../../../shared-map/services/map-context.service';
import { GeoplateformeWfsService } from '../../services/geoplateforme-wfs.service';

@Component({
  selector: 'app-monument-historique',
  templateUrl: './monument-historique.component.html',
  styleUrl: './monument-historique.component.css'
})
export class MonumentHistoriqueComponent implements OnInit {

  monuments: Array<any> = [];

  constructor(
    private geoplateformeWfsService: GeoplateformeWfsService,
    private mapContextService: MapContextService
  ) { };


  ngOnInit(): void {
    const maForet = this.mapContextService.getMaForet();
    // TODO trouver un moyen de tester l'abscence de foret dessiné sinon ça requete toutes les features
    if (!maForet) {
      return;
    }

    const request = this.geoplateformeWfsService
      .buildRequest()
      .fromLayer('wfs_sup:assiette_sup_s')
      .filterSupType('ac1')
      .intersectCollection(maForet)
      .getRequest();

    this.geoplateformeWfsService.getFeatures(request).subscribe((response: any) => {
      this.monuments = this.parseMonuments(response.features);
    });
  };

  parseMonuments(features: any[]): { name: string, link: string }[] {
    // TODO faire sauter le splice qui sert ici à filtres les X premiers resultats
    return features.splice(0, 14).map((feature) => {
      const properties = feature.properties;
      let link = '';
      if (properties['partition'] && properties['gpu_doc_id'] && properties['fichier']) {
        link = `${environment.geoportailUrbanismeDocumentsUrl}/${properties['partition']}/${properties['gpu_doc_id']}/${properties['fichier']}`;
      }
      return {
        name: this.forceUtfEncoded(properties['nomsuplitt']),
        link: link
      };
    });
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

}

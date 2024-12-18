import { Component, OnInit } from '@angular/core';
import { TileTranformerService } from '../../../shared-design-dsfr/transformers/tile-tranformer.service';
import { Router } from '@angular/router';

const EXPORT_TILE_CONFIG = [
  {
    customBackground: 'default',
    customBorder: 'default',
    description: 'Vous allez être dirigé vers une aperçu de l\'impression',
    disabled: false,
    downloadDirect: true,
    downloadAssessFile: false,
    enlargeLink: true,
    heading: 'Imprimer un rapport',
    headingLevel: 'H3',
    horizontal: false,
    route: 'requete/nouvelle/impression',
    size: 'MD',
    download: false,
    artworkDirPath: 'artwork',
    artworkFilePath: 'artwork/pictograms/document/document-download.svg',
    detail: ''
  }
];

@Component({
  selector: 'app-requete-export-list',
  templateUrl: './requete-export-list.component.html',
  styleUrl: './requete-export-list.component.css'
})
export class RequeteExportListComponent implements OnInit {

  exportTiles: any[] = [];

  constructor(
    private tileTranformerService: TileTranformerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.exportTiles = EXPORT_TILE_CONFIG.map((tile: any) => this.tileTranformerService.fromOptions(tile));
  }

  tileSelect(route: string) {
    // TODO determine active foret
    this.router.navigate(['/', 'requete', 'nouvelle', 'impression']);
  }

}

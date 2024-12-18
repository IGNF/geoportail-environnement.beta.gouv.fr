import { Component, OnInit } from '@angular/core';
import { LocalStorageForetService } from '../../../shared/services/local-storage-foret.service';
import { Foret } from '../../../shared/models/foret.model';
import { BreadcrumbTransformerService } from '../../../shared-design-dsfr/transformers/breadcrumb-transformer.service';

@Component({
  selector: 'app-requete-printer',
  templateUrl: './requete-printer.component.html',
  styleUrl: './requete-printer.component.css',
})
export class RequetePrinterComponent implements OnInit {

  breadcrumb!: any;

  foret?: Foret;

  constructor(
    private breadcrumbTransformerService: BreadcrumbTransformerService,
    private localStorageForetService: LocalStorageForetService
  ) {}

  ngOnInit(): void {
    this.foret = this.localStorageForetService.getForet();

    this.loadPageComponent();
  }

  private loadPageComponent() {
    const label = this.foret ? `Requête sur ${this.foret.name}` : 'Nouvelle requête';
    const foretRoute = this.foret ? `/requete/${this.foret.id}` : '';
    this.breadcrumb = this.breadcrumbTransformerService.fromOptions({
      items: [
        {label: label, route: foretRoute },
        {label: 'impression', route: ''}
      ]
    });
  }
  
}

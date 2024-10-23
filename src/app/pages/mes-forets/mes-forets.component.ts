import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import { ForetService } from '../../shared/services/foret.service';
import { CardTransformerService } from '../../shared-design-dsfr/transformers/card-transformer.service';
import { BreadcrumbTransformerService } from '../../shared-design-dsfr/transformers/breadcrumb-transformer.service';

@Component({
  selector: 'app-mes-forets',
  templateUrl: './mes-forets.component.html',
  styleUrl: './mes-forets.component.css'
})
export class MesForetsComponent implements OnInit {

  foretCards: any[] = [];

  breadcrumb: any;

  constructor(
    private breadcrumbTransformerService: BreadcrumbTransformerService,
    private cardTransformerService: CardTransformerService,
    private foretService: ForetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.foretService.list().pipe(
      map((forets) => {
        this.foretCards = forets.map((foret) => this.cardTransformerService.fromForet(foret));
        this.buildBreadcrumb();
      })
    ).subscribe();
  }

  goToEnquete(foretTitle: string) {
    this.router.navigate(['/', 'enquete', foretTitle]);
  }

  private buildBreadcrumb() {
    this.breadcrumb = this.breadcrumbTransformerService.fromOptions({
      label: 'Mes forêts', route: ''
    });
  }

}

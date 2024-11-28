import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

import { environment } from '../../../environments/environment';
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

  subcribed: boolean = true;

  loginUrl: string = environment.loginUrl;

  constructor(
    private breadcrumbTransformerService: BreadcrumbTransformerService,
    private cardTransformerService: CardTransformerService,
    private foretService: ForetService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.buildBreadcrumb();

    this.foretService.mockList().subscribe((forets) => {
      this.foretCards = forets.map((foret) => this.cardTransformerService.fromForet(foret));
    });

    // this.foretService.list().pipe(
    //   catchError((error) => {
    //     this.subcribed = false;
    //     return this.foretService.mockList();
    //   })
    // ).subscribe((forets) => {
    //   this.foretCards = forets.map((foret) => this.cardTransformerService.fromForet(foret));
    // });
  }


  goToRequete(foretId: string) {
    this.router.navigate(['/', 'requete', foretId]);
  }


  private buildBreadcrumb() {
    this.breadcrumb = this.breadcrumbTransformerService.fromOptions({
      label: 'Mes forêts', route: ''
    });
  }

}

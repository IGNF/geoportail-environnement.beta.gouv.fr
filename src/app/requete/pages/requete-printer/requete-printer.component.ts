import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapContextService } from '../../../shared-map/services/map-context.service';

@Component({
  selector: 'app-requete-printer',
  templateUrl: './requete-printer.component.html',
  styleUrl: './requete-printer.component.css',
})
export class RequetePrinterComponent implements OnInit, AfterViewInit {
  forestId: string = '';

  constructor(
    private route: ActivatedRoute,
    private mapContextService: MapContextService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.forestId = params['forestId'] || '';
    });
  }

  ngAfterViewInit(): void {
    this.mapContextService.setTarget('map');
    this.mapContextService.centerOnDessin();
  }
}

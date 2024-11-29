import { Component, OnInit } from '@angular/core';

import { Thematic } from '../../models/thematic.model';
import { ThematicSharedService } from '../../services/thematic-shared.service';
import { ThematicFeatureService } from '../../services/fiche-info-feature.service';
import { map } from 'rxjs';

const DISPLAY_SITUATION_MAP = true;

@Component({
  selector: 'app-thematic-list',
  templateUrl: './thematic-list.component.html',
  styleUrl: './thematic-list.component.css'
})
export class ThematicListComponent implements OnInit {

  thematics: Thematic[] = [];

  constructor(
    private thematicFeatureService: ThematicFeatureService,
    private thematicSharedService: ThematicSharedService
  ) { }

  ngOnInit() {
    this.thematics = this.thematicSharedService.initThematicList();

    this.thematicFeatureService.listThematicsFeatures().pipe(
      map((features: any[]) => {
        this.thematics = this.thematicSharedService.updateThematicFeatures(this.thematics, features, DISPLAY_SITUATION_MAP);
      })
    ).subscribe();
  }

}

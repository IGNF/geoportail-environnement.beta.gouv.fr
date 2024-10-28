import { Component, OnInit } from '@angular/core';
import { Fill, Stroke, Style } from 'ol/style';
import { Select } from 'ol/interaction';
import EditBar from 'ol-ext/control/EditBar.js';

import { MapContextService } from '../../services/map-context.service';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.css'
})
export class MapViewerComponent implements OnInit {

  constructor(
    private mapContextService: MapContextService
  ) { }

  ngOnInit(): void {

    if (!this.mapContextService.isMapLoaded()) {
      return;
    }

    this.mapContextService.map?.getView().setCenter([261271, 6249998]);
    this.mapContextService.map?.getView().setZoom(13);

    const style = new Style({
      fill: new Fill({
        color: 'rgba(73,73,232,0.4)',
      }),
      stroke: new Stroke({
        color: '#3399CC'
      })
    });

    this.mapContextService.getLayerDessin()?.setStyle(style);

    const selectStyle = new Style({
      fill: new Fill({
        color: 'rgba(255,40,48,0.4)',
      }),
      stroke: new Stroke({
        color: '#F44336',
        width: 4
      })
    });

    const select = new Select({
      layers: [this.mapContextService.getLayerDessin()],
      style: selectStyle
    })

    const editBar = new EditBar({
      interactions: {
        Select: select,
        Delete: true,
        Info: false,
        DrawPoint: false,
        DrawLine: false,
        DrawPolygon: true,
        //@ts-ignore
        DrawHole: true,
        DrawRegular: false,
        Transform: false,
        Split: false,
        Offset: false
      },
      source: this.mapContextService.getMap()?.getLayers().getArray()[1].getSource()
    });
    this.mapContextService.map?.addControl(editBar);
  }
}

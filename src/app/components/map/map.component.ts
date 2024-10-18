import { Component, OnInit } from '@angular/core';
import EditBar from 'ol-ext/control/EditBar.js'
import { MapContextService } from '../../shared/services/map-context.service';
import { Fill, Stroke, Style } from 'ol/style';
import { Select } from 'ol/interaction';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  constructor(
    private mapContextService: MapContextService
  ) { }

  ngOnInit(): void {
    this.mapContextService.map?.getView().setCenter([261271, 6249998]);
    this.mapContextService.map?.getView().setZoom(13);

    var style = new Style({
      fill: new Fill({
        color: 'rgba(73,73,232,0.4)',
      }),
      stroke: new Stroke({
        color: '#3399CC'
      })
    })
    
    //@ts-ignore
    this.mapContextService.getLayerDessin().setStyle(style);

    var selectStyle = new Style({
      fill: new Fill({
        color: 'rgba(255,40,48,0.4)',
      }),
      stroke: new Stroke({
        color: '#F44336',
        width: 4
      })
    });

    var select = new Select({
      //@ts-ignore
      layers: [this.mapContextService.getLayerDessin()],
      style: selectStyle
    })

    var editBar = new EditBar({
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
      //@ts-ignore
      source: this.mapContextService.map?.getLayers().getArray()[1].getSource()
    });
    this.mapContextService.map?.addControl(editBar);
  }
}

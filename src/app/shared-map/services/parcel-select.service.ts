import { Injectable } from "@angular/core";
import Feature from 'ol/Feature.js';
import Polygon from 'ol/geom/Polygon.js';
import { GeoplateformeWfsService } from "../../shared-thematic/services/geoplateforme-wfs.service";
import { from, map, Observable } from "rxjs";
import {fromLonLat} from 'ol/proj';

@Injectable({
  providedIn: 'root'
})

export class parcelSelectService {

    private layerDessin: any;

    constructor(
        private geoplateformeWfsService: GeoplateformeWfsService,
    ) { }

    setLayerDessin(layer: any) {
        this.layerDessin = layer;
    };

    getParcel(coordinate: Array<number>,) {
        let subscribe = true;
        let featuresAtCoord = this.layerDessin.getSource().getFeaturesAtCoordinate(coordinate);
        //si la feature de la parcelle existe déjà, on la supprime 
        if(featuresAtCoord.length) {
            for(let i in featuresAtCoord) {
                if(featuresAtCoord[i].get('isParcel')) {
                    this.layerDessin.getSource().removeFeature(featuresAtCoord[i]);
                    subscribe = false;
                }
            }
        }
        //sinon, on lance la requête pour pouvoir la créer
        if(subscribe) {
            this.getFeatures(coordinate).subscribe();
        }
    };

    getFeatures(coordinate: Array<number>): Observable<any> {
    const request:any = this.geoplateformeWfsService.buildRequest()
        .fromLayer('CADASTRALPARCELS.PARCELLAIRE_EXPRESS:parcelle')
        .setIntersectsPointFilter('geom', coordinate);

    return this.geoplateformeWfsService.getFeatures(request.getRequest()).pipe(
            map((response) => {
                const features = response.features || [];
                return features.map((feature: any) =>this.createParcel(feature));
            })
            )
    };

    createParcel(feature: any): any {
        if(!feature || !feature.geometry) {
            return;
        }

        let coord = feature.geometry.coordinates[0];
        for(let i in coord) {
            for(let j in coord[i]) {
                coord[i][j] = fromLonLat(coord[i][j]);
            }
        }

        let parcel = new Feature({
            geometry: new Polygon(coord),
            isParcel: true
        });

         this.layerDessin.getSource().addFeature(parcel);
    };
}
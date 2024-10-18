import { Injectable } from "@angular/core";
import { Foret } from "../models/foret";

@Injectable({
    providedIn: 'root'
})

export class ForetsService {

    private foret: Foret = {
        id: 1,
        name: 'Ma foret',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec gravida justo. Morbi ullamcorper ullamcorper eros, ac ultricies turpis gravida quis.',
        tags: [ 'tag 1', 'tag 2'],
        imgUrl:  'https://cdn.sortiraparis.com/images/80/98390/934396-je-s-appelle-groot-une-bande-annonce-pour-la-saison-2-disponible-en-septembre-sur-disney.jpg',
        area: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
        parcels: ['parcelle 1', 'parcelle 2']
    };

    private forets: Foret[] = [
        this.foret,
        this.foret,
    ];

    getForets() {
        return [...this.forets];
    }

}
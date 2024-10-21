import { Injectable } from '@angular/core';
import { Foret } from '../models/foret.model';
import { DsfrTag } from '@edugouvfr/ngx-dsfr';
import { ExtendDatePipe } from '../pipes/extend-date.pipe';

@Injectable({
    providedIn: 'root'
})


export class ForetCardTransformerService {

    constructor(
        private datePipe: ExtendDatePipe
    ){}

    transform(foret: Foret){

        const tags: DsfrTag[] = [];
        foret.tags.forEach( tag => {
            const dsfrTag: DsfrTag = { label: tag }
            tags.push(dsfrTag);
        });

        // console.log(this.datePipe.transform(foret.updatedAt, 'dd/MM/YYY'))
    
        const foretCard = {
            id: foret.id,
            name: foret.name,
            description: foret.description,
            tags: tags,
            imgUrl: foret.imgUrl,
            area: foret.area,
            createdAt: foret.createdAt,
            updatedAt: this.datePipe.transform(foret.updatedAt, 'dd/MM/YYYY'),
            parcels: foret.parcels,
        };

        return foretCard;
    }
}
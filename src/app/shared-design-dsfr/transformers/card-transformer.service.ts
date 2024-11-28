import { Injectable } from '@angular/core';
import { Foret } from '../../shared/models/foret.model';
import { ExtendDatePipe } from '../../shared/pipes/extend-date.pipe';

@Injectable({
  providedIn: 'root'
})
export class CardTransformerService {

  constructor(
    private datePipe: ExtendDatePipe
  ) { }

  fromForet(foret: Foret) {
    const tags: any[] = foret.tags.map((tag) => {
      return { label: tag };
    });

    const updatedAt = this.datePipe.transform(foret.updatedAt, 'dd/MM/YYYY');

    const cardDescription = `
      <p><b>${foret.area} ha</b></p>
      <p><b>${foret.parcels.length} parcelles</b></p>
      <p><b>Mis à jour le ${updatedAt}</b></p>
    `;

    const foretCard = {
      id: foret.id,
      heading: foret.name,
      description: cardDescription,
      tags: tags,
      imagePath: foret.imgUrl,
      enlargeLink: false,
      hasFooter: true,
      horizontal: true,
    };

    return foretCard;
  }
}

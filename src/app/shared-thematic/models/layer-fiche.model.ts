import { Serializable } from '../../core/models/serializable.model';

export class LayerFiche implements Serializable {

  id: string = '';

  title: string = '';

  // wfs result name
  name: string = '';

  // wfs request name
  technicalName: string = '';

  group: string = '';

  features: any[] = [];

  restrictions: any[] = [];

  // uniquement a l'execution du front (permet de suivre l'affichage d'une carte de situation)
  displaySituationMap: boolean = false;

  constructor() { }

  deserialise(input: any) {
    Object.assign(this, {
      id: input.id,
      title: input.title,
      name: input.name,
      technicalName: input.technicalName,
      group: input.group,
      features: input.features || [],
      restrictions: input.restrictions || [],
      displaySituationMap: input.displaySituationMap || false
    });
    return this;
  }

  serialise() {
    return {
      id: this.id,
      title: this.title,
      name: this.name,
      technicalName: this.technicalName,
      group: this.group,
      features: this.features,
      restrictions: this.restrictions,
      displaySituationMap: this.displaySituationMap
    };
  }

}
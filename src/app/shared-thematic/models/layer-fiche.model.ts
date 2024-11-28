import { Serializable } from '../../core/models/serializable.model';

export class LayerFiche implements Serializable {

  title: string = '';

  group: string = '';

  technicalName: string = '';

  features: any[] = [];

  // uniquement a l'execution du front (permet de suivre l'affichage d'une carte de situation)
  flatview: boolean = false;

  constructor() { }

  deserialise(input: any) {
    Object.assign(this, {
      title: input.title,
      group: input.group,
      technicalName: input.technicalName,
      flatview: input.flatview || false,
      features: input.features || []
    });
    return this;
  }

  serialise() {
    return {
      title: this.title,
      group: this.group,
      technicalName: this.technicalName,
      flatview: this.flatview,
      features: this.features
    };
  }

}
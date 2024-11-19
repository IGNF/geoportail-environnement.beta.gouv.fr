import { Serializable } from '../../core/models/serializable.model';

export class FicheInfo implements Serializable {

  name: string = '';

  title: string = '';

  label: string = '';

  active: boolean = true;

  layers: any[] = [];

  features: any[] = [];

  constructor() { }

  deserialise(input: any) {
    Object.assign(this, {
      name: input.name,
      title: input.title,
      label: input.label,
      active: input.active,
      layers: input.layers,
      features: input.features
    });
    return this;
  }

  serialise() {
    return {
      name: this.name,
      title: this.title,
      label: this.label,
      active: this.active,
      layers: this.layers,
      features: this.features
    };
  }

}
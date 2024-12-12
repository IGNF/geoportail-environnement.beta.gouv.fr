import { Serializable } from '../../core/models/serializable.model';
import { LayerFiche } from './layer-fiche.model';

export class Thematic implements Serializable {

  name: string = '';

  title: string = '';

  label: string = '';

  layers: LayerFiche[] = [];

  hasFeature : boolean = false;

  // uniquement a l'execution du front (permet de suivre la sélection par l'utilisateur)
  active: boolean = true;

  constructor() { }

  deserialise(input: any) {
    let layers = [];
    if (input.layers) {
      layers = input.layers.map((layer: any) => new LayerFiche().deserialise(layer));
    }
    Object.assign(this, {
      name: input.name,
      title: input.title,
      label: input.label,
      active: input.active,
      layers: layers
    });
    return this;
  }

  serialise() {
    const layers = this.layers.map((layer: any) => layer.serialise());
    return {
      name: this.name,
      title: this.title,
      label: this.label,
      active: this.active,
      layers: layers
    };
  }

  setHasFeature() {
    let res = false;

    for(let i = 0; i < this.layers.length; i++) {
      if(this.layers[i].features.length) {
        res = true;
        break;
      }
    }

    this.hasFeature = res;
  }

}
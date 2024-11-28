import { Serializable } from '../../core/models/serializable.model';

export class Foret implements Serializable {

  id: string = '';

  name: string = '';

  adresse: any = {};

  description: string = '';

  tags: Array<string> = [];

  parcels: Array<string> = [];

  imgUrl: string = '';

  area: number = 0;

  createdAt: Date = new Date();

  updatedAt: Date = new Date();

  geometry: any = {};

  constructor() { }

  deserialise(input: any) {
    Object.assign(this, {
      id: input.id,
      name: input.name,
      adresse: input.adresse,
      description: input.description,
      tags: input.tags,
      parcels: input.parcels,
      imgUrl: input.imgUrl,
      area: input.area,
      createdAt: input.createdAt,
      updatedAt: input.updatedAt,
      geometry: input.geometry
});
    return this;
  }

  serialise() {
    return {
      id: this.id,
      name: this.name,
      adresse: this.adresse,
      description: this.description,
      tags: this.tags,
      parcels: this.parcels,
      imgUrl: this.imgUrl,
      area: this.area,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      geometry: this.geometry
    };
  }

}
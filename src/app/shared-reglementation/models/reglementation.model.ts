import { Serializable } from '../../core/models/serializable.model';

export class Reglementation implements Serializable {

  thematicName: string = '';
  
  layerName: string = '';

  title: string = '';
  
  // rich html content
  description: string = '';
  
  // rich html content
  impactReglementaire	: string = '';
  
  // rich html content
  impactProcedure	: string = '';
  
  // must be http URI
  referenceUrl: string = '';
  
  contact: string = '';

  constructor() { }

  deserialise(input: any) {
    Object.assign(this, {
      thematicName: input.thematicName,
      layerName: input.layerName,
      title: input.title,
      description: input.description,
      impactReglementaire: input.impactReglementaire,
      impactProcedure: input.impactProcedure,
      referenceUrl: input.referenceUrl,
      contact: input.contact
    });
    return this;
  }

  serialise() {
    return {
      thematicName: this.thematicName,
      layerName: this.layerName,
      title: this.title,
      description: this.description,
      impactReglementaire: this.impactReglementaire,
      impactProcedure: this.impactProcedure,
      referenceUrl: this.referenceUrl,
      contact: this.contact
    };
  }

}
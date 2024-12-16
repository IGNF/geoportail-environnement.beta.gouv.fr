import { Serializable } from '../../core/models/serializable.model';

export class Contact implements Serializable {

  name: string = '';
  
  address: string = '';

  website: string = '';
  
  mail: string = '';

  contactForm: string = '';
  
  telephone: string = '';
  
  constructor() { }

  deserialise(input: any) {
    const adresse = input.adresse ? JSON.parse(input.adresse)[0] : '';
    const adresseString = `${adresse.numero_voie} ${adresse.complement1} ${adresse.complement2} ${adresse.code_postal} ${adresse.nom_commune}`;
    const website = input.site_internet ? JSON.parse(input.site_internet)[0].valeur : '';
    const telephone = input.telephone ? JSON.parse(input.telephone)[0].valeur : '';
    Object.assign(this, {
      name: input.nom,
      address: adresseString,
      website: website,
      mail: input.adresse_courriel,
      contactForm : input.formulaire_contact,
      telephone: telephone
    });
    return this;
  }

  serialise() {
    return {
      name: this.name,
      address: this.address,
      website: this.website,
      mail: this.mail,
      contactForm : this.contactForm,
      telephone: this.telephone
    };
  }

}
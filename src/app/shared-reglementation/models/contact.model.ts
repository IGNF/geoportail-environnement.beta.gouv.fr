import { Serializable } from '../../core/models/serializable.model';

export class Contact implements Serializable {

  name: string = '';
  
  address: string = '';

  website: string = '';
  
  mail: string = '';

  contactForm: string = '';
  
  tel	: string = '';
  
  constructor() { }

  deserialise(input: any) {
    Object.assign(this, {
      name: input.name,
      address: input.address,
      website: input.website,
      mail: input.mail,
      contactForm : input.contactForm,
      tel: input.tel
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
      tel: this.tel
    };
  }

}
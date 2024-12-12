import { Serializable } from "../../core/models/serializable.model";

export class ApiAnnuaireRequest implements Serializable {

  where: string[] = [];

  deserialise(input: any) {
    Object.assign(this, {
      where: input.where || []
    });
    return this;
  }


  serialise(): any {
    const filter = this.where.join(' AND ');
    return {
      where: filter
    };
  }


}

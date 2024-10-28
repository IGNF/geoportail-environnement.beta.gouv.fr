import { Serializable } from "../../core/models/serializable.model";

export class WfsRequest implements Serializable {

  service: string = 'WFS';
  version: string = '2.0.0';
  request: string = 'GetFeature';
  srsName: string = 'CRS:84';
  outputFormat: string = 'application/json';
  maxFeatures: number = 50;
  typeName: string = '';
  cqlFilters: string[] = [];

  deserialise(input: any) {
    Object.assign(this, {
      service: input.service,
      version: input.version,
      request: input.request,
      srsName: input.srsName,
      outputFormat: input.outputFormat,
      maxFeatures: input.maxFeatures || 50,
      typeName: input.typeName,
      cqlFilters: input.cqlFilters || []
    });
    return this;
  }


  serialise(): any {
    const filter = this.cqlFilters.join(' AND ');
    return {
      service: this.service,
      version: this.version,
      request: this.request,
      // srsName: this.srsName,
      outputFormat: this.outputFormat,
      maxFeatures: this.maxFeatures,
      typeName: this.typeName,
      cql_filter: filter
    };
  }


}

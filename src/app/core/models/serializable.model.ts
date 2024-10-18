export interface Serializable {
  serialise(): any;
  deserialise(input: any): any;
}

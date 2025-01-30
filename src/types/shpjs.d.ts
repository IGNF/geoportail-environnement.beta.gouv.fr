declare module 'shpjs' {
  const shp: {
    (file: string | Blob | ArrayBuffer): Promise<any>;
    parseZip(buffer: ArrayBuffer): Promise<any>;
    read(buffer: ArrayBuffer): Promise<any>;
  };
  export default shp;
}

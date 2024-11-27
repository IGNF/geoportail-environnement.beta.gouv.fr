import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TileTranformerService {

  constructor() { }
  
  fromOptions(options: any): any {
    return {
      customBackground: options.customBackground,
      customBorder: options.customBorder,
      description: options.description,
      disabled: options.disabled,
      downloadDirect: options.downloadDirect,
      downloadAssessFile: options.downloadAssessFile,
      enlargeLink: options.enlargeLink,
      heading: options.heading,
      headingLevel: options.headingLevel,
      horizontal: options.horizontal,
      route: options.route,
      size: options.size,
      download: options.download,
      artworkDirPath: options.artworkDirPath,
      artworkFilePath: options.artworkFilePath,
      detail: options.detail,
    }
  };
  
}

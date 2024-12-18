import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbTransformerService {

  constructor() { }

  fromOptions(options: any = {}): any {
    const items: any[] = [
      { label: 'Accueil', route: '/' },
    ];
    if (options.label) {
      items.push({
        label: options.label,
        route: options.route
      });
    }
    if (options.items) {
      items.push(...options.items);
    }
    return {
      items: items
    };
  }

}

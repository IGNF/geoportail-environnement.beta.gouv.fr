import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  serviceTitle = 'Foreg';

  serviceTagline = 'Visualiser les réglementations en forêt';

  logoTooltipMessage = '';

  headerToolsLinks: any = [];

  menuHeader: any = [];

  constructor() { }

  searchSelect(event: any) {
    console.log('searchSelect', event);
  }

}

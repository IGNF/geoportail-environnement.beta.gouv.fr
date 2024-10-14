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

  operatorImagePath='img/foreg-icon.png';

  headerToolsLinks: any = [
    { label: 'Aide', routerLink: '/help', routerLinkActive: 'class-active' },
    { label: 'Espace particulier', icon: 'fr-btn--account', routerLink: '/login', routerLinkActive: 'class-active' },
  ];

  menuHeader: any = [];

  constructor() { }

  searchSelect(event: any) {
    console.log('searchSelect', event);
  }

}

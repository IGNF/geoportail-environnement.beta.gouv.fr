import { Component } from '@angular/core';

import { environment } from '../../../environments/environment';
import { TokenService } from '../../shared/services/token.service';
import { LoginService } from '../../shared/services/login.service';

const DEFAULT_HEADER_TOOLS_LINKS = [
  { label: 'Aide', routerLink: '/help', routerLinkActive: 'class-active' }
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  serviceTitle = 'Foreg';

  serviceTagline = 'Visualiser les réglementations en forêt';

  logoTooltipMessage = '';

  operatorImagePath = 'img/foreg-icon.png';

  headerToolsLinks: any = DEFAULT_HEADER_TOOLS_LINKS;

  menuHeader: any = [
    { label: 'Découvrir', routerLink: '/accueil' },
    { label: 'Nouvelle requête', routerLink: '/requete/nouvelle' },
    { label: 'Mes forêts', routerLink: '/mes-forets' },
  ];

  constructor(
    private tokenService: TokenService,
    private loginService: LoginService
  ) { }

  searchSelect(event: any) { }

  ngOnInit() {
    // TODO subscribe to change user event
    this.headerToolsLinks = this.logoutHeadersToolsLinks();
    if (this.tokenService.hasToken()) {
      this.loginService.getUserInfo().subscribe((user: any) => {
        this.headerToolsLinks = this.connectedHeadersToolsLinks(user);
      });
    }
  }

  private connectedHeadersToolsLinks(user: any) {
    return [
      { label: 'Aide', routerLink: '/help', routerLinkActive: 'class-active' },
      { label: user.email, routerLink: '/mes-forets', routerLinkActive: 'class-active', icon: 'fr-icon-lock-line' }
    ];
  }

  private logoutHeadersToolsLinks() {
    return [
      { label: 'Aide', routerLink: '/help', routerLinkActive: 'class-active' },
      { label: 'Connexion', icon: 'fr-btn--account', link: environment.loginUrl, target: '_blank', routerLinkActive: 'class-active' }
    ];
  }

}

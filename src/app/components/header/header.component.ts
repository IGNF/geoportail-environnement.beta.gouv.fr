import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

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

  // boutons du header toujours affichés
  headerToolsLinks: any = [
    { label: 'Aide', routerLink: '/help', routerLinkActive: 'class-active' },
  ];

  menuHeader: any = [];

  constructor(private apiService: ApiService) { }

  searchSelect(event: any) { }

  ngOnInit() {
    this.apiService.getMe().subscribe((response) => {
      console.log(response);
      if (response.email){
        // connecté
        this.headerToolsLinks.push(
          { label: response.email, route: '#', icon: 'fr-icon-lock-line' }
        );
      } else {
        // non connecté
        this.headerToolsLinks.push(
          { label: 'Connexion', icon: 'fr-btn--account', link: environment.loginUrl, routerLinkActive: 'class-active' },
        );
      }
    });
      // this.apiService.getMe( (response: any) => {
      //   if (response.error){
      //     // non connecté
      //     this.headerToolsLinks.push(
      //       { label: 'Connexion', icon: 'fr-btn--account', link: environment.loginUrl, routerLinkActive: 'class-active' },
      //     );
      //   } else {
      //     // connecté
      //     this.headerToolsLinks.push(
      //       { label: response.email, route: '#', icon: 'fr-icon-lock-line' }
      //     );
      //   }
      // });
  }

}

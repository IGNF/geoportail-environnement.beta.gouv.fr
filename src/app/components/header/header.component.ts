import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../shared/services/api.service';

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

  headerToolsLinks: any = [
    { label: 'Aide', routerLink: '/help', routerLinkActive: 'class-active' },
    { label: 'Connexion', icon: 'fr-btn--account', link: environment.loginUrl, routerLinkActive: 'class-active' },
  ];

  headerToolsLinks2 = [
    {label: 'Créer un espace', icon: 'fr-icon-add-circle-line'}, 
    {mode: 'button', label: 'Thème', customClass: 'fr-icon-theme-fill', ariaControls: 'theme-modal-id'}, 
    {label: 'Se connecter', route: '#', icon: 'fr-icon-lock-line'}
  ]


  menuHeader: any = [];

  constructor(private apiService: ApiService) { }

  searchSelect(event: any) { }

  ngOnInit() {
      this.apiService.getMe( (response: any) => {
        console.log(response)
        if (response.error){
          console.log('pas connecté')
        } else {
          console.log("connecté - mettre à jour l'affichage")
        }
      });
  }

}

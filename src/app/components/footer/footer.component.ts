import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  presentation = `
    <p><strong>foreg.beta.gouv.fr</strong></p>
    <p>
      Trouver simplement la réglementation applicable dans une forêt </br>
      et contribuer à préserver la biodiversité. 
    </p>
  `;

  govLinks: any = [
    { label: 'info.gouv.fr', link: 'https://info.gouv.fr/', target: '_blank' },
    { label: 'service-public.fr', link: 'https://service-public.fr/', target: '_blank' },
    { label: 'legifrance.gouv.fr', link: 'https://legifrance.gouv.fr/', target: '_blank' },
    { label: 'data.gouv.fr', link: 'https://data.gouv.fr/', target: '_blank' },
  ];

  institutionalLinks: any = [
    { label: 'Institut national de l\'information géographique et forestière', link: 'https://www.ign.fr/', target: '_blank' },
    { label: 'Office national des forêts', link: 'https://www.ign.fr/', target: '_blank' },
    { label: 'Office français de la biodiversité', link: 'https://www.ign.fr/', target: '_blank' },
    { label: 'Centre national de la propriété forestière', link: 'https://www.ign.fr/', target: '_blank' },
    { label: 'France Bois Forêt', link: 'https://www.ign.fr/', target: '_blank' },
    { label: 'Ministère de la Transition écologique et de la Cohésion des territoires', link: 'https://www.ign.fr/', target: '_blank' },
    { label: 'Ministère de l\'Agriculture et de la Souveraineté alimentaire', link: 'https://www.ign.fr/', target: '_blank' },
  ];

  mandatoryLinks: any = [
    { label: 'Déclaration d\'accessiblité', route: 'accessibilite' },
    { label: 'Mentions légales', route: 'mentions-legales' },
    { label: 'Données personnelles', link: 'https://www.ign.fr/institut/donnees-caractere-personnel', target: '_blank' },
    { label: 'Gestion des cookies', route: 'cookies-et-statistiques' }
  ];

  reboundLinks: any = [];

  license = `
    Sauf mention explicite de propriété intellectuelle détenue par des tiers,
    les contenus de ce site sont proposés sous license etalab-2.0
  `;

  constructor(
    private router: Router
  ) { }

  linkSelect(event: any) { 
    if(event == "https://www.ign.fr/institut/donnees-caractere-personnel") {
      return;
    }
    this.router.navigate(['/', event]);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  presentation = `
    <p><strong>foreg.beta.gouv.fr</strong></p>
    <p>
      Texte optionnel 3 lignes maximum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Consectetur et vel quam auctor semper. Cras si amet mollis dolor.
    </p>
  `;

  govLinks: any = [
    { label: 'info.gouv.fr', link: 'https://info.gouv.fr/', target: '_blank' },
    { label: 'service-public.fr', link: 'https://service-public.fr/', target: '_blank' },
    { label: 'legifrance.gouv.fr', link: 'https://legifrance.gouv.fr/', target: '_blank' },
    { label: 'data.gouv.fr', link: 'https://data.gouv.fr/', target: '_blank' },
  ];

  institutionalLinks: any = [
    { label: 'Institut national de l’information géographique et forestière', link: 'https://www.ign.fr/', target: '_blank' },
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
    { label: 'Données personnelles', route: 'donnees-a-caractere-personnel' },
    { label: 'Gestion des cookies', route: 'cookies-et-statistiques' },
    { label: 'Plan du site', route: '' }
  ];

  reboundLinks: any = [];

  license = `
    Sauf mention explicite de propriété intellectuelle détenue par des tiers,
    les contenus de ce site sont proposés sous license etalab-2.0
  `;

  constructor() { }

  linkSelect(event: any) { 
    window.location.href = event;
  }

}

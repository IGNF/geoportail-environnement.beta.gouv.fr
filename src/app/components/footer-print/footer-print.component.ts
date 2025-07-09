import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-footer-print',
  templateUrl: './footer-print.component.html',
  styleUrl: './footer-print.component.css'
})
export class FooterPrintComponent {

  presentation = `
    <p><strong>foreg.beta.gouv.fr</strong></p>
    <p>
      Trouver simplement la réglementation applicable dans une forêt </br>
      et contribuer à préserver la biodiversité. 
    </p>
  `;

  license = `
    Sauf mention explicite de propriété intellectuelle détenue par des tiers,
    les contenus de ce site sont proposés sous license etalab-2.0
  `;

  constructor(
  ) { }

}

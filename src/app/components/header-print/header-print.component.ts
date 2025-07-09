import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header-print',
  templateUrl: './header-print.component.html',
  styleUrl: './header-print.component.css'
})
export class HeaderPrintComponent {

  serviceTitle = 'Foreg';

  serviceTagline = 'Visualiser les réglementations en forêt';

  operatorImagePath = 'img/foreg-icon.png';

  constructor(
  ) { }

  searchSelect(event: any) { }

  ngOnInit() {
  }

}

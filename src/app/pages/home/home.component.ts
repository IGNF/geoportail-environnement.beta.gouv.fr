import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router: Router
  ) { }

  newRequete() {
    this.router.navigate(['/', 'requete', 'nouvelle']);
  }

}

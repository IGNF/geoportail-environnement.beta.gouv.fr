import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

  @Input() breadcrumb!: any;

  constructor(
    private router: Router
  ) { }

  navigateTo(route: any) {
    if (!route) {
      return;
    }
    this.router.navigate([route]);
  }

}

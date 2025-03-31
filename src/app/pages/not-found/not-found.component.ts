import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  heading: string = 'Page ou ressource inexistante';

  detail: string = '';

  description: string = '';

  errorCode: number = 404;

  constructor() { }

}

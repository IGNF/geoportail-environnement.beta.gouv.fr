import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title: string = 'Géoportail de l\'environnement';

  skiplinks: any[] = [
    { label: 'Contenu', route: 'content' },
    { label: 'Menu', route: 'header-navigation' },
    { label: 'Pied de page', route: 'footer' }
  ];

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      const accessibleTitle = document.getElementById('title-page');
      if (accessibleTitle) {
        this.title = document.title;
        accessibleTitle.focus();
      }
    });
  }


  skipLinkSelect(event: any) {
    const parsed = this.router.parseUrl(this.router.url);
    this.router.navigate(parsed.root.segments, {
      queryParams: parsed.queryParams,
      fragment: event
    });
    const anchorToFocus = document.getElementById(event);
    if (anchorToFocus) {
      anchorToFocus.focus();
    }
  }

}

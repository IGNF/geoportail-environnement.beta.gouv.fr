import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import template from '../../../assets/simple-pages-template';
import { DsfrBreadcrumbComponent } from '@edugouvfr/ngx-dsfr';

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrl: './simple-page.component.css'
})

export class SimplePageComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ){}

  content!: string;
  pageTitle!: string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const path = this.route.snapshot.routeConfig?.path

    switch(path){
      case 'accessibilite':
        this.content = template.accessibilite;
        this.pageTitle = 'Déclaration d\'accessibilité'
        break;
      case 'mentions-legales':
        this.content = template.mentions;
        this.pageTitle = 'Mentions légales'
        break;
      case 'donnees-a-caractere-personnel':
        this.content = template.personnel;
        this.pageTitle = 'Données à caractère personnel'

        break;
      case 'cookies-et-statistiques':
        this.content = template.cookies;
        this.pageTitle = 'Cookies et statistiques'
        break;
    }

  }
}

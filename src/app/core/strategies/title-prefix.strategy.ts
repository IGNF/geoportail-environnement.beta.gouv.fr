import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitlePrefixStrategy extends TitleStrategy {

  constructor(private title: Title) {
    super();
  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    let content = title ? `${title} - ` : '';
    content += 'Géoportail de l\'environnement';
    this.title.setTitle(content);
  }

}

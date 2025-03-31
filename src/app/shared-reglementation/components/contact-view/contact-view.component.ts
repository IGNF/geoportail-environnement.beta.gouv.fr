import { Component, Input, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';

import { Contact } from '../../models/contact.model';
import { InseeService } from '../../services/insee.service';
import { AnnuairePublicService } from '../../services/annuaire-public.service';

@Component({
  standalone: false,
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent implements OnInit {

  @Input() contactReference: string[] = [];

  @Input() contactReferenceLayer: string = '';

  contacts!: Contact[];

  constructor(
    private inseeService: InseeService,
    private annuairePublicService: AnnuairePublicService
  ) { }

  ngOnInit() {
    if (!(this.contactReferenceLayer && this.contactReference.length)) {
      return;
    }
    this.inseeService.reverseGeocadageInsee(this.contactReferenceLayer).pipe(
      switchMap((inseeList) => this.annuairePublicService.getContacts(this.contactReference, inseeList)),
      map((contacts: any) => {
        this.contacts = contacts;
      })
    ).subscribe();
  }

}

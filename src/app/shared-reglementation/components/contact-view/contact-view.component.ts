import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent implements OnInit {

  @Input() contactReference: string[] = [];

  @Input() contactReferenceLayer: string = '';

  @Input() contacts?: Contact[];

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    if(this.contactReferenceLayer && this.contactReference.length) {
      this.contactService.getInseeCode(this.contactReferenceLayer).subscribe((response) => {
        let inseeCodeArray = response.map((resp:any) => resp.properties.code_insee);

        this.contactService.getContacts(this.contactReference, inseeCodeArray).subscribe((response) => {
          this.contacts = response.filter((resp:any) => resp[0]).map((resp:any) => new Contact().deserialise(resp[0]))
        });
      });
    }
  }

}

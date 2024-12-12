import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent implements OnInit {

  @Input() contactReference: string = '';

  @Input() contactReferenceLayer: string = '';

  @Input() contact?: Contact;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    if(this.contactReferenceLayer) {
      this.contactService.getInseeCode(this.contactReferenceLayer).subscribe((response) => {
        let inseeCode = response[0].properties.code_insee;
        this.contactService.getContact(this.contactReference, inseeCode).subscribe((response) => {
          this.contact = new Contact().deserialise(response[0]);
        })
      });
    }
  }

}

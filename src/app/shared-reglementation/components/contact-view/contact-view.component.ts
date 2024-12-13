import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../service/contact.service';
import { map, Observable, zip } from 'rxjs';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent implements OnInit {

  @Input() contactReference: string[] = [];

  @Input() contactReferenceLayer: string = '';

  @Input() contact?: Contact;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    if(this.contactReferenceLayer && this.contactReference.length) {
      this.contactService.getInseeCode(this.contactReferenceLayer).subscribe((response) => {
        let inseeCode = response[0].properties.code_insee;
        this.contactService.getContact(this.contactReference[0], inseeCode).subscribe((response) => {
          this.contact = new Contact().deserialise(response[0]);
        })
      });
    }

    // if(this.contactReferenceLayer && this.contactReference.length) {
    //   this.contactService.getInseeCode(this.contactReferenceLayer).subscribe((response) => {
    //     let inseeCode = response[0].properties.code_insee;

    //     let request : Observable<any>[] = [];
    //     for(let i = 0; i < this.contactReference.length; i++) {
    //       request.push(this.contactService.getContact(this.contactReference[i], inseeCode))
    //     }

    //     zip(request).pipe(map((contactByref) => {
    //       console.log(contactByref);
    //     }));

    //     // this.contactService.getContact(this.contactReference[0], inseeCode).subscribe((response) => {
    //     //   this.contact = new Contact().deserialise(response[0]);
    //     // })
    //   });
    // }
  }

}

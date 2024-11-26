import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-requete-printer',
  templateUrl: './requete-printer.component.html',
  styleUrl: './requete-printer.component.css',
})
export class RequetePrinterComponent implements OnInit {
  @Input() flatview: boolean = true;
  forestId: string = '';

  constructor( ) {}

  ngOnInit(): void { }


}

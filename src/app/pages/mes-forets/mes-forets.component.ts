import { Component, OnInit } from '@angular/core';
import { Foret } from '../../shared/models/foret';
import { ForetsService } from '../../shared/services/forets.service';

@Component({
  selector: 'app-mes-forets',
  templateUrl: './mes-forets.component.html',
  styleUrl: './mes-forets.component.css'
})
export class MesForetsComponent implements OnInit{
  forets!: Foret[];
  constructor( private foretsService: ForetsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.forets = this.foretsService.getForets();
  }
}

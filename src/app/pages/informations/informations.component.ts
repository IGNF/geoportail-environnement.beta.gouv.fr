import { Component, OnInit } from '@angular/core';
import {THEMATIC_LIST} from '../../shared-thematic/models/thematic-list.enum'

@Component({
  standalone: false,
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.css'
})
export class InformationsComponent implements OnInit {

  thematicList: any = THEMATIC_LIST;

  constructor() {}

  ngOnInit(): void {
  }
}

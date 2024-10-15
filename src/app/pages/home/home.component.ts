import { Component } from '@angular/core';
import { EnqueteService } from '../../shared/enquete.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  step: number = 0;

  constructor(
    private enqueteService: EnqueteService
  ) { }


  nextStep() {
    console.log('nextStep', this.step);
    this.step++;
    this.enqueteService.updateEtape(this.step);
  }

  previousStep() {
    console.log('previousStep', this.step);
    this.step--;
    this.enqueteService.updateEtape(this.step);
  }

}

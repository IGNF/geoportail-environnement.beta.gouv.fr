import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export const STEPPER_CONFIG = [
  { currentStep: 1, currentStepTitle: 'Préciser le périmètre', nextStepTitle: 'Visualiser les informations' },
  { currentStep: 2, currentStepTitle: 'Visualiser les informations', nextStepTitle: 'Exporter les informations' },
  { currentStep: 3, currentStepTitle: 'Exporter les informations', nextStepTitle: 'Aucune' },
];

@Component({
  standalone: false,
  selector: 'app-requete-stepper',
  templateUrl: './requete-stepper.component.html',
  styleUrl: './requete-stepper.component.css'
})
export class RequeteStepperComponent implements OnInit, OnChanges {

  @Input() step: number = 1;

  currentStep!: number;

  currentStepTitle!: string;

  nextStepTitle!: string;

  constructor() { }

  ngOnInit(): void {
    this.updateStep();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateStep();
  }

  updateStep() {
    if (this.step > 3) {
      this.step = 3;
    }
    if (this.step < 0) {
      this.step = 0;
    }
    this.currentStep = STEPPER_CONFIG[this.step].currentStep;
    this.currentStepTitle = STEPPER_CONFIG[this.step].currentStepTitle;
    this.nextStepTitle = STEPPER_CONFIG[this.step].nextStepTitle;
  }

}

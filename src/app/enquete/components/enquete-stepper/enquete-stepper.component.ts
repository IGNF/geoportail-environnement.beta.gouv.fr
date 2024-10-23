import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

const STEPPER_CONFIG = [
  { currentStep: 1, currentStepTitle: 'Localiser la forêt', nextStepTitle: 'Préciser le périmètre de la forêt' },
  { currentStep: 2, currentStepTitle: 'Préciser le périmètre', nextStepTitle: 'Sélectionner les informations' },
  { currentStep: 3, currentStepTitle: 'Sélectionnez les informations', nextStepTitle: 'Exporter les informations' },
  { currentStep: 4, currentStepTitle: 'Exporter les informations', nextStepTitle: 'Aucune' },
];

@Component({
  selector: 'app-enquete-stepper',
  templateUrl: './enquete-stepper.component.html',
  styleUrl: './enquete-stepper.component.css'
})
export class EnqueteStepperComponent implements OnInit, OnChanges {

  @Input() step: number = 0;

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

import { Component, Input, OnInit } from '@angular/core';

const STEPPER_CONFIG = [
  { currentStep: 1, currentStepTitle: 'Localiser la forêt', nextStepTitle: 'Préciser le périmètre de la forêt' },
  { currentStep: 2, currentStepTitle: 'Préciser le périmètre', nextStepTitle: 'Sélectionner les informations' },
  { currentStep: 3, currentStepTitle: 'Sélectionnez les informations', nextStepTitle: 'Exporter les informations' },
  { currentStep: 4, currentStepTitle: 'Exporter les informations', nextStepTitle: 'Aucune' },
];

@Component({
  selector: 'app-foret-stepper',
  templateUrl: './foret-stepper.component.html',
  styleUrl: './foret-stepper.component.css'
})
export class ForetStepperComponent implements OnInit {

  @Input() step: number = 0;

  currentStep!: number;

  currentStepTitle!: string;

  nextStepTitle!: string;

  constructor() { }

  ngOnInit(): void {
    this.currentStep = STEPPER_CONFIG[this.step].currentStep;
    this.currentStepTitle = STEPPER_CONFIG[this.step].currentStepTitle;
    this.nextStepTitle = STEPPER_CONFIG[this.step].nextStepTitle;
    console.log('ForetStepperComponent', this.currentStep, this.currentStepTitle, this.nextStepTitle);
  }

}

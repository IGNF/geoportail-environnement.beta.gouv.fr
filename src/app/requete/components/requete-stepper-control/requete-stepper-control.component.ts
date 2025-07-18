import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { STEPPER_CONFIG } from '../requete-stepper/requete-stepper.component';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-requete-stepper-control',
  templateUrl: './requete-stepper-control.component.html',
  styleUrl: './requete-stepper-control.component.css'
})
export class RequeteStepperControlComponent implements OnChanges {

  @Input() step: number = 0;

  @Output() next: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() previous: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();

  previousButtonLabel = 'Précédent';

  nextButtonLabel = 'Suivant';

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['step']) {
      this.updateButtonLabel();
    }
  }

  emitNext() {
    this.next.emit(true);
    // Marque le composant pour réévaluation lors du prochain cycle de détection
    this.cdr.markForCheck();

  }

  emitPrevious() {
    this.previous.emit(true);
    this.cdr.markForCheck();
  }


  emitSave() {
    this.save.emit(true);
  }

  emitPrint() {
    this.router.navigate(['/', 'requete', 'nouvelle', 'impression']);
  };


  private updateButtonLabel() {
    if (this.step > 0) {
      this.previousButtonLabel = STEPPER_CONFIG[this.step - 1].currentStepTitle;
    }
    this.nextButtonLabel = STEPPER_CONFIG[this.step].nextStepTitle;
  }

}

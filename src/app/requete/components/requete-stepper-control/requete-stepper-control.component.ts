import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-requete-stepper-control',
  templateUrl: './requete-stepper-control.component.html',
  styleUrl: './requete-stepper-control.component.css'
})
export class RequeteStepperControlComponent {

  @Input() step: number = 0;

  @Output() next: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() previous: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

  emitNext() {
    this.next.emit(true);
    // Marque le composant pour réévaluation lors du prochain cycle de détection
    this.cdr.markForCheck();
  }

  emitPrevious() {
    this.previous.emit(true);
    this.cdr.markForCheck();
  }

}

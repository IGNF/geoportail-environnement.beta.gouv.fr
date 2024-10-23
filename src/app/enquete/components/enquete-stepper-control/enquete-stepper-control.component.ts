import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enquete-stepper-control',
  templateUrl: './enquete-stepper-control.component.html',
  styleUrl: './enquete-stepper-control.component.css'
})
export class EnqueteStepperControlComponent {

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

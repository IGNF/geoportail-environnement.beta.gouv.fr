import { Component, EventEmitter, Input, Output, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-next-step',
  templateUrl: './next-step.component.html',
  styleUrl: './next-step.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextStepComponent {

  @Input() step: number = 0;

  @Output() next: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() previous: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

  emitNext() {
    this.next.emit(true);
    this.cdr.markForCheck(); // Marque le composant pour réévaluation lors du prochain cycle de détection
  }

  emitPrevious() {
    this.previous.emit(true);
    this.cdr.markForCheck();
  }

}

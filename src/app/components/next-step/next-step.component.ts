import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-next-step',
  templateUrl: './next-step.component.html',
  styleUrl: './next-step.component.css'
})
export class NextStepComponent {

  @Input() step: number = 0; 

  @Output() next: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() previous: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  emitNext() {
    this.next.emit(true);
  }

  emitPrevious() {
    this.previous.emit(true);
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-foret-search-form',
  templateUrl: './foret-search-form.component.html',
  styleUrl: './foret-search-form.component.css'
})
export class ForetSearchFormComponent implements OnInit {

  form!: FormGroup;

  @Output() search: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      needle: ['']
    });

    this.form.valueChanges.pipe(
      filter(() => this.isValid())
    ).subscribe(() => {
      console.log('ForetSearchFormComponent', 'valueChanges', this.form.value);
    });
  }

  isValid() {
    return this.form.valid;
  }

  validNeedle() {
    this.search.emit();
  }

}

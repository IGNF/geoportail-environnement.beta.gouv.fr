import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-foret-search-form',
  templateUrl: './foret-search-form.component.html',
  styleUrl: './foret-search-form.component.css'
})
export class ForetSearchFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      needle: ['']
    });

    this.form.valueChanges.pipe().subscribe(() => {
      console.log('ForetSearchFormComponent', 'valueChanges', this.form.value)
    })
  }
}

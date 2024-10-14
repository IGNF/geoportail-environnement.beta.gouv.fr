import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForetSearchFormComponent } from './foret-search-form.component';

describe('ForetSearchFormComponent', () => {
  let component: ForetSearchFormComponent;
  let fixture: ComponentFixture<ForetSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForetSearchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForetSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

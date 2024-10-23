import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteNewComponent } from './enquete-new.component';

describe('EnqueteNewComponent', () => {
  let component: EnqueteNewComponent;
  let fixture: ComponentFixture<EnqueteNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnqueteNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnqueteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

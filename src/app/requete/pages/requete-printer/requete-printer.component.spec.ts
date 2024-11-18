import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequetePrinterComponent } from './requete-printer.component';

describe('RequetePrinterComponent', () => {
  let component: RequetePrinterComponent;
  let fixture: ComponentFixture<RequetePrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequetePrinterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequetePrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

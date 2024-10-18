import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneNaturelComponent } from './zone-naturel.component';

describe('ZoneNaturelComponent', () => {
  let component: ZoneNaturelComponent;
  let fixture: ComponentFixture<ZoneNaturelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneNaturelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneNaturelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteExportListComponent } from './requete-export-list.component';

describe('RequeteExportListComponent', () => {
  let component: RequeteExportListComponent;
  let fixture: ComponentFixture<RequeteExportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequeteExportListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequeteExportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

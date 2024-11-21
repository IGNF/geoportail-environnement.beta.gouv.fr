import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FicheInfoViewComponent } from './fiche-info-view.component';
import { appConfig } from '../../../app.config';

describe('FicheInfoViewComponent', () => {
  let component: FicheInfoViewComponent;
  let fixture: ComponentFixture<FicheInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FicheInfoViewComponent],
      providers: appConfig.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

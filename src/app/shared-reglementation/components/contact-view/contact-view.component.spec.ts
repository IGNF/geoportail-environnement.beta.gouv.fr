import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appConfig } from '../../../app.config';
import { ContactViewComponent } from './contact-view.component';

describe('ReglementationViewComponent', () => {
  let component: ContactViewComponent;
  let fixture: ComponentFixture<ContactViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactViewComponent],
      providers: appConfig.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

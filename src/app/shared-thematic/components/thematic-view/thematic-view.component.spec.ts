import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appConfig } from '../../../app.config';
import { ThematicViewComponent } from './thematic-view.component';

describe('ThematicViewComponent', () => {
  let component: ThematicViewComponent;
  let fixture: ComponentFixture<ThematicViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicViewComponent],
      providers: appConfig.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

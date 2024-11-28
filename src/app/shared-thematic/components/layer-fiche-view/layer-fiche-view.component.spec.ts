import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appConfig } from '../../../app.config';
import { LayerInfoViewComponent } from './layer-fiche-view.component';

describe('ThematicViewComponent', () => {
  let component: LayerInfoViewComponent;
  let fixture: ComponentFixture<LayerInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayerInfoViewComponent],
      providers: appConfig.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayerInfoViewComponent } from './layer-info-view.component';
import { appConfig } from '../../../app.config';

describe('FicheInfoViewComponent', () => {
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

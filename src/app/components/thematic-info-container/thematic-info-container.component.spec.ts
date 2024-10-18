import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { ThematicInfoModule } from '../../thematic-info/thematic-info.module';
import { ThematicInfoContainerComponent } from './thematic-info-container.component';

describe('ThematicInfoContainerComponent', () => {
  let component: ThematicInfoContainerComponent;
  let fixture: ComponentFixture<ThematicInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicInfoContainerComponent],
      imports: [
        SharedDesignDsfrModule,
        ThematicInfoModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

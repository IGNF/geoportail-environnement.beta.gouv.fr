import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDesignDsfrModule } from '../../../shared-design-dsfr/shared-design-dsfr.module';
import { ThematicTabsComponent } from './thematic-tabs.component';
import { SyntheseComponent } from '../synthese/synthese.component';
import { AgricultureComponent } from '../agriculture/agriculture.component';
import { BiodiversiteComponent } from '../biodiversite/biodiversite.component';
import { EauComponent } from '../eau/eau.component';


describe('ThematicTabsComponent', () => {
  let component: ThematicTabsComponent;
  let fixture: ComponentFixture<ThematicTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicTabsComponent, SyntheseComponent, AgricultureComponent, BiodiversiteComponent, EauComponent],
      imports: [SharedDesignDsfrModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

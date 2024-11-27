import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThematicListComponent } from '../../../shared-thematic/components/thematic-list/thematic-list.component';


describe('ThematicListComponent', () => {
  let component: ThematicListComponent;
  let fixture: ComponentFixture<ThematicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThematicListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThematicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

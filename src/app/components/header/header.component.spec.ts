import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { RouterModule } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';


class ActivatedRouteStub {
  // Simuler des propriétés utilisées dans le composant
  params = { subscribe: (fn: (params: any) => void) => fn({}) }; 
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        SharedDesignDsfrModule,
        RouterModule
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub } 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

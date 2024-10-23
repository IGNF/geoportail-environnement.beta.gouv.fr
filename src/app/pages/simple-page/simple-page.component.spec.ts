import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SimplePageComponent } from './simple-page.component';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';

describe('SimplePageComponent', () => {
  let component: SimplePageComponent;
  let fixture: ComponentFixture<SimplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimplePageComponent],
      imports: [
        SharedDesignDsfrModule
      ],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

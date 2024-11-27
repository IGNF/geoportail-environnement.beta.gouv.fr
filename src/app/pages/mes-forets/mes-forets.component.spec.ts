import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { MesForetsComponent } from './mes-forets.component';
import { ExtendDatePipe } from '../../shared/pipes/extend-date.pipe';
import { SharedDesignDsfrModule } from '../../shared-design-dsfr/shared-design-dsfr.module';
import { Foret } from '../../shared/models/foret.model';
import { ForetService } from '../../shared/services/foret.service';
import { CardTransformerService } from '../../shared-design-dsfr/transformers/card-transformer.service';
import { BreadcrumbTransformerService } from '../../shared-design-dsfr/transformers/breadcrumb-transformer.service';

describe('MesForetsComponent', () => {
  let component: MesForetsComponent;
  let fixture: ComponentFixture<MesForetsComponent>;
  let foretService: jasmine.SpyObj<ForetService>;
  let cardTransformerService: jasmine.SpyObj<CardTransformerService>;
  let breadcrumbTransformerService: jasmine.SpyObj<BreadcrumbTransformerService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const foretServiceSpy = jasmine.createSpyObj('ForetService', ['list', 'mockList']);
    const cardTransformerServiceSpy = jasmine.createSpyObj('CardTransformerService', ['fromForet']);
    const breadcrumbTransformerServiceSpy = jasmine.createSpyObj('BreadcrumbTransformerService', ['fromOptions']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [
        MesForetsComponent,
        ExtendDatePipe
      ],
      imports: [
        BrowserModule,
        SharedDesignDsfrModule,
      ],
      providers: [
        { provide: ForetService, useValue: foretServiceSpy },
        { provide: CardTransformerService, useValue: cardTransformerServiceSpy },
        { provide: BreadcrumbTransformerService, useValue: breadcrumbTransformerServiceSpy },
        { provide: Router, useValue: routerSpy },
        ExtendDatePipe
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MesForetsComponent);
    component = fixture.componentInstance;
    foretService = TestBed.inject(ForetService) as jasmine.SpyObj<ForetService>;
    cardTransformerService = TestBed.inject(CardTransformerService) as jasmine.SpyObj<CardTransformerService>;
    breadcrumbTransformerService = TestBed.inject(BreadcrumbTransformerService) as jasmine.SpyObj<BreadcrumbTransformerService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call foretService.list on init', () => {
  //   component.ngOnInit();
  //   expect(foretService.list).toHaveBeenCalled();
  // });

  // it('should build breadcrumb on init', () => {
  //   const breadcrumb = { label: 'Mes forêts', route: '' };
  //   breadcrumbTransformerService.fromOptions.and.returnValue(breadcrumb);

  //   component.ngOnInit();

  //   expect(breadcrumbTransformerService.fromOptions).toHaveBeenCalledWith({ label: 'Mes forêts', route: '' });
  //   expect(component.breadcrumb).toEqual(breadcrumb);
  // });

  // it('should fetch and transform forets on init', () => {
  //   const forets = [new Foret().deserialise({ id: 1, name: 'Foret 1' })];
  //   const transformedCards: any[] = [{ title: 'Foret 1' }];
  //   foretService.list.and.returnValue(of(forets));
  //   cardTransformerService.fromForet.and.returnValue(transformedCards[0]);

  //   component.ngOnInit();

  //   expect(foretService.list).toHaveBeenCalled();
  //   expect(component.foretCards).toEqual(transformedCards);
  // });

  // it('should handle error and use mockList on init', () => {
  //   const mockForets: any[] = [{ id: 2, name: 'Mock Foret' }];
  //   const transformedCards: any[] = [{ title: 'Mock Foret' }];
  //   foretService.list.and.returnValue(throwError('error'));
  //   foretService.mockList.and.returnValue(of(mockForets));
  //   cardTransformerService.fromForet.and.returnValue(transformedCards[0]);

  //   component.ngOnInit();

  //   expect(foretService.list).toHaveBeenCalled();
  //   expect(foretService.mockList).toHaveBeenCalled();
  //   expect(component.foretCards).toEqual(transformedCards);
  //   expect(component.subcribed).toBeFalse();
  // });

  // it('should navigate to requete on goToRequete', () => {
  //   const foretTitle = 'Foret 1';
  //   component.goToRequete(foretTitle);

  //   expect(router.navigate).toHaveBeenCalledWith(['/', 'requete', foretTitle]);
  // });

});

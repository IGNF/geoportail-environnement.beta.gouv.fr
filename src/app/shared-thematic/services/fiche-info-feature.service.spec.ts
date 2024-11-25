import { TestBed } from '@angular/core/testing';
import { appConfig } from '../../app.config';
import { FicheInfoFeatureService } from './fiche-info-feature.service';

describe('ThematicSelectService', () => {
  let service: FicheInfoFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : appConfig.providers
    });
    service = TestBed.inject(FicheInfoFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { appConfig } from '../../app.config';
import { ThematicFeatureService } from './fiche-info-feature.service';

describe('ThematicSelectService', () => {
  let service: ThematicFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : appConfig.providers
    });
    service = TestBed.inject(ThematicFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

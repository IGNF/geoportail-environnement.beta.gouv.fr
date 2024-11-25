import { TestBed } from '@angular/core/testing';
import { GeoplateformeWfsService } from './geoplateforme-wfs.service';
import { appConfig } from '../../app.config';

describe('GeoplateformeWfsService', () => {
  let service: GeoplateformeWfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: appConfig.providers
    });
    service = TestBed.inject(GeoplateformeWfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

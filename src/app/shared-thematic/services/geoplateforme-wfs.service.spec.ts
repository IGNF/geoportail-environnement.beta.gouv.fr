import { TestBed } from '@angular/core/testing';

import { GeoplateformeWfsService } from './geoplateforme-wfs.service';

describe('GeoplateformeWfsService', () => {
  let service: GeoplateformeWfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoplateformeWfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

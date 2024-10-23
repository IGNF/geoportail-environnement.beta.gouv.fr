import { TestBed } from '@angular/core/testing';

import { MapContextService } from './map-context.service';

describe('MapContextService', () => {
  let service: MapContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

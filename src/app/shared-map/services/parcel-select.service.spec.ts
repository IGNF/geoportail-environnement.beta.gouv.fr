import { TestBed } from '@angular/core/testing';
import { appConfig } from '../../app.config';
import { MapContextService } from './map-context.service';

describe('MapContextService', () => {
  let service: MapContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: appConfig.providers});
    service = TestBed.inject(MapContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

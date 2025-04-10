import { TestBed } from '@angular/core/testing';
import { appConfig } from '../../app.config';
import { parcelSelectService } from './parcel-select.service';

describe('MapContextService', () => {
  let service: parcelSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: appConfig.providers});
    service = TestBed.inject(parcelSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { ThematicSharedService } from './thematic-shared.service';
import { appConfig } from '../../app.config';

describe('ThematicSharedService', () => {
  let service: ThematicSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: appConfig.providers
    });
    service = TestBed.inject(ThematicSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

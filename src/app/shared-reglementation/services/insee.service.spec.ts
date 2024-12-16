import { TestBed } from '@angular/core/testing';

import { InseeService } from './insee.service';
import { appConfig } from '../../app.config';

describe('InseeService', () => {
  let service: InseeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: appConfig.providers
    });
    service = TestBed.inject(InseeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

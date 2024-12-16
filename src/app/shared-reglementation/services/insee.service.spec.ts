import { TestBed } from '@angular/core/testing';

import { InseeService } from './insee.service';

describe('InseeService', () => {
  let service: InseeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InseeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

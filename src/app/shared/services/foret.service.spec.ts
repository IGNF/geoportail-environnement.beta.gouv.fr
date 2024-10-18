import { TestBed } from '@angular/core/testing';

import { ForetService } from './foret.service';

describe('ForetService', () => {
  let service: ForetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

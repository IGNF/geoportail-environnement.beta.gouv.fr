import { TestBed } from '@angular/core/testing';

import { ThematicSelectService } from './thematic-select.service';

describe('ThematicSelectService', () => {
  let service: ThematicSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThematicSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

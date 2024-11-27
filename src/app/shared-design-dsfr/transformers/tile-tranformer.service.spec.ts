import { TestBed } from '@angular/core/testing';

import { TileTranformerService } from './tile-tranformer.service';

describe('TileTranformerService', () => {
  let service: TileTranformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileTranformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

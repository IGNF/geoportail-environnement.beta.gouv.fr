import { TestBed } from '@angular/core/testing';

import { BreadcrumbTransformerService } from './breadcrumb-transformer.service';

describe('BreadcrumbTransformerService', () => {
  let service: BreadcrumbTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadcrumbTransformerService);
  });

  it('should be created', () => {
    expect(true).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LocalStorageForetService } from './local-storage-foret.service';

describe('LocalStorageForetService', () => {
  let service: LocalStorageForetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageForetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

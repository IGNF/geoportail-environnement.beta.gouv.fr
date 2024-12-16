import { TestBed } from '@angular/core/testing';

import { AnnuairePublicService } from './annuaire-public.service';

describe('AnnuairePublicService', () => {
  let service: AnnuairePublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnuairePublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

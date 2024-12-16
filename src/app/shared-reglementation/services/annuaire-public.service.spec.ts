import { TestBed } from '@angular/core/testing';

import { AnnuairePublicService } from './annuaire-public.service';
import { appConfig } from '../../app.config';

describe('AnnuairePublicService', () => {
  let service: AnnuairePublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: appConfig.providers
    });
    service = TestBed.inject(AnnuairePublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

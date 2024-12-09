import { TestBed } from '@angular/core/testing';
import { ThematicSelectService } from './thematic-select.service';
import { appConfig } from '../../app.config';

describe('ThematicSelectService', () => {
  let service: ThematicSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: appConfig.providers
    });
    service = TestBed.inject(ThematicSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

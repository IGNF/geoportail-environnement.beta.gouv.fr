import { TestBed } from '@angular/core/testing';
import { appConfig } from '../../app.config';
import { ContactService } from './contact.service';

describe('ThematicSelectService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : appConfig.providers
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

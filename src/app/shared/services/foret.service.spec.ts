import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { ForetService } from './foret.service';
import { appConfig } from '../../app.config';

describe('ForetService', () => {
  let service: ForetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
      ],
      providers: appConfig.providers
    });
    service = TestBed.inject(ForetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

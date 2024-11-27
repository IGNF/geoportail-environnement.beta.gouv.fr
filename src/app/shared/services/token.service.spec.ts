import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { TokenService } from './token.service';
import { appConfig } from '../../app.config';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
      ],
      providers: appConfig.providers
    });
    service = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

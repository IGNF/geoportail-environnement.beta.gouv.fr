import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { LoginService } from './login.service';
import { appConfig } from '../../app.config';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
      ],
      providers: appConfig.providers
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AppTokenInterceptor } from './app-token.interceptor';

describe('AppTokenInterceptor', () => {
  let service: AppTokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTokenInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

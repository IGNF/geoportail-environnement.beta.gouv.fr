import { TestBed } from '@angular/core/testing';

import { TitlePrefixStrategy } from './title-prefix.strategy';


describe('TitlePrefixStrategy', () => {
  let service: TitlePrefixStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitlePrefixStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

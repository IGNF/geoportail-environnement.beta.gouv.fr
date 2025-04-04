import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { TitlePrefixStrategy } from './title-prefix.strategy';
import { appConfig } from '../../app.config';


describe('TitlePrefixStrategy', () => {
  let router: Router;
  let document: Document;
  let service: TitlePrefixStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: appConfig.providers
    });

    router = TestBed.inject(Router);
    document = TestBed.inject(DOCUMENT);
    service = TestBed.inject(TitlePrefixStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set page title correctly when title is not provided', fakeAsync(() => {
    router.resetConfig([{
      path: 'fake-path',
      component: TestComponent
    }]);

    router.navigate(['/fake-path']);
    tick();
    expect(document.title).toBe('Foreg');
  }));

  it('should set page title correctly when title is provided', fakeAsync(() => {
    router.resetConfig([{
      path: 'fake-path',
      title: 'Fake title',
      component: TestComponent
    }]);

    router.navigate(['/fake-path']);
    tick();
    expect(document.title).toBe('Fake title - Foreg');
  }));
});

@Component({ template: '' })
export class TestComponent {
}
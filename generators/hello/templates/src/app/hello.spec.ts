/// <reference path="../../typings/main.d.ts"/>
<% if (modules === 'webpack') { -%>
/// <reference path="../../node_modules/angular2/typings/browser.d.ts"/>
<% } -%>

<% if (modules === 'webpack') { -%>
import 'zone.js/dist/zone';
<% } -%>
import 'zone.js/dist/async-test';
import {Hello} from './hello';
import {describe, it, expect, inject, async, TestComponentBuilder, setBaseTestProviders} from 'angular2/testing';
import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';

describe('hello component', () => {
  setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

  it('should render hello world', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(Hello)
      .then(fixture => {
        fixture.detectChanges();
        const hello = fixture.nativeElement;
        expect(hello.querySelector('h1').textContent).toBe('Hello World!');
      });
  })));
});

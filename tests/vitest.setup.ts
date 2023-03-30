/* eslint-disable no-console */
/**
 * Module dependencies.
 */

import { DOMWindow, JSDOM } from 'jsdom';
import { afterAll, beforeAll } from 'vitest';

/**
 * Create a simulated browser environment.
 */

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
const { document } = window;

(global.window as unknown as DOMWindow) = window;
(global.document as unknown as Document) = document;

/**
 * Omit warning.
 */

const originalError = console.error;

beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      )
    ) {
      return;
    }

    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

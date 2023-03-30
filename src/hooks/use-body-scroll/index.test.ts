/**
 * Module dependencies.
 */

import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react-hooks/dom';
import { useBodyScroll } from './';

/**
 * Test `useBodyScroll` hook.
 */

describe(`'useBodyScroll' hook`, () => {
  beforeEach(() => {
    document.body.style.overflow = '';
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  it('should set body overflow to hidden when off is true', () => {
    renderHook(() => useBodyScroll({ off: true }));

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should set body overflow to an empty string when off is false', () => {
    renderHook(() => useBodyScroll({ off: false }));

    expect(document.body.style.overflow).toBe('');
  });
});

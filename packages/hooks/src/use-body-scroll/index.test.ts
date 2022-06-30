/**
 * Module dependencies.
 */

import { renderHook } from '@testing-library/react-hooks/dom';
import { useBodyScroll } from './';

/**
 * Test `useBodyScroll` hook.
 */

describe(`'useBodyScroll' hook`, () => {
  it('should set body `overflow: hidden` style if pass true', () => {
    renderHook(() => useBodyScroll({ off: true }));

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should remove body `overflow: hidden` style if pass false', () => {
    renderHook(() => useBodyScroll({ off: false }));

    expect(document.body.style.overflow).toBe('');
  });
});

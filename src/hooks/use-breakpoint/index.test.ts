/**
 * Module dependencies.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { mockMatchMedia } from 'tests/utils';
import { renderHook } from '@testing-library/react-hooks/dom';
import { useBreakpoint } from './';

/**
 * Test `useBreakpoint` hook.
 */

describe(`'useBreakpoint' hook`, () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should return `true` if window width is within `lg` and `xl`', () => {
    mockMatchMedia(true);

    const { result } = renderHook(() => useBreakpoint('lg', 'xl'));

    expect(result.current).toBe(true);
  });

  it('should return `false` if window width is lower than `800px`', () => {
    mockMatchMedia(false);

    const { result } = renderHook(() => useBreakpoint(0, 800));

    expect(result.current).toBe(false);
  });
});

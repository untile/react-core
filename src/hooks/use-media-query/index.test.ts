/**
 * Module dependencies.
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { mockMatchMedia } from 'tests/utils';
import { renderHook } from '@testing-library/react-hooks/dom';
import { useMediaQuery } from './';

/**
 * Test `useMediaQuery` hook.
 */

describe('useMediaQuery', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('returns true when the media query matches', () => {
    mockMatchMedia(true);

    const { result } = renderHook(() => useMediaQuery('(min-width: 800px)'));

    expect(result.current).toBe(true);
  });

  it('returns false when the media query does not match', () => {
    mockMatchMedia(false);

    const { result } = renderHook(() => useMediaQuery('(min-width: 800px)'));

    expect(result.current).toBe(false);
  });

  it('updates the match state when the media query changes', () => {
    mockMatchMedia(false);

    const { rerender, result } = renderHook(
      ({ query }) => useMediaQuery(query),
      { initialProps: { query: '(min-width: 800px)' } }
    );

    expect(result.current).toBe(false);

    mockMatchMedia(true);
    rerender({ query: '(min-width: 1200px)' });

    expect(result.current).toBe(true);
  });
});

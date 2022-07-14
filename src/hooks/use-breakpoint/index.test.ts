/**
 * Module dependencies.
 */

import { renderHook } from '@testing-library/react-hooks/dom';
import { useBreakpoint } from './';

/**
 * Mock match.
 */

function mockMatch(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn().mockImplementation(query => ({
      addEventListener: jest.fn(),
      addListener: jest.fn(),
      dispatchEvent: jest.fn(),
      matches,
      media: query,
      onchange: null,
      removeEventListener: jest.fn(),
      removeListener: jest.fn()
    })),
    writable: true
  });
}

/**
 * Test `useBreakpoint` hook.
 */

describe(`'useBreakpoint' hook`, () => {
  beforeAll(() => {
    window.innerWidth = 1300;
    window.dispatchEvent(new Event('resize'));
  });

  it('should return `true` if window width is within `lg` and `xl`', () => {
    mockMatch(true);

    const { result } = renderHook(() => useBreakpoint('lg', 'xl'));

    expect(result.current).toBe(true);
  });

  it('should return `false` if window width is lower than `800px`', () => {
    mockMatch(false);

    const { result } = renderHook(() => useBreakpoint(0, 800));

    expect(result.current).toBe(false);
  });
});

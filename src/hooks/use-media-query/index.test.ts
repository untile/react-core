/**
 * Module dependencies.
 */

import { renderHook } from '@testing-library/react-hooks/dom';
import { useMediaQuery } from './';

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
 * Test `useMediaQuery` hook.
 */

describe(`'useMediaQuery' hook`, () => {
  beforeAll(() => {
    window.innerWidth = 320;
    window.dispatchEvent(new Event('resize'));
  });

  it('should return `true` if matches', () => {
    mockMatch(true);

    const { result } = renderHook(() => useMediaQuery('(min-width: 480px)'));

    expect(result.current).toBe(true);
  });

  it('should return `false` if not matches', () => {
    mockMatch(false);

    const { result } = renderHook(() => useMediaQuery('(min-width: 3000px)'));

    expect(result.current).toBe(false);
  });
});

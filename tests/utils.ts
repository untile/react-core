/**
 * Module dependencies.
 */

import { vi } from 'vitest';

/**
 * Export `mockMatchMedia`.
 */

export const mockMatchMedia = (matches: boolean) => {
  window.matchMedia = vi.fn().mockImplementation(query => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    dispatchEvent: vi.fn(),
    matches,
    media: query,
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn()
  }));
};

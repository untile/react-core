/**
 * Module dependencies.
 */

import { resolve } from 'path';

/**
 * Export vitest config.
 */

export default {
  moduleNameMapper: {
    '^src/(.*)$': './src/$1'
  },
  test: {
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, './tests/vitest.setup.ts')]
  },
  testMatch: ['src/**/*.test.{ts,tsx}']
};

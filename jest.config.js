/** @type {import('jest').Config} */

/**
 * Export jest configuration.
 */

module.exports = {
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testRegex: '(src/.*\\.test.(ts|tsx))$',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }]
  }
};

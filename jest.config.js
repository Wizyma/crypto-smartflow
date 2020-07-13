// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  modulePathIgnorePatterns: ['.next', 'node_modules'],
  coverageReporters: ['text', 'lcov', 'cobertura'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^constants/(.*)$': resolve(__dirname, './src/constants/$1'),
    '^components/(.*)$': resolve(__dirname, './src/components/$1'),
    '^hooks/(.*)$': resolve(__dirname, './src/hooks/$1'),
    '^types/(.*)$': resolve(__dirname, './src/types/$1'),
    '^utils/(.*)$': resolve(__dirname, './src/utils/$1'),
    '^fetcher': resolve(__dirname, './src/fetcher/index.ts'),
  },
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },
};

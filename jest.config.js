/** @type {import('jest').Config} */

const config = {
  collectCoverageFrom: ['src/**/*.ts', 'index.ts', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  preset: 'ts-jest/presets/default-esm',
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          allowUnreachableCode: false,
          alwaysStrict: true,
          esModuleInterop: true,
          lib: ['es2020', 'dom'],
          module: 'NodeNext',
          moduleResolution: 'nodenext',
          noImplicitAny: true,
          noImplicitReturns: true,
          noUncheckedIndexedAccess: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          skipLibCheck: true,
          strictNullChecks: true,
          target: 'es2020',
        },
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/'],
};

export default config;

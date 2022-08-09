export default {
  verbose: false,
  clearMocks: true,
  preset: 'ts-jest',
  collectCoverage: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

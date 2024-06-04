import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  coverageDirectory: '<rootDir>/coverage',
  displayName: 'healthier-u-app',
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  transformIgnorePatterns: ['dist', 'build', 'android', 'ios', 'node_modules'],
  verbose: true,
};

export default config;

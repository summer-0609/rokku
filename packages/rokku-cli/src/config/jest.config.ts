import { join } from 'path';
import { existsSync } from 'fs-extra';
import { ROOT, JEST_SETUP_FILE } from '../common/constant';

const DEFAULT_CONFIG = {
  setupFilesAfterEnv: [JEST_SETUP_FILE],
  transform: {
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
  testPathIgnorePatterns: ['/node_modules/', '_site', 'site'],
  transformIgnorePatterns: ['/node_modules/(?!(@rokku/cli))/'],
  // collectCoverageFrom: [
  //   'src/**/*.{ts,tsx}',
  //   '!src/*/style/index.tsx',
  //   '!src/style/index.tsx',
  //   '!src/*/locale/index.tsx',
  //   '!src/*/__tests__/type.test.tsx',
  //   '!src/**/*/interface.{ts,tsx}',
  // ],
  coverageDirectory: './tests/coverage',
};

function readRootConfig() {
  const ROOT_CONFIG_PATH = join(ROOT, 'jest.config.js');

  if (existsSync(ROOT_CONFIG_PATH)) {
    return require(ROOT_CONFIG_PATH);
  }

  return {};
}

module.exports = {
  ...DEFAULT_CONFIG,
  ...readRootConfig(),
};

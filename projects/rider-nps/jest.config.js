module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTests.tsx'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  verbose: true,
  moduleNameMapper: {
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@locale/(.*)$': '<rootDir>/locale/$1',
    '^@redux/(.*)$': '<rootDir>/lib/redux/$1',
    '^@containers/(.*)$': '<rootDir>/containers/$1',
    '^@pagesImpl/(.*)$': '<rootDir>/pagesImpl/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
  },
}

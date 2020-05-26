module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['/node_modules/', 'style.ts', 'src/config.ts'],
  setupFilesAfterEnv: ['./setupTests.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  coverageDirectory: './coverage/',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
  },
};

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js}"],
  coverageDirectory: "coverage",
  "testEnvironment": "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTest.js"],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)']  
};

module.exports = {
  preset: "jest-preset-angular",
  setupTestFrameworkScriptFile: "<rootDir>/jest-config/setup-jest.js",
  transformIgnorePatterns: ["node_modules/(?!@ionic/storage|@ionic-native)"],
  globals: {
    "ts-jest": {
      ignoreCoverageForAllDecorators: true,
      tsConfigFile: "tsconfig.spec.json"
    },
    __TRANSFORM_HTML__: true
  },
  testMatch: [
    "**/__tests__/*.+(ts|js)?(x)",
    "spec/**/*.+(ts|js)?(x)",
    "**/+(*.)+(spec).+(ts|js)?(x)"
  ]
};

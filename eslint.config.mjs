import globals from "globals";
import pluginJs from "@eslint/js";

const jestConfig = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.jest // Add Jest globals
    }
  },
  plugins: ["jest"], // Enable Jest plugin
  extends: ["plugin:jest/recommended"] // Use recommended Jest rules
};

export default [
  // General configuration
  {
    languageOptions: {
      globals: globals.browser
    }
  },

  // Jest configuration for test files
  {
    files: ["*.test.js", "*.spec.js"], // Adjust the pattern if necessary
    ...jestConfig
  },

  // Recommended JavaScript rules
  pluginJs.configs.recommended
];

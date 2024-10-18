import globals from "globals";
import pluginJs from "@eslint/js";

// Use ES module syntax throughout the file
export default [
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended
];

// Jest-specific configuration (converted to ES module syntax)
export const jestConfig = {
  env: {
    jest: true
  },
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"]
};

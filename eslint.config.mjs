import { defineConfig } from "eslint-define-config";
import globals from "globals";
import pluginJs from "@eslint/js";
import cypress from "cypress";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        global: "readonly"
      }
    },
    plugins: pluginJs
  },
  pluginJs.configs.recommended,
  {
    files: ["*.test.js", "*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // For Jest tests
        global: "readonly"
      }
    },
    plugins: pluginJs
  },
  {
    files: ["cypress/**/*.js", "cypress.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals["cypress"]
      }
    },
    plugins: {
      eslint: pluginJs,
      cypress: cypress
    },
    rules: {}
  }
]);

import { defineConfig } from "eslint-define-config";
import pluginJs from "@eslint/js";
import globals from "globals";

export default defineConfig([
  {
    // This is the base configuration for JavaScript files
    languageOptions: {
      globals: globals.browser // or globals.es2015 if using modern JS
    },
    rules: {
      // Add general JavaScript rules here
    }
  },
  {
    // Configuration specifically for Jest test files
    files: ["*.test.js", "*.spec.js"], // Adjust the glob pattern if needed
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser globals
        ...globals.jest // Include Jest globals
        // You can also add other globals as needed
      }
    },
    plugins: ["jest"], // Ensure the Jest plugin is included
    rules: {
      "no-undef": "error" // Flag undefined globals as errors
    }
  },
  pluginJs.configs.recommended // Recommended JavaScript rules
]);

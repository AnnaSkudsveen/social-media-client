// // eslint.config.mjs
import { defineConfig } from "eslint-define-config";
import globals from "globals";
import pluginJs from "@eslint/js";

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
        ...globals.jest,
        global: "readonly"
      }
    },
    plugins: pluginJs
  }
]);

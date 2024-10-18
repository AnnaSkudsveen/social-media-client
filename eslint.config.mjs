import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    }
  },
  pluginJs.configs.recommended,
  {
    overrides: [
      {
        files: ["*.test.js", "*.spec.js"],
        env: {
          jest: true
        },
        plugins: ["jest"],
        extends: ["plugin:jest/recommended"]
      }
    ]
  }
];

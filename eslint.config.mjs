import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended
];

module.exports = {
  env: {
    jest: true
  },
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"]
};

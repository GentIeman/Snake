/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  env: {
    "vue/setup-compiler-macros": true
  }
};
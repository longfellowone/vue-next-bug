module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
// VS Code
// "editor.formatOnSave": true,
// "editor.codeActionsOnSave": {
//   "source.fixAll.eslint": true
// },
// "vetur.validation.template": false,
// "eslint.validate": ["javascript", "javascriptreact", "vue"]

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    jest: true,
  },
  root: true,
  extends: ['@daito/eslint-config/react-internal.js', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-redeclare': ['error', { builtinGlobals: false }],
  },
};

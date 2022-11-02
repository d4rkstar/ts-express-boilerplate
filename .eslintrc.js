module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    project: '*/tsconfig.json',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    commonjs: true,
  },
};
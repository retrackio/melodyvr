module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/camelcase': 'off',
    semi: 'error',
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['scripts/**/*'],
  overrides: [
    {
      files: 'src/**/*.test.ts?(x)',
      rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
};

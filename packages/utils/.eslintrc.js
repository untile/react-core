/**
 * Eslint configuration.
 */

module.exports = {
  env: {
    browser: 1,
    node: 1
  },
  extends: [
    '@untile/eslint-config-untile-react',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/comma-dangle': ['error'],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],
    'comma-dangle': 0,
    indent: 2,
    'no-process-env': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'forbid',
        singleline: 'forbid'
      }
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true
      }
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-newline': ['error', { prevent: false }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line'
      }
    ],
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': [
      'error',
      { enableDangerousAutofixThisMayCauseInfiniteLoops: true }
    ],
    'require-await': 0,
    'typescript-sort-keys/interface': 'error'
  }
};

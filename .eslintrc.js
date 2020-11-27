module.exports = {
  extends: [require.resolve('@rokku/fabric/dist/eslint')],
  ignorePatterns: ['/.*'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'warn',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
  },
};

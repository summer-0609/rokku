module.exports = {
  extends: [
    require.resolve('@rokku/fabric/dist/eslint'),
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
  },
};

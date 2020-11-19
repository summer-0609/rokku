module.exports = {
  extends: [require.resolve('@rokku/fabric/dist/eslint')],
  rules: {
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
  },
};

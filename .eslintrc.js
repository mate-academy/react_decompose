module.exports = {
  extends: ['@mate-academy/eslint-config-react', 'plugin:cypress/recommended'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
    }],
  },
};

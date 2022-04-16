module.exports = {
  extends: ['@mate-academy/eslint-config-react', 'plugin:cypress/recommended'],
  rules: {
    'linebreak-style':
      ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'react/prop-types': 0,
    'max-len': ['error', {
      ignoreTemplateLiterals: true,
      ignoreComments: true,
    }],
    'jsx-a11y/label-has-associated-control': ['error', {
      assert: 'either',
    }],
    'jsx-a11y/control-has-associated-label': 'off',
  },
};

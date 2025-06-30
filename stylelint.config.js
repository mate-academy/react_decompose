module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': true,
    'rule-empty-line-before': [
      'always',
      { except: ['first-nested'], ignore: ['after-comment'] },
    ],
    'declaration-empty-line-before': 'never',
  },
};

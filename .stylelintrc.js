module.exports = {
  extends: [
    '@mate-academy/stylelint-config',
    'stylelint-config-standard',
    'stylelint-scss',
  ],
  rules: {
    // Permite nomes de classes no formato BEM: block, block__element, block__element--modifier
    'selector-class-pattern': '^[a-z0-9]+(__[a-z0-9]+)?(--[a-z0-9]+)?$',

    // Desabilitar regras desconhecidas que causam erro
    'color-function-alias-notation': null,
    'color-function-notation': 'legacy',
    'container-name-pattern': null,
    'layer-name-pattern': null,
    'at-rule-descriptor-no-unknown': null,
    'at-rule-descriptor-value-no-unknown': null,
    'at-rule-no-deprecated': null,
    'at-rule-prelude-no-invalid': null,
  },
};

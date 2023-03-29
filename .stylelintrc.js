/**
 * Stylelint configuration.
 */

module.exports = {
  extends: ['@untile/stylelint-config-untile', 'stylelint-config-prettier'],
  rules: {
    'max-empty-lines': 1,
    'property-no-unknown': null,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/-styled-mixin/', '$dummyValue']
      }
    ]
  }
};

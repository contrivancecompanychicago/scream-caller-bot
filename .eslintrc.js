module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: 'plugin:shopify/esnext',
  rules: {
    'no-console': 0,
    'comma-dangle': 0,
    quotes: [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'none'
    }],
    'no-process-env': 0,
    'template-curly-spacing': [2, 'always'],
    'space-before-function-paren': [2, {
      named: 'never',
      anonymous: 'never',
      asyncArrow: 'always'
    }],
    'no-return-await': 0
  }
};

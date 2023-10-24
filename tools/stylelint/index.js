module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-html', 'stylelint-config-recess-order'],
  rules: {
    'declaration-empty-line-before': null,
    'declaration-no-important': null,
    'max-nesting-depth': [5, { severity: 'warning' }],
    'number-max-precision': null,
    'number-leading-zero': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'selector-max-class': null,
    'selector-max-compound-selectors': null,
    'selector-max-id': null,
    'selector-max-type': null,
    'string-quotes': null,
    'function-url-quotes': null,
    'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],
  },
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: require.resolve('postcss-scss'),
    },
    {
      files: '**/*.less',
      customSyntax: require.resolve('postcss-less'),
    },
    {
      files: '**/*.{html,vue}',
      customSyntax: require.resolve('postcss-html'),
    },
    {
      files: '**/*.css',
      customSyntax: require.resolve('postcss-safe-parser'),
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};

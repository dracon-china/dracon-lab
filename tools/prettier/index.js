module.exports = {
  arrowParens: 'always',
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
  ],
  printWidth: 100,
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
    {
      files: ['.commitlintrc', '.lintstagedrc', '.stylelintrc'],
      options: {
        parser: 'json',
      },
    },
  ],
};

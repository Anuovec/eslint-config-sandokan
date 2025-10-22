module.exports = {
  endOfLine: 'auto',
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-curly'), require.resolve('prettier-plugin-packagejson')],
};

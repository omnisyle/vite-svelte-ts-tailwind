const production = process.env.NODE_ENV === 'production';
const defaultPlugins = [
  require("postcss-import"),
  require("tailwindcss"),
  require("postcss-nesting"),
  require("autoprefixer"),
];
const plugins = production
  ? [...defaultPlugins, require("cssnano")]
  : defaultPlugins;
module.exports = {
  plugins,
};
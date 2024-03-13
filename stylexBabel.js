const babelrc = require('./.babelrc.js');

const plugins = babelrc.plugins;
const stylexBabelPlugin = plugins.find((plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin');

const options = stylexBabelPlugin?.[1];

const rootDir = options?.unstable_moduleResolution?.rootDir ?? __dirname;
const aliases = options?.aliases ?? undefined;
const useCSSLayers = options?.useCSSLayers ?? undefined;

if (!aliases && !useCSSLayers) {
  throw new Error('stylexBabel.js: No aliases or useCSSLayers found in .babelrc.js. Please add them to the @stylexjs/babel-plugin options.');
}
module.exports = { rootDir, aliases, useCSSLayers };

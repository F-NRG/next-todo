// @ts-check

/** @type {import('next').NextConfig} */

import stylexPlugin from '@stylexjs/nextjs-plugin';
import babelrc from './.babelrc.js';

const __dirname = process.cwd().toString();
const plugins = babelrc.plugins;
const stylexBabelPlugin = plugins.find((plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin');
const options = stylexBabelPlugin ? stylexBabelPlugin[1] : undefined;

if (!options) {
  throw new Error('No options found');
}

const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;
const aliases = options.aliases ?? undefined;
const useCSSLayers = options.useCSSLayers ?? undefined;

const plugin = stylexPlugin({
  aliases,
  rootDir,
  useCSSLayers,
})({ transpilePackages: ['@stylexjs/open-props'] });

const nextConfig = { ...plugin };

export default nextConfig;

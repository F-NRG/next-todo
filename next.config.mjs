// @ts-check
/** @type {import('next').NextConfig} */

import stylexPlugin from '@stylexjs/nextjs-plugin';
import stylexBabel from './stylexBabel.js';

const plugin = stylexPlugin({
  aliases: stylexBabel.aliases,
  rootDir: stylexBabel.rootDir,
  useCSSLayers: stylexBabel.useCSSLayers,
})({ transpilePackages: ['@stylexjs/open-props'] });

const nextConfig = { ...plugin };

export default nextConfig;

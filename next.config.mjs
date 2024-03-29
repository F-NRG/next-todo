/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/** @type {import('next').NextConfig} */

import path from 'path';
import stylexPlugin from '@stylexjs/nextjs-plugin';

const rootDir = process.cwd();

const plugin = stylexPlugin({
  aliases: {
    '@/*': [path.join(rootDir, '*')],
  },
  rootDir,
  useCSSLayers: undefined,
})({ transpilePackages: ['@stylexjs/open-props'] });

const nextConfig = { ...plugin };

export default nextConfig;

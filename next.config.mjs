// @ts-check

/** @type {import('next').NextConfig} */

import path from 'path';
import stylexPlugin from '@stylexjs/nextjs-plugin';

const __dirname = process.cwd().toString();

const plugin = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})({});

const nextConfig = { ...plugin };

export default nextConfig;

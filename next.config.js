// @ts-check

/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const plugin = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})({});

const nextConfig = { ...plugin };

module.exports = nextConfig;

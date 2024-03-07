import path from 'path';
import { fileURLToPath } from 'url';
import stylexPlugin from '@stylexjs/nextjs-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})({});

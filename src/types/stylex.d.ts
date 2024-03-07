declare module '@stylexjs/nextjs-plugin' {
  import type { Plugin } from 'vite';
  const stylexNextjsPlugin: Plugin;
  export default stylexNextjsPlugin;
}
// declare module '@stylexjs/stylex' {
//   export type Stylex = {
//     create: (styles: Record<string, Record<string, string>>) => Record<string, string>;
//     props: (styles: Record<string, string>) => Record<string, string>;
//   };

// }

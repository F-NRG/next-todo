import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const styles = stylex.create({
  text: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body {...stylex.props(styles.text, styles.layout)}>{children}</body>
    </html>
  );
}

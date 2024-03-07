import * as stylex from '@stylexjs/stylex';
import Client from './page-client';

const styles = stylex.create({
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.center)}>
      <h1>Welkom bij deze basic todo app!</h1>
      <Client />
    </main>
  );
}

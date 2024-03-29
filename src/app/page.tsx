import * as stylex from '@stylexjs/stylex';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Client from './page-client';

const styles = stylex.create({
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  list: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.center)}>
      <h1>Welkom bij deze basic to-do app!</h1>
      <nav {...stylex.props(styles.nav)}>
        <ul {...stylex.props(styles.list)}>
          <li>
            <Link href="/todo">Todo</Link>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </nav>
      <Client />
    </main>
  );
}

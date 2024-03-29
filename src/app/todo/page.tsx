import * as stylex from '@stylexjs/stylex';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import Client from './page-client';
import { getTodos } from '@/utils/actions';
import type { Todo } from '@/types/Todo';

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

// async function getData(): Promise<unknown> {
//   const response = await fetch('http://localhost:3000/api', {
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'User-Agent': '*',
//       'dataType': 'json',
//     },
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!response.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return response.json();
// }

export default async function Home() {
  const user = await currentUser();
  const existingTodos = (await getTodos()) as Array<Todo>;
  // const data = await response.json();
  if (!user) {
    throw new Error('No user found');
  }

  // const existingUser: User | null = await db.user.findUnique({
  //   where: {
  //     email: user.emailAddresses[0].emailAddress,
  //   },
  // });

  // console.log('userid', existingUser);
  // console.log('existingUser', existingUser?.id);

  return (
    <main {...stylex.props(styles.center)}>
      <h1>Welkom bij deze basic to-do app {user.username}!</h1>
      <nav {...stylex.props(styles.nav)}>
        <ul {...stylex.props(styles.list)}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </nav>

      <Client existingTodos={existingTodos} />
    </main>
  );
}

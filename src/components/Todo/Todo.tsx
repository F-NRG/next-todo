'use client';
import * as stylex from '@stylexjs/stylex';
import type { FC } from 'react';

const styles = stylex.create({
  todo: {
    padding: '.5rem',
  },
});

type Props = {
  item: string;
};

const Todo: FC<Props> = ({ item }) => {
  console.log('item ', item);
  return <li {...stylex.props(styles.todo)}>todo: {item} </li>;
};

export default Todo;

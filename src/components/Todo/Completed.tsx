import * as stylex from '@stylexjs/stylex';
import { ChangeEvent, useState, type FC } from 'react';
import type { Todo } from '@/types/Todo';

const styles = stylex.create({
  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem',
    borderRadius: '.2rem',
    borderColor: '#a7e8bd',
    borderWidth: '5px',
    borderStyle: 'solid',
    width: '500px',
    gap: '.5rem',
  },
  span: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    textDecoration: 'line-through',
  },
  buttonGroup: {
    display: 'flex',
    gap: '.5rem',
  },
});

type Props = {
  item: Todo;
};

export const Completed: FC<Props> = ({ item }) => {
  return (
    <li {...stylex.props(styles.todo)}>
      <span>V</span>
      <span {...stylex.props(styles.span)}>{item.value}</span>
      <span>DONE!</span>
    </li>
  );
};

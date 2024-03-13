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
  index: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontStyle: 'normal',
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
      <span {...stylex.props(styles.index)}>#&nbsp;{1}</span>
      <span {...stylex.props(styles.index)}>DONE</span>
      <span>{item.value}</span>
    </li>
  );
};

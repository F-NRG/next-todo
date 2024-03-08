'use client';
import * as stylex from '@stylexjs/stylex';
import type { FC } from 'react';
import Button from '../Button/Button';
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
  },
  index: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontStyle: 'normal',
  },
});
//   box-shadow: inset 0px 0px 0px 10px red;
type Props = {
  item: string;
  index: number;
  onDelete: (i: number) => void;
};

const Todo: FC<Props> = ({ index, item, onDelete }) => {
  console.log('item ', item);
  return (
    <li {...stylex.props(styles.todo)}>
      <span {...stylex.props(styles.index)}>#{index + 1}</span>
      <span>{item}</span>
      <Button
        onClick={() => onDelete(index)}
        text="X"
      />
    </li>
  );
};

export default Todo;

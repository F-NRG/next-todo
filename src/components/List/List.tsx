'use client';
import * as stylex from '@stylexjs/stylex';
import type { FC } from 'react';
import Todo from '../Todo/Todo';

const styles = stylex.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    width: '100%',
    padding: '.5rem',
    borderRadius: '.2rem',
    flexGrow: 1,
    listStyle: 'none',
  },
});

type Props = {
  items: Array<string>;
};

const List: FC<Props> = ({ items }) => {
  console.log('items ', items);
  return (
    <>
      {items.length > 0 && (
        <ul {...stylex.props(styles.list)}>
          {items.map((item, index) => (
            <Todo
              key={index}
              item={item}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default List;

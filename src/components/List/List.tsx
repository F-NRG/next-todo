'use client';
import * as stylex from '@stylexjs/stylex';
import type { ChangeEvent, FC } from 'react';
import Todo from '../Todo/Todo';

const styles = stylex.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    padding: '.5rem',
    borderRadius: '.2rem',
    flexGrow: 1,
    listStyle: 'none',
    width: '100%',
    gap: '.2rem',
  },
  wrapper: {
    display: 'flex',
    width: '100%',
  },
});

type Props = {
  items: Array<string>;
  title: string;
  onDelete: (i: number) => void;
  onUpdateItem: (value: string, index: number) => void;
};

const List: FC<Props> = ({ items, title, onDelete, onUpdateItem }) => {
  console.log('items ', items);
  return (
    <section>
      <h2>{title}</h2>
      {items.length > 0 && (
        <ul {...stylex.props(styles.list)}>
          {items.map((item, index) => (
            <Todo
              key={index}
              item={item}
              index={index}
              onDelete={onDelete}
              onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default List;

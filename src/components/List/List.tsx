'use client';
import * as stylex from '@stylexjs/stylex';
import type { FC } from 'react';

import TodoItem from '../Todo/Todo';
import type { Todo } from '@/types/Todo';

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
  todos: Array<Todo>;
  title: string;
  onDelete: (i: number) => void;
  onUpdateTodo: (todo: Todo, index: number) => void;
};

const List: FC<Props> = ({ todos, title, onDelete, onUpdateTodo }) => {
  // const { isOver, setNodeRef } = useDroppable({
  //   id: 'droppable',
  // });
  // const style = {
  //   color: isOver ? 'green' : undefined,
  // };

  return (
    <section>
      <h2>{title}</h2>
      {todos.length > 0 && (
        <ul {...stylex.props(styles.list)}>
          {todos.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              index={index}
              onDelete={onDelete}
              onUpdateTodo={onUpdateTodo}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default List;

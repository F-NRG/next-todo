'use client';
import * as stylex from '@stylexjs/stylex';
import type { ChangeEvent } from 'react';
import { useEffect, useState, type FC } from 'react';
// import { useDraggable } from '@dnd-kit/core';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Completed } from './Completed';
import type { Todo } from '@/types/Todo';

const styles = stylex.create({
  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem',
    borderRadius: '.2rem',
    borderColor: '#efa7a7ff',
    borderWidth: '5px',
    borderStyle: 'solid',
    width: { 'default': '90%', '@media (min-width: 600px)': '500px' },
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
  done: {
    backgroundColor: { 'default': '#a7e8bd', ':hover': '#fcbcb8ff' },
    borderColor: { 'default': '#a7e8bd', ':hover': '#fcbcb8ff' },
  },
});

type Props = {
  item: Todo;
  index: number;
  onUpdateTodo: (todo: Todo, index: number) => void;
  onDelete: (i: number) => void;
};

const TodoItem: FC<Props> = ({ index, item, onDelete, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todo, setTodo] = useState<Todo>(item);
  // const { attributes, listeners, setNodeRef, transform } = useDraggable({
  //   id: 'draggable',
  // });

  // const style = transform
  //   ? {
  //       transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  //     }
  //   : undefined;

  useEffect(() => {
    setTodo(item);
  }, [item]);

  const handleItemValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, value: e.target.value });
  };

  const handleCompleted = (i: number) => {
    onUpdateTodo({ ...todo, completed: true }, i);
  };

  const toggleSaveEdit = () => {
    if (todo.value !== item.value && isEditing) {
      onUpdateTodo(todo, index);
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      {todo.completed ? (
        <Completed item={todo} />
      ) : (
        <li {...stylex.props(styles.todo)}>
          {isEditing ? (
            <Input
              name="edit-todo"
              onChange={handleItemValue}
              value={todo.value}
            />
          ) : (
            <>
              <span {...stylex.props(styles.index)}>#&nbsp;{index + 1}</span>
              <span>{todo.value}</span>
            </>
          )}
          <div {...stylex.props(styles.buttonGroup)}>
            <Button
              onClick={() => handleCompleted(index)}
              text="Done"
              style={styles.done}
            />
            <Button
              onClick={toggleSaveEdit}
              text={isEditing ? 'Save' : 'Edit'}
            />
            <Button
              onClick={() => onDelete(index)}
              text="X"
            />
          </div>
        </li>
      )}
    </>
  );
};

export default TodoItem;

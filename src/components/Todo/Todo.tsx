'use client';
import * as stylex from '@stylexjs/stylex';
import { ChangeEvent, useEffect, useState, type FC } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import type { Todo } from '@/types/Todo';
import { Completed } from './Completed';
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
  index: number;
  onUpdateTodo: (todo: Todo, index: number) => void;
  onDelete: (i: number) => void;
};

const TodoItem: FC<Props> = ({ index, item, onDelete, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todo, setTodo] = useState<Todo>(item);

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
              onClick={toggleSaveEdit}
              text={isEditing ? 'Save' : 'Edit'}
            />
            <Button
              onClick={() => onDelete(index)}
              text="X"
            />
            <Button
              onClick={() => handleCompleted(index)}
              text="V"
            />
          </div>
        </li>
      )}
    </>
  );
};

export default TodoItem;

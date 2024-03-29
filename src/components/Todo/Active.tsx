import * as stylex from '@stylexjs/stylex';
import { ChangeEvent, useState, type FC } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
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
  index: number;
  onUpdateTodo: (todo: Todo, index: number) => void;
  onDelete: (i: number) => void;
};

export const Active: FC<Props> = ({ item, index, onUpdateTodo, onDelete }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todo, setTodo] = useState<Todo>(item);

  const handleItemValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, value: e.target.value });
  };

  const toggleSaveEdit = () => {
    if (todo.value !== item.value && isEditing) {
      onUpdateTodo(todo, index);
    }
    setIsEditing(!isEditing);
  };

  return (
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
      </div>
    </li>
  );
};

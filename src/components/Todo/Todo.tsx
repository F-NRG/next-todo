'use client';
import * as stylex from '@stylexjs/stylex';
import { ChangeEvent, useState, type FC } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
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
//   box-shadow: inset 0px 0px 0px 10px red;
type Props = {
  item: string;
  index: number;
  onUpdateItem: (value: string, index: number) => void;
  onDelete: (i: number) => void;
};

const Todo: FC<Props> = ({ index, item, onDelete, onUpdateItem }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [itemValue, setSetItemValue] = useState<string>(item);

  const handleItemValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSetItemValue(e.target.value);
  };
  const toggleSaveEdit = () => {
    if (itemValue !== item && isEditing) {
      onUpdateItem(itemValue, index);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li {...stylex.props(styles.todo)}>
      {isEditing ? (
        <Input
          name="edit-todo"
          onChange={handleItemValue}
          value={itemValue}
        />
      ) : (
        <>
          <span {...stylex.props(styles.index)}>#&nbsp;{index + 1}</span>
          <span>{item}</span>
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

export default Todo;

'use client';
import * as stylex from '@stylexjs/stylex';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import List from '@/components/List/List';

const styles = stylex.create({
  form: {
    backgroundColor: '#a7e8bd',
    borderStyle: 'none',
    borderRadius: '.5rem',
    color: 'white',
    display: 'flex',
    gap: '.5rem',
    padding: '.5rem',
    width: '400px',
  },
});

const ClientPage = () => {
  const [items, setItems] = useState<Array<string>>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.target as HTMLFormElement;
    setItems([...items, input.todo.value]);
  };

  const handleUpdateItem = (value: string, index: number) => {
    const updatedItems = items.map((item, i) => (i === index ? value : item));
    setItems(updatedItems);
  };

  const handleDelete = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems([...newItems]);
  };

  return (
    <>
      <form
        {...stylex.props(styles.form)}
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Start typing..."
          name="todo"
        />
        <Button
          text="Add todo"
          type="submit"
          name="add-todo"
        />
      </form>
      <List
        title="Start doing:"
        items={items}
        onDelete={handleDelete}
        onUpdateItem={handleUpdateItem}
      />
    </>
  );
};
export default ClientPage;

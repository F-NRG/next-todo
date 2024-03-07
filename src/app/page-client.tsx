'use client';
import * as stylex from '@stylexjs/stylex';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import List from '@/components/List/List';

const styles = stylex.create({
  form: {
    backgroundColor: '#A7E8BD',
    border: 'none',
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

  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
    console.log('EVENT on submit ', e.target);
    setItems([...items, e.target.todo.value]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('EVENT on  change ', e.target.value);
  };

  // const handleDelete = (e: SyntheticEvent<Element>) => {};

  return (
    <>
      <form
        {...stylex.props(styles.form)}
        onSubmit={handleSubmit}
      >
        <Input
          onChange={handleChange}
          placeholder="Start typing..."
          name="todo"
        />
        <Button
          text="Add todo"
          type="submit"
        />
      </form>
      <h2>Start doing:</h2>
      <List items={items} />
    </>
  );
};
export default ClientPage;

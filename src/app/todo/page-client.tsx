'use client';
import * as stylex from '@stylexjs/stylex';
import type { FormEvent } from 'react';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import List from '@/components/List/List';
import type { Todo } from '@/types/Todo';

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
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.target as HTMLFormElement;
    setTodos([...todos, { value: input.todo.value, completed: false }]);
  };

  const handleUpdateItem = (todo: Todo, index: number) => {
    const updatedTodos = todos.map((item, i) => (i === index ? { ...todo } : item));
    setTodos(updatedTodos);
  };

  const handleDeleteItem = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
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
        todos={todos}
        onDelete={handleDeleteItem}
        onUpdateTodo={handleUpdateItem}
      />
    </>
  );
};
export default ClientPage;

'use client';
import * as stylex from '@stylexjs/stylex';
import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import List from '@/components/List/List';
import type { Todo } from '@/types/Todo';
import { createTodo, deleteTodo, updateTodo } from '@/utils/actions';

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
  hr: {
    opacity: 0,
  },
});

type Props = {
  existingTodos: Array<Todo> | undefined;
};

const ClientPage: FC<Props> = ({ existingTodos = [] }) => {
  const [todos, setTodos] = useState<Array<Todo>>(existingTodos);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const { value } = form.todo as { value: string };

    const result = await createTodo({
      title: value,
      completed: false,
      authorId: 0,
    });

    setTodos([...todos, result]);
    setLoading(false);
    form.reset();

    console.log('result', result);
  };

  const handleUpdateItem = async (todo: Todo, index: number) => {
    setLoading(true);

    const result = await updateTodo(todo);
    const updatedTodos = todos.map((item, i) => (i === index ? { ...result } : item));

    console.log('result handleUpdateItem', result);

    setTodos(updatedTodos);
    setLoading(false);
  };

  const handleDeleteItem = async (index: number) => {
    setLoading(true);
    const id = todos[index].id ?? 0;
    const result = await deleteTodo(id);
    console.log('result handleDeleteItem', result);

    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
    setLoading(false);
  };

  return (
    <>
      <hr {...stylex.props(styles.hr)} />
      <form
        {...stylex.props(styles.form)}
        onSubmit={(e) => void handleSubmit(e)}
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
      {loading && <div>syncing with the cloud...</div>}

      <List
        title="Start doing:"
        todos={todos}
        onDelete={(i) => void handleDeleteItem(i)}
        onUpdateTodo={(t, i) => void handleUpdateItem(t, i)}
      />
    </>
  );
};
export default ClientPage;

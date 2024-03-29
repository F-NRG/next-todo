'use server';

import { currentUser } from '@clerk/nextjs';
import type { User } from '@prisma/client';
import prisma from './prisma';
import type { Todo } from '@/types/Todo';

const createTodo = async (todo: Todo): Promise<Todo> => {
  const user = await currentUser();
  const name = user?.firstName ?? 'unknown';
  const username = user?.username ?? 'unknown';
  const email = user?.emailAddresses[0].emailAddress;
  let response;
  if (!email) {
    throw new Error('No email found');
  }

  const existingUser: User | null = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser) {
    response = await prisma.user.create({
      data: {
        email,
        name,
        username,
      },
    });

    console.log('RESPONSE FROM CREATE USER ', response);
  }
  const authorId = existingUser ? existingUser.id : response?.id;

  const result = await prisma.todo.create({
    data: { ...todo, authorId: authorId ?? 0 },
  });

  return result;
};

const updateTodo = async (todo: Todo): Promise<Todo> => {
  const result = await prisma.todo.update({
    where: {
      id: todo.id,
    },
    data: todo,
  });

  return result;
};

const deleteTodo = async (id: number): Promise<Todo> => {
  const result = await prisma.todo.delete({
    where: {
      id,
    },
  });

  return result;
};
// const saveTodos = async (todos: Array<Todo>) => {
//   const user = await currentUser();
//   const name = user?.firstName ?? 'unknown';
//   const username = user?.username ?? 'unknown';
//   const email = user?.emailAddresses[0].emailAddress;
//   let result: unknown;
//   if (!email) {
//     throw new Error('No email found');
//   }

//   const existingUser: User | null = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   if (!existingUser) {
//     result = await prisma.user.create({
//       data: {
//         email,
//         name,
//         username,
//         todo: {
//           create: todos,
//         },
//       },
//     });
//   } else {
//     const res = await prisma.todo.deleteMany({
//       where: {
//         authorId: existingUser.id,
//       },
//     });

//     console.log('RESPONSE FROM DELETE ', res);
//     result = await prisma.todo.createMany({
//       data: todos,
//     });
//   }
//   return result;
// };

const getTodos = async () => {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  if (!email) {
    throw new Error('No email found');
  }

  const existingUser: (User & { todo: Array<Todo> }) | null = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      todo: true,
    },
  });

  console.log('existingUser', existingUser);

  return existingUser?.todo;
};

export { createTodo, getTodos, updateTodo, deleteTodo };

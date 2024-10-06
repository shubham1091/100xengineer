import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createTodo(
  userId: number,
  title: string,
  description: string
): Promise<{
  id: number;
  title: string;
  done: boolean;
  description: string | null;
  userId: number;
}> {
  const todo = await prisma.todo.create({
    data: { title, description, userId },
  });

  return todo;
}

export async function updateTodo(todoId: number): Promise<{
  id: number;
  title: string;
  done: boolean;
  description: string | null;
}> {
  const todo = await prisma.todo.update({
    select: { title: true, done: true, description: true, id: true },
    where: { id: todoId },
    data: { done: true },
  });
  return todo;
}

export async function getTodos(userId: number): Promise<
{
    id: number;
    title: string;
    done: boolean;
    description: string | null;
    userId: number;
}[]
> {
  const todos = await prisma.todo.findMany({
    where: { userId },
  });
  return todos;
}

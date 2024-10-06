import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(
  username: string,
  password: string,
  email: string
): Promise<{
  id: number;
  username: string;
  password: string;
  email: string;
}> {
  const user = await prisma.user.create({
    data: {
      username,
      password,
      email,
    },
  });

  return user;
}

export async function getUser(userId: number): Promise<{
  id: number;
  email: string;
  username: string;
  password: string;
} | null> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return user;
}

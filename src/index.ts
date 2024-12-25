import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const user = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      password: true,
    },
  });
  console.log(user);
}
interface UpdateParams {
  firstName: string;
  lastName: string;
}
async function updateUser(email: string, params: UpdateParams) {
  const user = await prisma.user.update({
    where: {
      email,
    },
    data: {
      ...params,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      password: true,
    },
  });
  console.log(user);
}
async function deleteUser(email: string) {
  const user = await prisma.user.delete({
    where: {
      email,
    },
  });
  console.log(user);
}
deleteUser("X9r1e@example.com");
// updateUser("X9r1e@example.com", { firstName: "John1", lastName: "Doe1" });
// insertUser("sadid@example.com", "123456", "Sadid", "Jones");

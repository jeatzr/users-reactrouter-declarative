// loaders/usersLoaders.ts
import { getUserById, getUsers } from "../services/users.service";
import type { LoaderFunctionArgs } from "react-router";

export async function usersLoader() {
  return await getUsers();
}

export async function userDetailLoader({ params }: LoaderFunctionArgs) {
  const userId = params.userId;

  if (!userId) {
    throw new Response("User ID not provided", { status: 400 });
  }

  const id = Number(userId);

  if (Number.isNaN(id)) {
    throw new Response("Invalid user ID", { status: 400 });
  }

  const user = await getUserById(id);

  if (!user) {
    throw new Response("User not found", { status: 404 });
  }

  return user;
}

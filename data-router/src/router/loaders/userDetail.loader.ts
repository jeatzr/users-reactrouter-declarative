import type { LoaderFunctionArgs } from "react-router";
import { getUserById } from "../../services/users.service";

export async function userDetailLoader({ params }: LoaderFunctionArgs) {
  const userId = params.userId;

  if (!userId) {
    throw new Response("User ID not provided", { status: 400 });
  }

  const id = Number(userId);

  if (Number.isNaN(id)) {
    throw new Response("Invalid user ID", { status: 400 });
  }

  return await getUserById(id);
}



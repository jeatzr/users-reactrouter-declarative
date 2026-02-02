import { getUsers } from "../../services/users.service";

export async function usersLoader() {
  return await getUsers();
}

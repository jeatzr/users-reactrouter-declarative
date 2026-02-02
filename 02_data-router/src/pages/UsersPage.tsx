import { useLoaderData } from "react-router";
import type { User } from "../types/User";
import UserList from "../components/UsersList";

export default function UsersPage() {
  const users = useLoaderData() as User[];

  return <UserList users={users} />;
}

import { useLoaderData } from "react-router";
import type { User } from "../types/User";
import UserCard from "../components/UserCard";

export default function UserDetailPage() {
  const user = useLoaderData() as User;

  return <UserCard user={user} />;
}

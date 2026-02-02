import { Link } from "react-router";
import type { User } from "../types/User";

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {
  if (users.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name} {user.surname}
          </Link>
        </li>
      ))}
    </ul>
  );
}

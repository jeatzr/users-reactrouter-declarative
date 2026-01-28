import { Link } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import type { User } from "../types/interfaces";
import { getUsers } from "../services/usersService";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function setUsersFuncion(): Promise<User[]> {
      const users: User[] = await getUsers();
      return users;
    }
    setUsersFuncion().then((users) => setUsers(users));
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

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

export default Users;

import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getUsers } from "../services/usersService";
import type { User } from "../types/User";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        if (isMounted) setUsers(data);
      } catch (err) {
        if (isMounted) setError("Failed to load users. ERR:" + err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
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

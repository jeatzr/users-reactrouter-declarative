import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { User } from "../types/User";
import { getUserById } from "../services/usersService";

function UserDetails() {
  const { userId } = useParams<{ userId: string }>();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      if (!userId) {
        setError("User ID not provided");
        setLoading(false);
        return;
      }

      const id = Number(userId);

      if (Number.isNaN(id)) {
        setError("Invalid user ID");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await getUserById(id);
        if (isMounted) setUser(data);
      } catch (err) {
        if (isMounted) setError("Failed to load user details. ERR: " + err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h3>
        {user.name} {user.surname}
      </h3>
      <ul>
        <li>Age: {user.age}</li>
        <li>Email: {user.email}</li>
        <li>ID: {user.id}</li>
      </ul>
    </div>
  );
}

export default UserDetails;

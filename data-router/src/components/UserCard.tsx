import type { User } from "../types/User";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
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

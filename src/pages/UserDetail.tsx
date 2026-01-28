import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { User } from "../types/interfaces";
import { getUserById } from "../services/usersService";

function UserDetails() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    let userIdNumber: number | null = null;
    async function getUserInfo(userId: number): Promise<User | null> {
      const user: User | null = await getUserById(userId);
      return user;
    }
    try {
      if (userId) {
        userIdNumber = Number.parseInt(userId, 10);
        getUserInfo(userIdNumber).then((user) => {
          console.log(user);
          setUserInfo(user);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  return userInfo ? (
    <div>
      <ul>
        <li>
          <h3>{`${userInfo?.name} ${userInfo?.surname}`}</h3>
        </li>
        <li>AGE: {userInfo?.age}</li>
        <li>EMAIL: {userInfo?.email}</li>
        <li>ID: {userInfo?.id}</li>
      </ul>
    </div>
  ) : (
    <div>Is not possible to display user</div>
  );
}
export default UserDetails;

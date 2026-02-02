const API_URL = "http://127.0.0.1:8000/users";
import type { User } from "../types/User";

export async function getUsers(): Promise<User[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  return response.json();
}

export async function getUserById(userId: number): Promise<User | null> {
  const response = await fetch(`${API_URL}/${userId}`);
  if (response.status == 404) {
    throw new Error("User not found");
  }
  return response.json();
}

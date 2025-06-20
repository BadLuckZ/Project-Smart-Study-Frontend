import axios from "axios";

// Get userData from "/api/user/me" in Backend's Project
export async function fetchUserData(userToken: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  return res.data;
}

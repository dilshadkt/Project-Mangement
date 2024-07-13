import { API_URL } from "@/constants";
import axios from "axios";
export const verifyToken = async (token: any) => {
  try {
    const res = await axios.post(
      `https://project-management-tk72.onrender.com/api/auth/home`,
      token,
      {
        headers: {
          "X-auth-token": `Bearer ${token.value}`,
        },
      }
    );
    return res.data;
  } catch (error: any) {
    return { status: false, error: error.response.data };
  }
};

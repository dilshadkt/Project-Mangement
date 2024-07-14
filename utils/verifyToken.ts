import { API_URL } from "@/constants";
import axios from "@/utils/axios";
export const verifyToken = async () => {
  try {
    const res = await axios.post(`${API_URL}auth/home`);

    return res.data;
  } catch (error: any) {
    return { status: false };
  }
};

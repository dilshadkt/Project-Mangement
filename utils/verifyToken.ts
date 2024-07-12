import axios from "@/utils/axios";
export const verifyToken = async (token: any) => {
  try {
    const res = await axios.post(`auth/home`, token);
    return res.data;
  } catch (error: any) {
    return { status: false, error: error.response.data };
  }
};

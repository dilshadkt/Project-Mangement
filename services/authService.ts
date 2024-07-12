import axios from "axios";
import Axios from "@/utils/axios";
import { API_URL } from "@/constants";
import setToken from "@/utils/token";

export const login = async (userDetails: any) => {
  const res = await axios.post(`auth/login`, userDetails);
  setToken(res.data.token);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const signup = async (userDetails: any) => {
  const res = await axios.post(`auth/register`, userDetails);
  setToken(res.data.token);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const auth = async () => {
  try {
    const res = await Axios.post(`auth/home`);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

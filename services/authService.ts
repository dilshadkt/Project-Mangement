import axios from "axios";
import { API_URL } from "@/constants";

export const login = async (userDetails: any) => {
  const res = await axios.post(`${API_URL}auth/login`, userDetails);
  return res.data;
};

export const signup = async (userDetails: any) => {
  const res = await axios.post(`${API_URL}auth/register`, userDetails);
  return res.data;
};

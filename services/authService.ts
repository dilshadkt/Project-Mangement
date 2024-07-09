import axios from "axios";
import { API_URL } from "@/constants";
import setToken from "@/utils/token";

export const login = async (userDetails: any) => {
  const res = await axios.post(`${API_URL}auth/login`, userDetails);
  setToken(res.data.token);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const signup = async (userDetails: any) => {
  const res = await axios.post(`${API_URL}auth/register`, userDetails);
  setToken(res.data.token);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

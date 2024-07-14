import { DefaulUserData } from "@/libs/features/user/constant";

export const API_URL = process.env.API_URL;

export const AUTH = {
  register: "signin",
  login: "login",
};

export const initialUserData = {
  loading: false,
  userData: DefaulUserData,
  fetchError: null,
  error: null,
  logged: false,
};

export const initialStickData = {
  stick: {
    stiks: [],
  },
  loading: false,
  error: null,
  fetchError: "",
  success: null,
};

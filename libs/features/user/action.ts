"use client";
import { API_URL } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface LoginUserData {
  email: string;
  password: string;
}
interface SignInUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData: any, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, userData);
      return response.data;
    } catch (error: any) {
      const customError =
        error.response?.data?.error || "An unexpected error occurred";
      return thunkAPI.rejectWithValue(customError);
    }
  }
);

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (userData: any, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}auth/register`, userData);
      return response.data;
    } catch (error: any) {
      const customError =
        error.response?.data?.error || "An unexpected error occurred";
      return thunkAPI.rejectWithValue(customError);
    }
  }
);

"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";

export interface LoginUserData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData: any, thunkAPI) => {
    try {
      const response = await axios.post(`/auth/login`, userData);
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
      const response = await axios.post(`auth/register`, userData);
      return response.data;
    } catch (error: any) {
      console.log(error);
      const customError =
        error.response?.data?.error || "An unexpected error occurred";
      return thunkAPI.rejectWithValue(customError);
    }
  }
);

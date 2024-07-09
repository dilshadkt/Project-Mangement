"use client";
import { API_URL } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData: UserData, thunkAPI) => {
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

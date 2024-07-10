import { API_URL } from "@/constants";
import setToken from "@/utils/token";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createStick = createAsyncThunk(
  "stick/createStick",
  async (stickData: any, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      setToken(token as string);
      const response = await axios.post(`${API_URL}stick/create`, stickData);
      return response.data.sticks;
    } catch (error: any) {
      const customError =
        error.response?.data?.error || "An unexpected error occurred";
      return thunkAPI.rejectWithValue(customError);
    }
  }
);
export const getSticks = createAsyncThunk(
  "stick/getSticks",
  async (stickData: any, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}stick`);
      return response.data.sticks;
    } catch (error: any) {
      const customError =
        error.response?.data?.error || "An unexpected error occurred";
      return thunkAPI.rejectWithValue(customError);
    }
  }
);

import { API_URL } from "@/constants";
import setToken from "@/utils/token";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface stickDataProps {
  stick: {
    stiks: any[];
  };
  loading: boolean;
  error: boolean;
  fetchError: string | undefined;
  success: boolean | null;
}
const initialState: stickDataProps = {
  stick: {
    stiks: [],
  },
  loading: false,
  error: false,
  fetchError: "",
  success: null,
};

export const createStick = createAsyncThunk(
  "stick/createStick",
  async (stickData: any, thunkAPI) => {
    try {
      const token = localStorage.getItem("token")?.split(" ")[1];
      setToken(token as string);
      const response = await axios.post(`${API_URL}stick/create`, stickData);
      return response.data;
    } catch (error: any) {
      const customError =
        error.response?.data?.error || "An unexpected error occurred";
      return thunkAPI.rejectWithValue(customError);
    }
  }
);

const stickSlice = createSlice({
  name: "stick",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createStick.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createStick.fulfilled, (state, action) => {
      (state.loading = false), (state.stick.stiks = action.payload);
      state.success = true;
    });
    builder.addCase(createStick.rejected, (state, action) => {
      state.loading = false;
      state.stick = [] as any;
      state.fetchError = action.error.message;
    });
  },
});

export default stickSlice.reducer;

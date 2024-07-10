import { createSlice } from "@reduxjs/toolkit";
import { createStick, getSticks } from "./action";
interface stickDataProps {
  stick: {
    stiks: any[];
  };
  loading: boolean;
  error: string | null;
  fetchError: string | undefined;
  success: boolean | null;
}
const initialState: stickDataProps = {
  stick: {
    stiks: [],
  },
  loading: false,
  error: null,
  fetchError: "",
  success: null,
};

const stickSlice = createSlice({
  name: "stick",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createStick.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createStick.fulfilled, (state, action) => {
      (state.loading = false), (state.stick.stiks = action.payload);
      state.success = true;
      state.error = "error";
    });
    builder.addCase(createStick.rejected, (state, action) => {
      state.loading = false;
      state.fetchError = action.error.message;
      state.error = action.payload as string;
    });

    // GET ALL STICK
    builder.addCase(getSticks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSticks.fulfilled, (state, action) => {
      (state.loading = false), (state.stick.stiks = action.payload);
      state.success = true;
    });
    builder.addCase(getSticks.rejected, (state, action) => {
      state.loading = false;
      state.fetchError = action.error.message;
      state.error = action.payload as string;
    });
  },
});

export default stickSlice.reducer;
export const { setError } = stickSlice.actions;

"use client";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./action";
import { UserState } from "@/types/User";

const initialState: UserState = {
  userData: {
    name: null,
    email: null,
    role: null,
    _id: null,
  },
  loading: false,
  fetchError: undefined,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(loginUser.fulfilled, (state, action) => {
      state.userData.name = action.payload.user.firstName;
      state.userData.email = action.payload.user.email;
      state.userData._id = action.payload.user.id;
      state.loading = false;
      state.fetchError = undefined;
      state.error = null;
    });
    builders.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.userData = initialState.userData;
      state.fetchError = action.error.message;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;

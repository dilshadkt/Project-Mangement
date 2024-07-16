"use client";
import { UserState } from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signInUser } from "./action";
import { DefaulUserData } from "./constant";

const initialState: UserState = {
  userData: DefaulUserData,
  loading: false,
  fetchError: null,
  error: null,
  logged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.logged = false;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.userData = DefaulUserData;
    });
    builders.addCase(loginUser.fulfilled, (state, action) => {
      state.userData.name = action.payload.user.firstName;
      state.userData.email = action.payload.user.email;
      state.userData._id = action.payload.user.id;
      state.loading = false;
      state.fetchError = null;
      state.error = null;
      state.logged = true;
      localStorage.setItem("token", action.payload.token);
      const { id, ...userDataWithouId } = action.payload.user;
      localStorage.setItem("user", JSON.stringify(userDataWithouId));
    });
    builders.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.userData = initialState.userData;
      state.fetchError = action.error.message as string;
      state.error = action.payload as string;
    });

    // SIGN IN USER
    builders.addCase(signInUser.pending, (state) => {
      state.loading = true;
      state.userData = DefaulUserData;
    });
    builders.addCase(signInUser.fulfilled, (state, action) => {
      state.userData.name = action.payload.user.firstName;
      state.userData.email = action.payload.user.email;
      state.userData._id = action.payload.user.id;
      state.loading = false;
      state.fetchError = null;
      state.error = null;
      state.logged = true;
      localStorage.setItem("token", action.payload.token);
    });
    builders.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      state.userData = initialState.userData;
      state.fetchError = action.error.message as string;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;

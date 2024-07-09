"use client";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signInUser } from "./action";
import { UserState } from "@/types/User";
import Cookies from "js-cookie";
import { DefaulUserData } from "./constant";
import setToken from "@/utils/token";

const initialState: UserState = {
  userData: DefaulUserData,
  loading: false,
  fetchError: undefined,
  error: null,
  logged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.logged = false;
      Cookies.remove("token");
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
      state.fetchError = undefined;
      state.error = null;
      state.logged = true;
      setToken(action.payload.token);
      Cookies.set("token", action.payload.token);
    });
    builders.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.userData = initialState.userData;
      state.fetchError = action.error.message;
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
      state.fetchError = undefined;
      state.error = null;
      state.logged = true;
      setToken("action.payload.token");
      Cookies.set("token", action.payload.token);
    });
    builders.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      state.userData = initialState.userData;
      state.fetchError = action.error.message;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;

"use client";
import CalenderSection from "@/container/dashboard-page/calender-section";
import { loginUser } from "@/libs/features/user/action";
import { AppDispatch, RootState } from "@/libs/store";
import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Calender = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((store: RootState) => store.user);
  useEffect(() => {
    const userData = {
      email: "hmydilshadkt@gmail.com",
      password: "1234567",
    };
    dispatch(loginUser(userData));
  }, []);
  return (
    <main>
      <CalenderSection />
      {user.loading && <h1>loading .......... 😍</h1>}
      {!user.loading && user.fetchError ? (
        <h1>Error : {user.fetchError}</h1>
      ) : null}
      {!user.loading && user.userData.name ? (
        <h1>{user.userData.name}</h1>
      ) : null}
      {user.error && <p className="text-red-500">{user.error}</p>}
    </main>
  );
};

export default Calender;

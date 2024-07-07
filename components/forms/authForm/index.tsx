"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { API_URL } from "@/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Cookies from "js-cookie";
const AuthForm = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useRouter();

  const clientAction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    const userDetails = Object.fromEntries(formData);
    try {
      const res = await axios.post(`${API_URL}auth/login`, userDetails);
      Cookies.set("token", res.data.token);
      navigate.replace("/");
    } catch (error: any) {
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <h4 className="my-4 bold-38  ">Sign in</h4>
      <form className="w-full" onSubmit={clientAction}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="border w-full p-3 my-[5px] font-light rounded-xl text-sm"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border w-full p-3 my-[5px] font-light rounded-xl text-sm"
        />
        {error && <p className="text-xs mt-1  text-red-500">{error}</p>}
        <PrimaryButton
          type="submit"
          // onClick={() => navigate.replace("/")}
          text="Sign in"
          className="w-full my-4"
        />
        <div className="mt-8 relative">
          <span className="absolute top-0 bottom-0  bg-white text-textGray w-16 h-7 left-0 right-0 m-auto flexCenter">
            or
          </span>
          <hr />
        </div>
        <div className="flexBetween gap-6 mt-6">
          <PrimaryButton
            text="Google"
            className="w-full bg-gray-200 font-medium"
          />
          <PrimaryButton
            text="facebook"
            className="w-full bg-gray-200 font-medium"
          />
        </div>
        <div className="medium-14 text-textGray w-full flex justify-center my-4">
          <p className="cursor-pointer w-fit">
            {" "}
            Don't have an account? Sing up
          </p>
        </div>
      </form>
    </>
  );
};

export default AuthForm;

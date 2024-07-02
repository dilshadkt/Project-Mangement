import PrimaryButton from "@/components/buttons/PrimaryButton";
import React from "react";

const AuthForm = () => {
  return (
    <>
      <h4 className="my-4 bold-38  ">Sign in</h4>
      <form className="w-full">
        <input
          type="text"
          placeholder="Email"
          className="border w-full p-3 my-[5px] font-light rounded-xl text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 my-[5px] font-light rounded-xl text-sm"
        />
        <PrimaryButton text="Sign in" className="w-full my-4" />
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

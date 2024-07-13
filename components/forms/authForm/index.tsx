"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { authFormDetails } from "@/components/sidebar/constant";
import { loginUser, signInUser } from "@/libs/features/user/action";
import { AppDispatch, RootState } from "@/libs/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const AuthForm = ({ authType }: { authType?: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const user = useSelector((store: RootState) => store.user);

  useEffect(() => {
    if (user.logged === true) {
      router.replace("/");
    }
  }, [user.logged]);

  // REGISTER USER
  const clientAction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userDetails = Object.fromEntries(formData);

    authType === "register"
      ? dispatch(signInUser(userDetails))
      : dispatch(loginUser(userDetails));
  };

  return (
    <>
      <h4 className="my-4 bold-38  ">
        {authType === "register" ? "Sign up" : " Sign in"}
      </h4>
      <form className="w-full" onSubmit={clientAction}>
        {authFormDetails[authType === "register" ? "signup" : "signin"].map(
          (item) => (
            <input
              key={item.id}
              type={item.type}
              placeholder={item.placeholder}
              required
              name={item.name}
              className="border w-full p-3 my-[5px] font-light rounded-xl text-sm"
            />
          )
        )}

        {user.error && (
          <p className="text-xs mt-1  text-red-500">{user.error}</p>
        )}
        <PrimaryButton
          type="submit"
          text={authType === "register" ? "Log in" : "Sign in"}
          className="w-full my-4"
        />
      </form>
      <div className="mt-4 relative">
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
        <Link href={authType === "register" ? "/auth/login" : "/auth/register"}>
          <p className="cursor-pointer w-fit">
            {authType === "register"
              ? "Already have an account? Sign in"
              : "  Don't have an account? Sing up"}
          </p>
        </Link>
      </div>
    </>
  );
};

export default AuthForm;

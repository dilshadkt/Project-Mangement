"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { authFormDetails } from "@/components/sidebar/constant";
import { AuthCnxt } from "@/libs/context";
import { loginUser, signInUser } from "@/libs/features/user/action";
import { setAuthError } from "@/libs/features/user/userSlice";
import { AppDispatch, RootState } from "@/libs/store";
import { verifyEmail } from "@/services/verifyEmail";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Axios from "@/utils/axios";
import ActionButton from "@/components/buttons/ActionButton";
const AuthForm = ({ authType }: { authType?: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const user = useSelector((store: RootState) => store.user);
  const [googleUser, setGoogleUser] = useState<any>(null);
  const [isLoading, setIsloading] = useState(false);
  const { updateOtStatus } = AuthCnxt();

  useEffect(() => {
    if (user.logged === true) {
      router.replace("/");
    }
  }, [user.logged]);

  const setError = (error: string) => {
    dispatch(setAuthError(error));
  };

  // REGISTER USER
  const clientAction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const userDetails = Object.fromEntries(formData);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    authType === "register"
      ? verifyEmail(router, email, updateOtStatus, setError)
      : dispatch(loginUser(userDetails));
  };

  // FACEBOOK AUTH
  const facebookAuth = () => {
    window.location.href = "http://localhost:8080/api/auth/facebook";
  };
  useEffect(() => {
    const googleSignUp = async (data: any) => {
      const userData = {
        firstName: data.given_name,
        lastName: data.family_name,
        googleId: data.id,
        email: data.email,
      };
      authType === "register"
        ? dispatch(signInUser(userData))
        : dispatch(loginUser(userData));
    };
    if (googleUser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          googleSignUp(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [googleUser]);
  useEffect(() => {
    setError("");
  }, [authType]);

  // GOOGLE AUTH
  const googleAuthRegister = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log(error),
  });
  const googleAuthSignin = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log(error),
  });

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
        <ActionButton
          text="Google"
          ButtonStyle="w-full bg-gray-200 font-medium"
          isLoading={isLoading}
          onClick={() =>
            authType === "register" ? googleAuthRegister() : googleAuthSignin()
          }
        />

        <PrimaryButton
          text="facebook"
          className="w-full bg-gray-200 font-medium"
          onClick={facebookAuth}
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

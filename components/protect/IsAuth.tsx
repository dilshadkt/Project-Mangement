"use client";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { verifyToken } from "@/utils/verifyToken";
import { useDispatch } from "react-redux";
import { logout } from "@/libs/features/user/userSlice";
import Image from "next/image";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState<boolean | null>(null);
    const router = useRouter();
    useEffect(() => {
      const checkAuth = async () => {
        const result = await verifyToken();
        if (!result.status) {
          dispatch(logout());
          router.replace("/auth/login");
        } else {
          setAuth(true);
        }
      };
      checkAuth();
    }, [dispatch]);

    if (auth === null) {
      return (
        <div className="h-screen w-screen flexCenter bg-black/20">
          <Image src={"/svg/load.svg"} alt="loading" width={80} height={80} />
        </div>
      );
    }

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}

"use client";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { sideBar } from "./constant";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/libs/store";
import { logout } from "@/libs/features/user/userSlice";
import { getSticks } from "@/libs/features/stick/action";
import axios from "@/utils/axios";
const Sidbar = () => {
  const pathName = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const user = useSelector((store: RootState) => store.user);
  const sticks = useSelector((store: RootState) => store.stick.stick.stiks);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("auth/logout");
      dispatch(logout());
      localStorage.removeItem("token");
      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const logoutUser = (item: (typeof sideBar)[0]) => {
    if (item.title === "Sign Out") {
      handleLogout();
    } else {
      navigate.push(item.path);
    }
  };

  useEffect(() => {
    dispatch(getSticks(""));
  }, [dispatch]);
  return (
    <>
      <section
        className={`bg-sidebarGray rounded-xl  w-[330px]  flex-col  p-4 h-full  ${
          sideBarOpen ? `flex ` : `hidden `
        } transition-all duration-300 ease-in`}
      >
        <nav className="flexBetween w-full text-textGray font-semibold">
          <h4>Menu</h4>
          <span onClick={() => setSideBarOpen(false)}>
            <MenuIcon className="cursor-pointer" />
          </span>
        </nav>
        <input
          type="text"
          className="p-2 rounded-lg bg-transparent border my-3 w-full text-sm"
          placeholder="Search"
        />
        <div className="text-sm mt-4 flex flex-col  h-full">
          <h5 className="text-textGray font-medium">Tasks</h5>
          <div className="flex flex-col  h-full justify-between">
            <div>
              <ul className="my-2 mb-3">
                {sideBar.slice(0, 4).map((item) => (
                  <Link href={item.path} key={item.id}>
                    <li
                      key={item.id}
                      className={`relative overflow-hidden my-1  group flexBetween hover:shadow-md cursor-pointer text-textGray py-2 group hover:bg-[#EBEBEB] ${
                        pathName === item.path && `bg-[#EBEBEB]`
                      } px-2 rounded-lg`}
                    >
                      <Image
                        src={"/images/paper.jpg"}
                        alt="wall texture"
                        width={200}
                        height={30}
                        className={`absolute w-full h-full object-cover opacity-0 group-hover:opacity-60 ${
                          pathName === item.path && `opacity-60`
                        } scale-x-125`}
                      />
                      <div className="relative z-30">
                        <item.icon className="opacity-70 w-5" />
                        <span className="ml-3 ">{item.title}</span>
                      </div>
                      {item.value === "stickWall" ? (
                        <span className="px-2  z-30 bg-[#EBEBEB] group-hover:bg-white rounded-[4px]">
                          {sticks.length}
                        </span>
                      ) : null}
                    </li>
                  </Link>
                ))}
              </ul>
              <hr />
            </div>
            <ul className="mt-2">
              {sideBar.slice(4).map((item) => (
                <li
                  onClick={() => logoutUser(item)}
                  key={item.id}
                  className="flexBetween cursor-pointer text-textGray py-2 group hover:bg-[#EBEBEB] px-2 rounded-lg"
                >
                  <div>
                    <item.icon className="opacity-70 w-5" />
                    <span className="ml-3 ">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <span
        className={`${sideBarOpen ? `hidden` : `block`} p-3`}
        onClick={() => setSideBarOpen(true)}
      >
        <MenuIcon className="cursor-pointer" />
      </span>
    </>
  );
};

export default Sidbar;

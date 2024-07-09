"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { sideBar } from "./constant";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import { logout } from "@/libs/features/user/userSlice";
const Sidbar = () => {
  const pathName = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const user = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  const navigate = useRouter();
  const logoutUser = (item: any) => {
    if (item.title === "Sign Out") {
      dispatch(logout());
      navigate.replace("/auth/login");
    } else {
      navigate.push(item.path);
    }
  };
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
                      <span className="px-2  z-30 bg-[#EBEBEB] group-hover:bg-white rounded-[4px]">
                        12
                      </span>
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

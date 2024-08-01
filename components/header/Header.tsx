"use client";
import { useAppSelector } from "@/libs/hooks";
import { RootState } from "@/libs/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Header = ({ heading, value }: { heading: string; value?: number }) => {
  // const name = useSelector((store: RootState) => store.user.userData.name);
  const name = useAppSelector((store) => store.user.userData.name);
  return (
    <div className="text-gray-800 flexBetween">
      <div className="flex">
        <h3 className="medium-40  [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500 ">
          {heading}
        </h3>
        {value && (
          <span className="border rounded-lg regular-40 ml-9 px-3 ">
            {value}
          </span>
        )}
      </div>
      <div className=" flex items-center  text-gray-500">
        <Link href={"/settings"}>
          <div className="w-10 capitalize h-10 rounded-full border shadow-xl bg-gray-800  text-white font-medium text-lg flexCenter">
            {name?.charAt(0)}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

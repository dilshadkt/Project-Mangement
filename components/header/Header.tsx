"use client";
import { RootState } from "@/libs/store";
import React from "react";
import { useSelector } from "react-redux";

const Header = ({ heading, value }: { heading: string; value?: number }) => {
  const name = useSelector((store: RootState) => store.user.userData.name);
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
      <h5>
        Welcome , <span>{name}</span>
      </h5>
    </div>
  );
};

export default Header;

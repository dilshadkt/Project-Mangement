"use client";
import { RootState } from "@/libs/store";
import { PrimaryButtonProps } from "@/types";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const PrimaryButton = ({
  text,
  className,
  onClick,
  type = "button",
}: PrimaryButtonProps) => {
  const isLoading = useSelector((store: RootState) => store.user.loading);
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`bg-primaryColor  ${
        isLoading
          ? "bg-gray-300 bg-primaryColor/70"
          : "hover:bg-primaryColor/90"
      }  flexCenter p-2 md:p-3 md:py-4 rounded-xl  text-sm font-medium text-textGray ${className} `}
    >
      {isLoading ? (
        <Image src={"/svg/loading.svg"} alt="lading" width={20} height={20} />
      ) : (
        text
      )}
    </button>
  );
};

export default PrimaryButton;

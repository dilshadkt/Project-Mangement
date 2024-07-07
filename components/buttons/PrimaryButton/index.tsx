"use client";
import { PrimaryButtonProps } from "@/types";
import React from "react";

const PrimaryButton = ({
  text,
  className,
  onClick,
  type = "button",
  loading,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`bg-primaryColor  ${
        loading ? "bg-gray-300 animate-pulse" : "hover:bg-primaryColor/90"
      }  flexCenter p-2 md:p-3 md:py-4 rounded-xl  text-sm font-medium text-textGray ${className} `}
    >
      {loading ? `${text}` : text}
    </button>
  );
};

export default PrimaryButton;

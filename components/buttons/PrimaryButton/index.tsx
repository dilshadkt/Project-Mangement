"use client";
import { PrimaryButtonProps } from "@/types";
import React from "react";

const PrimaryButton = ({
  text,
  className,
  onClick,
  type = "button",
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primaryColor hover:bg-primaryColor/90 flexCenter p-2 md:p-3 md:py-4 rounded-xl  text-sm font-medium text-textGray ${className} `}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

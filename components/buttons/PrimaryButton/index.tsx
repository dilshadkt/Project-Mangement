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
      className={`bg-primaryColor flexCenter p-2 md:p-3 rounded-xl  text-sm font-medium text-textGray  `}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

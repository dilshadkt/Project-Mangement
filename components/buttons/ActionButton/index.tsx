import { ActionButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const ActionButton = ({
  isLoading,
  onClick,
  text,
  ButtonStyle,
}: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`bg-primaryColor  ${
        isLoading
          ? "bg-gray-300 bg-primaryColor/70"
          : "hover:bg-primaryColor/90"
      }  flexCenter p-2 md:p-3 md:py-4 rounded-xl  text-sm font-medium text-textGray ${ButtonStyle} `}
    >
      {isLoading ? (
        <Image src={"/svg/load.svg"} alt="loading" width={20} height={20} />
      ) : (
        text
      )}
    </button>
  );
};

export default ActionButton;

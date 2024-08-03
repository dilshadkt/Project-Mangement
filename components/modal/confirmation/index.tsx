import Image from "next/image";
import React, { SetStateAction } from "react";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { Dispatch } from "@reduxjs/toolkit";
const ConfirmOperaiton = ({
  visible,
  setVisible,
  onclick,
}: {
  visible: boolean;
  onclick: () => void;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`${
        visible ? "flexCenter" : "hidden"
      } bg-black/60 fixed top-0 bottom-0 left-0 right-0 m-auto  `}
    >
      <div className=" aspect-video p-5 rounded-2xl relative w-[450px]  flexCenter flex-col  overflow-hidden">
        <Image
          src={"/images/paper.jpg"}
          alt="paper textue"
          fill
          className=" absolute w-full h-full "
        />
        <div className="relative flexCenter flex-col z-30">
          <div className="text-5xl mb-1">
            <ErrorOutlineRoundedIcon
              fontSize="inherit"
              className="text-red-500 "
            />
          </div>
          <h4 className="text-lg font-semibold mt-2">Delete Task</h4>
          <p className="mt-2">Are you sure you want to delete this ?</p>
          <p>This action cannot be undone</p>
          <div className="flexStart gap-5 mt-4">
            <button
              onClick={onclick}
              className="hover:text-red-400 transition-all duration-300 hover:scale-125"
            >
              Yes
            </button>
            <button
              onClick={() => setVisible((prev) => !prev)}
              className=" hover:text-green-400 transition-all duration-300 hover:scale-110"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOperaiton;

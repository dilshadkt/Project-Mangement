"use client";
import React, { Dispatch, useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../buttons/PrimaryButton";
const Tasks = ({
  taskOpen,
  setTaskOpen,
}: {
  taskOpen: boolean;
  setTaskOpen: React.Dispatch<boolean>;
}) => {
  const taskBarRef = useRef<HTMLDivElement>(null);

  // FOR CLOSING THE BAR WHILE CLICK OUTSIDE
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        taskBarRef.current &&
        !taskBarRef.current.contains(e.target as Node)
      ) {
        setTaskOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => document.removeEventListener("mousedown", handleClose);
  }, [taskBarRef]);
  return (
    <div
      ref={taskBarRef}
      className={` ${
        taskOpen ? `flex` : `hidden`
      } flex-initial w-[50%] max-w-[450px]  flex-col p-5 px-6 bg-sidebarGray h-full rounded-xl ml-5`}
    >
      <nav className="flexBetween w-full text-textGray font-semibold">
        <h4>Tasks:</h4>
        <span
          onClick={() => setTaskOpen(false)}
          className="w-fit h-fit hover:bg-gray-200 rounded-full px-[4px]"
        >
          <CloseIcon className="cursor-pointer font-bold w-4" />
        </span>
      </nav>
      <form className="flex justify-between flex-col h-full  ">
        <div>
          <input
            type="text"
            className="p-3 border border-gray-200 my-1 text-textGray/80 rounded-lg bg-transparent outline-none w-full"
            value={"Renew drving licence"}
          />
          <textarea
            className="p-3 border min-h-28 border-gray-200 my-1 text-textGray/80  placeholder-textGray/80 rounded-lg bg-transparent outline-none w-full"
            placeholder="description"
          ></textarea>
        </div>
        <div className="flex items-center justify-between gap-7">
          <PrimaryButton
            text="Delete Task"
            className="w-full bg-transparent border border-gray-200"
          />
          <PrimaryButton text="Save Changes" className="w-full" />
        </div>
      </form>
    </div>
  );
};

export default Tasks;

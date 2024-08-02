"use client";
import React, { Dispatch, FormEvent, useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../buttons/PrimaryButton";
import axios from "@/utils/axios";
import { taksProps } from "@/container/dashboard-page/today-section";
const Tasks = ({
  taskOpen,
  setTaskOpen,
  addTask,
  setTasks,
  currentTask,
}: {
  addTask: boolean;
  taskOpen: boolean;
  currentTask: taksProps | null;
  setTaskOpen: React.Dispatch<boolean>;
  setTasks: Dispatch<React.SetStateAction<taksProps[]>>;
}) => {
  const taskBarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  // FOR CLOSING THE BAR WHILE CLICK OUTSIDE
  // useEffect(() => {
  //   const handleClose = (e: MouseEvent) => {
  //     if (
  //       taskBarRef.current &&
  //       !taskBarRef.current.contains(e.target as Node)
  //     ) {
  //       setTaskOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClose);
  //   return () => document.removeEventListener("mousedown", handleClose);
  // }, [taskBarRef]);

  // !CREATE NEW TASK
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
    };
    axios
      .post("todo/add-todo", data)
      .then((res) => {
        setTasks(res.data.todos), setTaskOpen(false);
      })
      .catch((err) => console.log(err));
  };
  // !DELETE A TASK BASED ON IT'S ID
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    listId: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    axios
      .delete(`todo/${listId}`)
      .then(() => {
        setTasks((prev: taksProps[]): taksProps[] =>
          prev.filter((task) => task._id !== listId)
        );
        setTaskOpen(false);
      })
      .catch((err) => console.log(err));
  };
  // !SAVE CHANGES
  const handleChanges = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const changes = {
      title: formData.get("title"),
      description: formData.get("description"),
    };
    axios
      .patch(`todo/${currentTask?._id}`, changes)
      .then((res) => {
        setTasks(res.data.todo);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      ref={taskBarRef}
      className={` ${
        taskOpen
          ? ` w-[50%] ml-5 p-5 px-6 `
          : `translate-x-[100%] w-0 overflow-hidden`
      } flex-initial  flex flex-col max-w-[450px]  shadow-md border border-gray-200/20  bg-sidebarGray h-full rounded-xl transition-all duration-500`}
    >
      <nav className="flexBetween w-full text-textGray font-semibold">
        <h4>{addTask ? "Creat new task :" : " Tasks :"}</h4>
        <span
          onClick={() => {
            setTaskOpen(false);
          }}
          className="w-fit h-fit hover:bg-gray-200 rounded-full p-[4px]"
        >
          <CloseIcon className="cursor-pointer font-bold w-4" />
        </span>
      </nav>
      <form
        onSubmit={addTask ? handleSubmit : handleChanges}
        className="flex justify-between flex-col h-full "
      >
        <div>
          <input
            ref={titleRef}
            type="text"
            name="title"
            required
            className="p-3 border border-gray-200 my-1 text-textGray/80 rounded-lg bg-transparent outline-none w-full"
            onChange={() => null}
            placeholder="Enter a beautiful title"
            defaultValue={addTask ? "" : currentTask?.title}
          />
          <textarea
            ref={descriptionRef}
            name="description"
            required
            className="p-3 border min-h-28 border-gray-200 my-1 text-textGray/80  placeholder-textGray/80 rounded-lg bg-transparent outline-none w-full"
            placeholder="description"
            defaultValue={addTask ? "" : currentTask?.description}
          ></textarea>
        </div>
        <div className="flex items-center justify-between gap-7">
          {addTask ? (
            <PrimaryButton type="submit" text="Add list" className="w-full" />
          ) : (
            <>
              <PrimaryButton
                onClick={(e) => handleDelete(e, currentTask?._id as string)}
                text="Delete Task"
                className="w-full bg-transparent border border-gray-200"
              />
              <PrimaryButton
                type="submit"
                text="Save Changes"
                className="w-full"
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Tasks;

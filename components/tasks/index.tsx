"use client";
import React, { Dispatch, FormEvent, useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../buttons/PrimaryButton";
import axios from "@/utils/axios";
import { taksProps } from "@/container/dashboard-page/today-section";
import ConfirmOperaiton from "../modal/confirmation";
import { nanoid } from "nanoid";
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
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [alert, setAlert] = useState<boolean>(false);
  const [currenTag, setCurrenTag] = useState<string | null>(null);
  const [isTagShow, setIsTagShow] = useState<boolean>(false);
  const [isSubTaskInputOpen, setIsSubTaskInputOpen] = useState(false);
  const [subTasks, setSubTasks] = useState<string[]>([]);
  const [subTaskTitle, setSubTaskTitle] = useState<string>("");

  useEffect(() => {
    if (titleRef.current) titleRef.current.value = currentTask?.title as string;
    if (descriptionRef.current)
      descriptionRef.current.value = currentTask?.description as string;
  }, [currentTask]);

  // !CREATE NEW TASK
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      list: formData.get("list")?.toString() || null,
      tags: currenTag,
    };
    console.log(data);
    // axios
    //   .post("todo/add-todo", data)
    //   .then((res) => {
    //     setTasks(res.data.todos), setTaskOpen(false);
    //   })
    //   .catch((err) => console.log(err));
  };
  // !DELETE A TASK BASED ON IT'S ID
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    listId: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setAlert(true);
  };
  const DeleteTask = () => {
    axios
      .delete(`todo/${currentTask?._id}`)
      .then(() => {
        setTasks((prev: taksProps[]): taksProps[] =>
          prev.filter((task) => task._id !== currentTask?._id)
        );
        setTaskOpen(false);
        setAlert(false);
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
  const addSubtask = () => {
    setIsSubTaskInputOpen(false);
    setSubTasks((prev) => [subTaskTitle, ...prev]);
    setSubTaskTitle("");
  };

  return (
    <div
      className={` ${
        taskOpen
          ? ` w-full md:w-[50%] ml-5 p-5 px-6 `
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
          />
          <textarea
            ref={descriptionRef}
            name="description"
            required
            className="p-3 border min-h-28 border-gray-200 my-1 text-textGray/80  placeholder-textGray/80 rounded-lg bg-transparent outline-none w-full"
            placeholder="description"
          ></textarea>
          <div className="text-xs  gap-y-2 mt-3 min-w-1/2 w-fit grid grid-cols-2">
            <label htmlFor="list">List</label>
            <select
              name="list"
              className="  bg-transparent select-bordered  border rounded-[4px]  border-gray-200 p-2  py-1"
            >
              <option>Work</option>
              <option>People</option>
              <option>List 1</option>
            </select>

            <label htmlFor="list">Tasks</label>
            <ul className="flex items-center gap-2">
              {currenTag && (
                <li className="px-3 py-1 rounded-[4px] bg-blue-200 cursor-pointer">
                  {currenTag}
                </li>
              )}

              <li className="px-3 py-1 rounded-[4px] bg-gray-300 cursor-pointer relative">
                <span
                  onClick={() => setIsTagShow((prev) => !prev)}
                  className="w-full h-full"
                >
                  Add Tags
                </span>
                <ul
                  className={`${
                    isTagShow ? "flex" : "hidden"
                  }  absolute  flex-col  z-30 gap-2 p-2 shadow-md bg-gray-100 w-full left-0 right-0 m-auto -bottom-[125px] rounded-md h-[120px] overflow-y-auto `}
                >
                  <li
                    onClick={() => {
                      setCurrenTag("tag 1"), setIsTagShow(false);
                    }}
                    className="px-3 py-1 rounded-[4px] bg-blue-200 cursor-pointer"
                  >
                    Tags 1
                  </li>
                  <li
                    onClick={() => {
                      setCurrenTag("tag 2");
                      setIsTagShow(false);
                    }}
                    className="px-3 py-1 rounded-[4px] bg-red-200 cursor-pointer"
                  >
                    Tags 2
                  </li>
                  <li
                    onClick={() => {
                      setCurrenTag("tag 3");
                      setIsTagShow(false);
                    }}
                    className="px-3 py-1 rounded-[4px] bg-yellow-200 cursor-pointer"
                  >
                    Tags 2
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-5 text-xs">
            <h4 className="text-textGray text-base font-semibold">
              Subtasks :
            </h4>{" "}
            <div
              onClick={() => setIsSubTaskInputOpen(true)}
              className={`w-full relative p-2 ${
                isSubTaskInputOpen ? "hidden" : "flexStart"
              }  text-gray-500 font-normal mt-2 text-xs border border-gray-200 rounded-lg `}
            >
              <AddIcon className="font-bold" />{" "}
              <span className="ml-3"> Add new task</span>
            </div>
            <div
              className={` ${
                isSubTaskInputOpen ? "flexStart" : "hidden"
              } w-full relative p-2  text-gray-500 font-normal mt-2 text-xs border border-gray-200 rounded-lg `}
            >
              <input
                type="text"
                value={subTaskTitle}
                onChange={(e) => setSubTaskTitle(e.target.value)}
                className="w-full h-full bg-transparent border-none outline-none px-3"
              />
              <div
                onClick={() => addSubtask()}
                className="absolute cursor-pointer right-0 px-3 bg-primaryColor font-semibold text-xs py-2 rounded-r-lg"
              >
                ADD
              </div>
            </div>
            <ul>
              {subTasks.map((subTask) => (
                <li
                  key={nanoid()}
                  className={`p-3 text-textGray cursor-pointer   flexBetween`}
                >
                  <div className="flexStart">
                    <input
                      type="checkbox"
                      className="checkbox w-4 h-4 rounded-[5px]"
                    />
                    <h4 className="ml-4">{subTask}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
      <ConfirmOperaiton
        visible={alert}
        setVisible={setAlert}
        onclick={DeleteTask}
      />
    </div>
  );
};

export default Tasks;

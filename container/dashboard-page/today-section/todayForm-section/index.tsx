import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { taksProps } from "..";
import { Dispatch } from "@reduxjs/toolkit";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import axios from "@/utils/axios";
import ConfirmOperaiton from "@/components/modal/confirmation";
import Image from "next/image";
import AiTodo from "../../ai-tool-section/todo-tool";

const TodayFormSection = ({
  setTaskOpen,
  setAddTask,
  tasks,
  setTasks,
  setCurrentTask,
}: {
  setTaskOpen: React.Dispatch<boolean>;
  setAddTask: React.Dispatch<boolean>;
  tasks: taksProps[];
  setTasks: React.Dispatch<React.SetStateAction<taksProps[]>>;
  setCurrentTask: React.Dispatch<taksProps | null>;
}) => {
  const [chekedItems, setCheckedItems] = useState<string[]>([]);
  const [alert, setAlert] = useState<boolean>(false);
  // ! STORE SELECTED TASK ID UNIQULY
  const handleCheckBox = (listId: string) => {
    setCheckedItems((prev) =>
      prev.includes(listId)
        ? prev.filter((id) => id !== listId)
        : [listId, ...prev]
    );
  };
  // ! DELETE THE MULTIPLE SELECTED TASK
  const DeleteSelectedList = async () => {
    try {
      setTasks((prev: taksProps[]): taksProps[] =>
        prev.filter((task) => !chekedItems.includes(task._id))
      );
      setCheckedItems([]);
      // Function to delete a single item
      const deleteItem = async (listId: string) => {
        await axios.delete(`todo/${listId}`);
      };
      // Create an array of promises for deleting all checked items
      const deletePromises = chekedItems.map(deleteItem);
      // Await all delete operations to complete
      await Promise.all(deletePromises);
    } catch (error) {
      console.log(error);
    } finally {
      setAlert(false);
    }
  };
  return (
    <div className="mt-8  w-full h-screen flex flex-col relative">
      <button
        onClick={() => {
          setAddTask(true), setTaskOpen(true);
          setCurrentTask({
            title: "",
            description: "",
            _id: "",
          });
        }}
        className="w-full p-3 flexStart text-gray-500 font-normal text-sm border border-gray-200 rounded-lg "
      >
        <AddIcon className="font-bold" />{" "}
        <span className="ml-3"> Add new task</span>
      </button>
      <ul className="mt-2 overflow-y-auto pb-24  h-full">
        {tasks.map((task) => (
          <li
            key={task._id}
            onClick={() => {
              setAddTask(false);
              setCurrentTask(task);
              setTaskOpen(true);
            }}
            className={`p-3 border-b text-textGray cursor-pointer   flexBetween`}
          >
            <div className="flexStart">
              <input
                type="checkbox"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCheckBox(task._id);
                }}
                className="checkbox w-4 h-4 rounded-[5px]"
              />
              <h4 className="ml-4">{task.title}</h4>
            </div>
            <span className="text-lg">
              <ArrowForwardIosIcon fontSize="inherit" />
            </span>
          </li>
        ))}
      </ul>
      {chekedItems.length !== 0 && (
        <div className="h-[70px] bg-white w-full absolute bottom-0 flex items-center justify-end">
          <PrimaryButton
            onClick={() => setAlert(true)}
            text="Remove Selected Items"
            className="text-xs px-4 bg-black text-white font-normal  hover:bg-black/60"
          />
        </div>
      )}
      <ConfirmOperaiton
        visible={alert}
        setVisible={setAlert}
        onclick={DeleteSelectedList}
      />
      {/* AI TOOLKIT ICON  */}
      <AiTodo />
    </div>
  );
};

export default TodayFormSection;

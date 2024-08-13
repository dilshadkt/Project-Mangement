import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ActionButton from "@/components/buttons/ActionButton";
import axios from "@/utils/axios";
import { TaskCnxt } from "@/libs/context";

type TodoListProps = {
  heading: string;
  description: string;
};
const DrawerSection = ({
  isPromptBoxOpen,
  setIsPromptBoxOpen,
}: {
  isPromptBoxOpen: boolean;
  setIsPromptBoxOpen: React.Dispatch<boolean>;
}) => {
  const [todoList, setTodoList] = useState<TodoListProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { setTasks } = TaskCnxt();
  //! GENERATE TODO LIST
  const generateTodoList = async () => {
    setError(null);
    if (prompt.length === 0) {
      return setError("Hey yoo give some thing about your day");
    }
    setLoading(true);
    try {
      const result = await axios.post("generate/generate-todo", {
        plans: prompt,
      });
      setTodoList(result.data.todoList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // ! CREATE TODO LIST BASED ON THE GENEREATED ONE
  const createTodoList = async () => {
    setLoading(true);
    try {
      // Function to create a single todo
      const createList = async (list: TodoListProps) => {
        await axios.post(`todo/add-todo`, {
          title: list.heading,
          description: list.description,
        });
      };
      if (todoList) {
        // Create an array of promises for creating all list
        const createListsPromises = todoList?.map(createList);
        // Await all delete operations to complete
        await Promise.all(createListsPromises);
        // Fetchin updated list
        const result = await axios.get("todo");
        setTasks(result.data.todos);
        // clearing the drawyer
        handleClose();
      } else {
        setError("tolist is empty");
      }
    } catch (error: any) {
      setError(error.response);
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    setPrompt("");
    setTodoList(null);
    setError("");
    setIsPromptBoxOpen(false);
  };
  return (
    <div
      className={` ${
        isPromptBoxOpen
          ? ` w-[50%] ml-5  `
          : `scale-0 w-0 overflow-hidden hidden`
      } flex-initial  flex flex-col min-w-[450px] max-w-[450px]  p-5 px-6  shadow-md border border-gray-200/20  bg-sidebarGray h-[90vh] rounded-xl transition-all duration-500`}
    >
      <div className="flexBetween">
        <h4 className="text-textGray font-semibold">Ask Ai to shedule :</h4>
        <span
          onClick={() => handleClose()}
          className="w-fit h-fit hover:bg-gray-200 rounded-full p-[4px]"
        >
          <CloseIcon className="cursor-pointer font-bold w-4" />
        </span>
      </div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Eg: Today i have meeting on 10 of clock "
        className="outline-none min-h-[130px] font-light p-3 rounded-lg mt-2 placeholder-gray-400 text-gray-500"
      ></textarea>
      <p className={`${error ? "block" : "hidden"} text-xs text-red-500 mt-2`}>
        {error}
      </p>
      <ActionButton
        text="Generate Lists"
        ButtonStyle="mt-3"
        isLoading={loading}
        onClick={() => generateTodoList()}
      />
      {todoList !== null && (
        <div className="bg-white rounded-lg p-3 mt-3 h-full flexBetween flex-col overflow-y-auto">
          <ul className="list-disc flex flex-col gap-3 w-full">
            {todoList.map((item, index) => (
              <li key={index} className="flex flex-col">
                <h4>{`${index + 1}. ${" "}${item.heading}`}</h4>
                <p className="text-xs pl-3">{`- ${item.description}`}</p>
              </li>
            ))}
          </ul>
          <div className="w-full flexEnd">
            <ActionButton
              text="Create"
              isLoading={loading}
              onClick={() => createTodoList()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawerSection;

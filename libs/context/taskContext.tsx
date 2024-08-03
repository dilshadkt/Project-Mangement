"use client";
import { taksProps } from "@/container/dashboard-page/today-section";
import axios from "@/utils/axios";
import { createContext, ReactNode, useEffect, useState } from "react";

type TaskContext = {
  tasks: taksProps[];
  setTasks: () => {};
};

export const TaskContext = createContext<TaskContext | any>("");

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<taksProps[]>([]);
  useEffect(() => {
    axios.get("todo").then((res) => setTasks(res.data.todos));
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

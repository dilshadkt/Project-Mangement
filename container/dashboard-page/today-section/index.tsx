"use client";
import React, { useEffect, useState } from "react";
import TodayFormSection from "./todayForm-section";
import Tasks from "@/components/tasks";
import Header from "@/components/header/Header";
import axios from "@/utils/axios";
export type taksProps = {
  _id: string;
  title: string;
  description: string;
};

const TodaySection = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState<taksProps[]>([]);
  const [currentTask, setCurrentTask] = useState<taksProps | null>(null);

  useEffect(() => {
    axios.get("todo").then((res) => setTasks(res.data.todos));
  }, []);

  return (
    <section className="text-sm flex w-full  overflow-hidden h-full">
      <div className="flex-1 flex flex-col">
        <Header heading="Today" value={5} />
        <TodayFormSection
          setTaskOpen={setTaskOpen}
          setAddTask={setAddTask}
          tasks={tasks}
          setCurrentTask={setCurrentTask}
          setTasks={setTasks}
        />
      </div>

      <Tasks
        taskOpen={taskOpen}
        addTask={addTask}
        setTaskOpen={setTaskOpen}
        setTasks={setTasks}
        currentTask={currentTask}
      />
    </section>
  );
};

export default TodaySection;

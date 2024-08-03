"use client";
import React, { useEffect, useState } from "react";
import TodayFormSection from "./todayForm-section";
import Tasks from "@/components/tasks";
import Header from "@/components/header/Header";
import axios from "@/utils/axios";
import { TaskCnxt } from "@/libs/context";
import ConfirmOperaiton from "@/components/modal/confirmation";
export type taksProps = {
  _id: string;
  title: string;
  description: string;
};

const TodaySection = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [currentTask, setCurrentTask] = useState<taksProps | null>(null);
  const { tasks, setTasks } = TaskCnxt();

  return (
    <section className="text-sm flex w-full  overflow-hidden h-full">
      <div className="flex-1 flex flex-col">
        <Header heading="Today" value={tasks.length} />
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

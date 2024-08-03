"use client";
import React, { useState } from "react";
import TodayFormSection from "../../today-section/todayForm-section";
import { TaskCnxt } from "@/libs/context";
import { taksProps } from "../../today-section";

const UpcomingFormSection = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [currentTask, setCurrentTask] = useState<taksProps | null>(null);
  const { tasks, setTasks } = TaskCnxt();
  return (
    <section className="w-full gap-6 grid h-full  mt-5 grid-cols-1 overflow-y-scroll">
      <div className="h-full border w-full rounded-lg p-5">
        <h4 className=" text-lg [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500">
          Today
        </h4>
        <TodayFormSection
          setTaskOpen={setTaskOpen}
          setAddTask={setAddTask}
          tasks={tasks}
          setCurrentTask={setCurrentTask}
          setTasks={setTasks}
        />
      </div>
      <div className="h-full  w-full  grid grid-cols-2 gap-5">
        <div className="w-full h-full border rounded-lg p-5">
          <h4 className=" text-lg [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500">
            Tommorrow
          </h4>
          <TodayFormSection
            setTaskOpen={setTaskOpen}
            setAddTask={setAddTask}
            tasks={tasks}
            setCurrentTask={setCurrentTask}
            setTasks={setTasks}
          />
        </div>
        <div className="w-full h-full border rounded-lg p-5">
          <h4 className=" text-lg [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500">
            This Week
          </h4>
          <TodayFormSection
            setTaskOpen={setTaskOpen}
            setAddTask={setAddTask}
            tasks={tasks}
            setCurrentTask={setCurrentTask}
            setTasks={setTasks}
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingFormSection;

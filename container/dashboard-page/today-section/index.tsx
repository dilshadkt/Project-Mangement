"use client";
import React, { useState } from "react";
import TodayFormSection from "./todayForm-section";
import Tasks from "@/components/tasks";

const TodaySection = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  return (
    <section className="text-sm flex w-full  h-full">
      <div className="flex-1 flex flex-col">
        <div className="text-gray-800 flex">
          <h3 className="medium-40 ">Today</h3>
          <span className="border rounded-lg regular-40 ml-9 px-3 ">5</span>
        </div>
        <TodayFormSection setTaskOpen={setTaskOpen} />
      </div>

      <Tasks taskOpen={taskOpen} setTaskOpen={setTaskOpen} />
    </section>
  );
};

export default TodaySection;

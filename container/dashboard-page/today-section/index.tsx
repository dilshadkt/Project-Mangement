"use client";
import React, { useState } from "react";
import TodayFormSection from "./todayForm-section";
import Tasks from "@/components/tasks";
import Header from "@/components/header/Header";

const TodaySection = () => {
  const [taskOpen, setTaskOpen] = useState(false);
  return (
    <section className="text-sm flex w-full  h-full">
      <div className="flex-1 flex flex-col">
        <Header heading="Today" value={5} />
        <TodayFormSection setTaskOpen={setTaskOpen} />
      </div>

      <Tasks taskOpen={taskOpen} setTaskOpen={setTaskOpen} />
    </section>
  );
};

export default TodaySection;

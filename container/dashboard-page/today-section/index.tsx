import React from "react";
import TodayFormSection from "./todayForm-section";
import Tasks from "@/components/tasks";

const TodaySection = () => {
  return (
    <section className="text-sm flex w-full  h-full">
      <div className="flex-1 flex flex-col">
        <div className="text-gray-800 flex">
          <h3 className="medium-40 ">Today</h3>
          <span className="border rounded-lg regular-40 ml-9 px-3 ">5</span>
        </div>
        <TodayFormSection />
      </div>

      <Tasks />
    </section>
  );
};

export default TodaySection;

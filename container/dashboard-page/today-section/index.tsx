import React from "react";
import TodayFormSection from "./todayForm-section";

const TodaySection = () => {
  return (
    <section className="text-sm">
      <div className="text-gray-800 flex">
        <h3 className="medium-40 ">Today</h3>
        <span className="border rounded-lg regular-40 ml-9 px-3 border-gray-200">
          5
        </span>
      </div>
      <TodayFormSection />
    </section>
  );
};

export default TodaySection;

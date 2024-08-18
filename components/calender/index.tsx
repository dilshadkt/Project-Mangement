import React, { useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Image from "next/image";
const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className=" shadow-xl relative rounded-xl p-4 h-full overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="border text-2xl rounded-xl p-2 flexCenter"
        >
          <ChevronLeftIcon fontSize="inherit" />
        </button>
        <div className="flexCenter flex-col">
          <h2 className="text-lg font-medium">
            {currentMonth.toLocaleString("default", {
              month: "long",
            })}
          </h2>
          <h2 className="text-gray-400 text-xs mt-1">
            {currentMonth.toLocaleString("default", {
              year: "numeric",
            })}
          </h2>
        </div>
        <button
          onClick={nextMonth}
          className="border text-2xl rounded-xl p-2 flexCenter"
        >
          <ChevronLeftIcon fontSize="inherit" className="rotate-180" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-center text-sm text-gray-400">
            {day}
          </div>
        ))}
        {[...Array(firstDayOfMonth).keys()].map((i) => (
          <div key={`empty-${i}`} className="text-center"></div>
        ))}
        {[...Array(daysInMonth).keys()].map((i) => (
          <div
            key={i}
            className="text-center text-sm p-2 flexCenter hover:bg-[#1D9385] cursor-pointer hover:text-white rounded-xl"
          >
            {i + 1}
          </div>
        ))}
      </div>
      <Image
        src={"/images/paper.jpg"}
        width={400}
        height={400}
        alt="calender"
        className="w-full h-full absolute  object-cover top-0 bottom-0 left-0 right-0 opacity-65 -z-10 m-auto"
      />
    </div>
  );
};

export default Calender;

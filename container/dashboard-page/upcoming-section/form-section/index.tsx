"use client";
import Calender from "@/components/calender";
import CurrentUserStatus from "../current-status";
import FoucusTimer from "../focus-timer";
import UpcomingTask from "../task";
const UpcomingFormSection = () => {
  return (
    <section className="w-full gap-6 grid h-full  mt-5 grid-cols-1 overflow-y-auto hide-scrollbar ">
      <div className="h-full lg:h-[370px]  w-full grid grid-cols-4 lg:grid-cols-7 gap-y-5 lg:gap-y-0 gap-x-5">
        {/* Current user status - count of [ tasks , username  ]   */}
        <CurrentUserStatus />
        {/* Calender section   */}
        <div className=" shadow-xl rounded-xl col-span-4 lg:col-span-3">
          <Calender />
        </div>
      </div>
      <div className="lg:h-[470px]  w-full grid grid-cols-4 lg:grid-cols-7 gap-y-5 lg:gap-y-0 gap-x-5">
        {/* Upcoming tasks are here  */}
        <UpcomingTask />
        {/* Foucus timer  */}
        <FoucusTimer />
      </div>
    </section>
  );
};

export default UpcomingFormSection;

"use client";
import Header from "@/components/header/Header";
import { TimerCnxt } from "@/libs/context";
import { formatTime } from "@/utils/formateTime";
import Image from "next/image";
import React, { useEffect } from "react";

const CalenderSection = () => {
  const { time, setTime, isRunning, setIsRunning } = TimerCnxt();
  useEffect(() => {
    document.title = `Timer:${formatTime(time)}`;
  }, [time]);

  const handleStartClick = () => {
    setIsRunning(true);
    setTime(600);
  };
  const handleResetClick = () => {
    setIsRunning(true);
    setTime(600);
  };
  const handlePauseClick = () => {
    setIsRunning(false);
  };
  const handleResumeClick = () => {
    setIsRunning(true);
  };

  return (
    <section className="text-sm flex w-full flex-col h-full">
      <div className="flex-1 flex flex-col">
        <Header heading="Timer" />
      </div>
      <div className="h-full flexCenter flex-col">
        <div className="p-10 rounded-lg bg-gray-100 min-w-[460px] flexCenter relative  shadow-md border">
          <Image
            src={"/images/paper.jpg"}
            alt="paper texture"
            fill
            className="absolute opacity-55 overflow-hidden"
          />
          <Image
            src={"/images/tape.png"}
            alt="tape texture"
            width={120}
            height={20}
            className="absolute z-40 rotate-45 -top-5 -right-10"
          />
          <Image
            src={"/images/tape.png"}
            alt="tape texture"
            width={120}
            height={20}
            className="absolute z-40 -rotate-45 -top-5 -left-10"
          />
          <h3 className="text-9xl relative z-30 font-bold [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500">
            {formatTime(time as number)}
          </h3>
        </div>
        <div className="flexCenter gap-3 mt-6">
          {!isRunning && (time === 0 || time === 600) && (
            <button
              className="px-7 py-4 hover:-translate-y-1 transition-all duration-300 w-full group  relative rounded-lg"
              onClick={handleStartClick}
            >
              <Image
                src={"/images/tapebtn.png"}
                alt="paper texture"
                fill
                className="absolute  top-0 bottom-0 m-auto left-0 right-0  overflow-hidden"
              />
              <span className="relative z-40 text-textGray/70  group-hover:text-textGray">
                Start
              </span>
            </button>
          )}

          <button
            className="px-7 py-4 hover:-translate-y-1 transition-all duration-300  group rounded-lg relative"
            onClick={handleResetClick}
          >
            <Image
              src={"/images/tapebtn.png"}
              alt="paper texture"
              fill
              className="absolute  top-0 bottom-0 m-auto left-0 right-0  overflow-hidden"
            />
            <span className="relative z-40 text-textGray/70  group-hover:text-textGray">
              Reset
            </span>
          </button>
          <button
            className="px-7 py-4 hover:-translate-y-1 transition-all duration-300  group   rounded-lg relative"
            onClick={isRunning ? handlePauseClick : handleResumeClick}
          >
            <Image
              src={"/images/tapebtn.png"}
              alt="paper texture"
              fill
              className="absolute  top-0 bottom-0 m-auto left-0 right-0  overflow-hidden"
            />
            <span className="relative z-40 text-textGray/70  group-hover:text-textGray">
              {" "}
              {isRunning ? "Pause" : "Resume"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalenderSection;

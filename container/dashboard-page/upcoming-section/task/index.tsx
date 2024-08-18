import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import { TaskCnxt } from "@/libs/context";
import { taksProps } from "../../today-section";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
const UpcomingTask = () => {
  const { tasks }: { tasks: taksProps[] } = TaskCnxt();
  return (
    <div
      className="relative min-h-[300px] h-full overflow-hidden flexStart flex-col  
    col-span-4"
    >
      <div className="flexStart flex-wrap gap-2 rounded-xl text-xs  bg-gray-50 border border-gray-100 shadow-md w-full p-2">
        <div className="flexCenter cursor-pointer bg-gray-200 rounded-xl py-2 px-4 flexStart">
          <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
          Inbox
        </div>
        <div className="flexCenter cursor-pointer bg-gray-200 rounded-xl py-2 px-4">
          <AccessTimeIcon fontSize="small" className="mr-2 text-gray-500" />
          Now
        </div>
        <div className="flexCenter cursor-pointer bg-gray-200 rounded-xl py-2 px-4">
          <AccessTimeIcon fontSize="small" className="mr-2 text-gray-500" />
          Tommorrow
        </div>
        <div className="flexCenter cursor-pointer bg-gray-200 rounded-xl py-2 px-4">
          <AccessTimeIcon fontSize="small" className="mr-2 text-gray-500" />
          Next week
        </div>
      </div>
      <h4 className="text-left w-full my-4 text-lg text-gray-700 font-medium">
        Today's task
      </h4>
      <div className="rounded-xl  overflow-hidden w-full h-full relative">
        <div className="relative h-full z-40 ">
          {tasks.length === 0 ? (
            <div className="w-full h-full text-gray-500 flexCenter flex-col">
              <h5 className="capitalize">No task for today</h5>
              <Link href={"/"}>
                <span className="text-sm mt-3 hover:text-gray-700">
                  Create One ?
                </span>
              </Link>
            </div>
          ) : (
            tasks.map((task) => (
              <li
                key={task._id}
                className={`p-3 border-b text-textGray cursor-pointer   flexBetween`}
              >
                <div className="flexStart">
                  <input
                    type="checkbox"
                    className="checkbox w-4 h-4 rounded-[5px]"
                  />
                  <h4 className="ml-4">{task.title}</h4>
                </div>
                <span className="text-lg">
                  <ArrowForwardIosIcon fontSize="inherit" />
                </span>
              </li>
            ))
          )}
          <ul></ul>
        </div>
        <Image
          src={"/images/paper.jpg"}
          alt="paper texture"
          width={500}
          height={600}
          className="w-full h-full absolute top-0 bottom-0 m-auto left-0 right-0 object-cover  opacity-65"
        />
      </div>
    </div>
  );
};

export default UpcomingTask;

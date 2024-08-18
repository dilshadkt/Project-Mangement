import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
const UpcomingTask = () => {
  return (
    <div
      className="relative h-full overflow-hidden flexStart flex-col  
    col-span-4"
    >
      <div className="flexStart gap-2 rounded-xl text-xs  bg-gray-50 border border-gray-100 shadow-md w-full p-2">
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
      <div className="rounded-xl bg-white overflow-hidden w-full h-full relative">
        <Image
          src={"/images/paper.jpg"}
          alt="paper texture"
          width={500}
          height={600}
          className="w-full h-full top-0 bottom-0 left-0 right-0 object-cover  opacity-65"
        />
      </div>
    </div>
  );
};

export default UpcomingTask;

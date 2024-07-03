import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const TodayFormSection = () => {
  return (
    <div className="mt-8">
      <button className="w-full p-3 flexStart text-gray-500 font-normal text-sm border border-gray-200 rounded-lg ">
        <AddIcon className="font-bold" />{" "}
        <span className="ml-3"> Add new task</span>
      </button>
      <ul className="mt-2">
        <li className="p-3 border-b  flexBetween">
          <div className="flexStart">
            <input type="checkbox" className="checkbox w-4 h-4 rounded-[5px]" />
            <h4 className="ml-4">Resear content ideas</h4>
          </div>
          <ArrowForwardIosIcon className="w-4 text-textGray" />
        </li>
      </ul>
    </div>
  );
};

export default TodayFormSection;

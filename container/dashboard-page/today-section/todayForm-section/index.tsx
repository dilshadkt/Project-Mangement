import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TodayFormSection = ({
  setTaskOpen,
}: {
  setTaskOpen: React.Dispatch<boolean>;
}) => {
  return (
    <div className="mt-8  w-full h-full">
      <button className="w-full p-3 flexStart text-gray-500 font-normal text-sm border border-gray-200 rounded-lg ">
        <AddIcon className="font-bold" />{" "}
        <span className="ml-3"> Add new task</span>
      </button>
      <ul className="mt-2">
        <li
          onClick={() => setTaskOpen(true)}
          className={`p-3 border-b text-textGray cursor-pointer   flexBetween`}
        >
          <div className="flexStart">
            <input type="checkbox" className="checkbox w-4 h-4 rounded-[5px]" />
            <h4 className="ml-4">Resear content ideas</h4>
          </div>
          <ArrowForwardIosIcon className="w-4 " />
        </li>
      </ul>
    </div>
  );
};

export default TodayFormSection;

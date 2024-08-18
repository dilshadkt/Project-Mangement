import ActionButton from "@/components/buttons/ActionButton";
import Image from "next/image";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const FoucusTimer = () => {
  const [timer, setCounter] = useState(30);
  return (
    <div className="bg-gray-100 min-h-[300px] overflow-hidden relative   rounded-xl col-span-4 lg:col-span-3  shadow-xl ">
      <div className="relative z-40 p-7">
        <h4 className="text-2xl font-semibold [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500">
          Foucus Timer
        </h4>
        <p className="opacity-80 mt-1">Set your goal </p>
      </div>
      <div className="absolute z-40 flexCenter flex-col top-0 bottom-0 right-0 left-0 m-auto ">
        <div className="flexCenter gap-5">
          <button
            onClick={() => setCounter((prev) => prev + 1)}
            className="w-12 aspect-square  outline-none    rounded-full  bg-gray-700/30 hover:bg-gray-700/80 transition-all duration-300 text-2xl flexCenter"
          >
            <AddIcon className="text-gray-200 font-bold" fontSize="inherit" />
          </button>
          <h4 className="text-5xl [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500 font-medium">
            <span>{timer}</span>
          </h4>
          <button
            onClick={() => setCounter((prev) => prev - 1)}
            className="w-12 aspect-square  rounded-full outline-none   bg-gray-700/30 hover:bg-gray-700/80 transition-all duration-300 text-2xl flexCenter"
          >
            <RemoveIcon
              className="text-gray-200 font-bold"
              fontSize="inherit"
            />
          </button>
        </div>
        <ActionButton
          text="Start"
          ButtonStyle="mt-5 rounded-full bg-gray-700/30 hover:bg-gray-700/80 transition-all duration-300 text-white"
        />
      </div>
      <Image
        src={"/images/paper.jpg"}
        alt="timer"
        width={300}
        height={400}
        className="w-full absolute h-full object-cover rounded-md top-0 bottom-0 left-0 right-0 m-auto   opacity-70  "
      />
      <Image
        src={"/images/tree.png"}
        alt="timer"
        width={400}
        height={400}
        className={` bottom-0 left-0 absolute object-cover rounded-md opacity-55  `}
      />
    </div>
  );
};

export default FoucusTimer;

import Image from "next/image";
import React, { useState } from "react";
import DrawerSection from "./drawyer-section";

const AiTodo = () => {
  const [isPromptBoxOpen, setIsPromptBoxOpen] = useState(false);

  return (
    <div className="absolute bottom-0 right-0  cursor-pointer">
      {/* DRAWERY SECTION  */}
      <DrawerSection
        isPromptBoxOpen={isPromptBoxOpen}
        setIsPromptBoxOpen={setIsPromptBoxOpen}
      />
      {/* ICONS  */}
      <div
        onClick={() => setIsPromptBoxOpen(true)}
        className={` ${isPromptBoxOpen && "hidden"} relative group  `}
      >
        <Image
          src={"/images/ring-glowing-points-black.png"}
          alt="ring-glowing-points-black"
          width={60}
          height={60}
          className=" group-hover:scale-125 transition-all duration-500 "
        />
        <span className="absolute -top-6  -right-16 ltransform whitespace-nowrap -translate-x-1/2 scale-0 rounded-md bg-gray-800 text-white text-xs px-2 py-1 transition-all duration-300 group-hover:scale-100">
          Do you wanna help 😁
        </span>
      </div>
    </div>
  );
};

export default AiTodo;

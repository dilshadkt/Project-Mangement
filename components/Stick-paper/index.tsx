import Image from "next/image";
import React from "react";

const StickPaper = () => {
  return (
    <div
      className="bg-[#f2d948] max-h-[330px] shadow-lg rotate-2 z-30
 origin-top-left transition-all duration-200 cursor-grab hover:rotate-0 overflow-hidden rounded-md  relative"
    >
      <Image
        src={"/images/paper.jpg"}
        alt="paper texture"
        width={250}
        height={400}
        className="absolute w-full h-full object-cover opacity-50"
      />
      <div className="w-2 h-2 absolute top-2 left-2 rounded-full bg-gradient-to-r from-black to-gray-300 shadow-2xl border-[0.2px] border-gray-300/90"></div>
    </div>
  );
};

export default StickPaper;

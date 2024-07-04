import StickPaper from "@/components/Stick-paper";
import Image from "next/image";
import React from "react";

const StickWallSection = () => {
  return (
    <div className="mt-8 w-full h-full border shadow-md border-gray-200  overflow-hidden relative grid grid-cols-4 gap-5 rounded-xl p-5">
      <Image
        src={"/images/wall.jpg"}
        alt="wall"
        width={600}
        height={600}
        className="w-full h-full absolute object-cover opacity-40"
      />
      <StickPaper />
      <StickPaper />
      <StickPaper />
      <StickPaper />
    </div>
  );
};

export default StickWallSection;

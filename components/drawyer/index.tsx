"use client";
import Image from "next/image";
import React from "react";
interface DrawyerProps {
  position?: "drawer-start" | "drawer-end";
  id: string;
  children?: React.ReactNode;
  className?: string;
}

const Drawyer = ({
  position = "drawer-end",
  id = "",
  children,
  className,
}: DrawyerProps) => {
  return (
    <div className={`drawer  ${position} z-[1000]   `}>
      <input id={id} type="checkbox" className="drawer-toggle" />

      <div className="drawer-side z-[1000] ">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div
          className={`  menu bg-transparent text-base-content min-h-full flex flex-col h-full `}
        >
          <div
            className={`relative shadow-lg border   bg-base-200 text-base-content overflow-hidden  rounded-l-2xl h-full  w-80 ${className}`}
          >
            {children}
            <Image
              src={"/images/paper.jpg"}
              alt="drawer"
              width={400}
              height={600}
              className="absolute left-0 top-0 bottom-0 right-0 w-full h-full object-cover opacity-65"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawyer;

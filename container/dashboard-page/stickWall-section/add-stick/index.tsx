"use client";
import Drawyer from "@/components/drawyer";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddStick = () => {
  const [value, setValue] = useState<any>();

  return (
    <Drawyer
      id="drawer"
      position="drawer-end"
      className="w-[500px] flexCenter px-5"
    >
      <form action="" className="w-full flex flex-col relative z-40 ">
        <label htmlFor="title" className="regular-20 mb-2 text-textGray">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter the title"
          className="p-3 rounded-lg border border-gray-300 bg-transparent outline-none my-2"
        />
        <div className="min-h-[300px] ">
          <ReactQuill
            theme="snow"
            onChange={setValue}
            value={value}
            style={{ height: "250px" }}
            className="custom-quill "
          />
        </div>
        <div>
          <PrimaryButton text="Add" className="w-full" />
        </div>
      </form>
    </Drawyer>
  );
};

export default AddStick;

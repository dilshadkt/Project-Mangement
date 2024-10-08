"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Drawyer from "@/components/drawyer";
import { createStick } from "@/libs/features/stick/action";
import { AppDispatch, RootState } from "@/libs/store";
import dynamic from "next/dynamic";
import { FormEvent, useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { setSucces } from "@/libs/features/stick/stickSlice";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddStick = () => {
  const [value, setValue] = useState<any>();
  const titleRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const stick = useSelector((store: RootState) => store.stick);
  const success = useSelector((store: RootState) => store.stick.success);
  const closeDrawer = () => {
    const checkbox = document.getElementById("drawer") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  };
  useEffect(() => {
    if (success) {
      closeDrawer();
      dispatch(setSucces());

      //CLEAR THE FORM VALUE WHILE IT SUCCESS
      setValue("");
      if (titleRef.current) {
        titleRef.current.value = "";
      }
    }
  }, [success]);
  const addStickWall = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const stickDetails = {
      title: formData.get("title"),
      desc: value,
    };
    dispatch(createStick(stickDetails));
  };

  return (
    <Drawyer
      id="drawer"
      position="drawer-end"
      className="w-full md:w-[500px] flexCenter flex-col px-5"
    >
      <Image
        src={"/svg/logo.svg"}
        alt="logo"
        width={100}
        height={100}
        className="relative z-30 floating opacity-80  "
      />
      <form
        onSubmit={addStickWall}
        className="w-full flex flex-col relative z-40 "
      >
        <label htmlFor="title" className="regular-20 mb-2 text-textGray">
          Title
        </label>
        <input
          ref={titleRef}
          type="text"
          name="title"
          required
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
        <p className="text-xs text-red-500 my-2">{stick.error}</p>
        <div>
          <PrimaryButton type="submit" text="ADD " className="w-full" />
        </div>
      </form>
    </Drawyer>
  );
};

export default AddStick;

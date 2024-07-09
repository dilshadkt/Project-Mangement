"use client";
import Drawyer from "@/components/drawyer";
import React, { useState, useEffect, FormEvent } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import axios from "axios";
import { API_URL } from "@/constants";
import setToken from "@/utils/token";
import { createStick } from "@/libs/features/stick/stickSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore, RootState } from "@/libs/store";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddStick = () => {
  const [value, setValue] = useState<any>();
  const dispatch = useDispatch<AppDispatch>();
  const stick = useSelector((store: RootState) => store.stick);
  const success = useSelector((store: RootState) => store.stick.success);
  const closeDrawer = () => {
    const checkbox = document.getElementById("drawer") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  };
  const addStickWall = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const stickDetails = {
      title: formData.get("title"),
      desc: value,
    };
    dispatch(createStick(stickDetails));
  };
  useEffect(() => {
    closeDrawer();
  }, [success]);
  return (
    <Drawyer
      id="drawer"
      position="drawer-end"
      className="w-[500px] flexCenter px-5"
    >
      <form
        onSubmit={addStickWall}
        className="w-full flex flex-col relative z-40 "
      >
        <label htmlFor="title" className="regular-20 mb-2 text-textGray">
          Title
        </label>
        {stick.loading ? <h1>loading...</h1> : null}
        <input
          type="text"
          name="title"
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
          <PrimaryButton type="submit" text="Add" className="w-full" />
        </div>
      </form>
    </Drawyer>
  );
};

export default AddStick;

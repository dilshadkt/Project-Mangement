"use client";
import { getUser, updateUser } from "@/services/profileService";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { setUserData } from "@/libs/features/user/userSlice";
import { useDispatch } from "react-redux";

interface initialDataProps {
  firstName: string;
  lastName: string;
}
const FormSection = () => {
  const [edit, setEdit] = useState(true);
  const { register, setValue, getValues } = useForm();
  const [initialData, setInitialData] = useState<initialDataProps | null>();
  const [error, setError] = useState<string | null>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(false);
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  };
  useEffect(() => {
    const getUserData: any = async () => {
      const user = await getUser();
      if (user) {
        const userData = { firstName: user.firstName, lastName: user.lastName };
        setInitialData(userData);
        setValue("firstName", user.firstName);
        setValue("lastName", user.lastName);
        setValue("email", user.email);
        setValue("mobile", user.mobile || undefined);
        setValue("created", user.created.split("T")[0]);
      }
    };
    getUserData();
  }, []);

  const handleSave = async () => {
    setError(null);
    const { firstName, lastName } = getValues();
    const currentData = { firstName, lastName };
    if (!_.isEqual(initialData, currentData)) {
      const res = await updateUser(currentData);
      setInitialData({ ...(res as initialDataProps) });
      dispatch(setUserData({ name: res?.firstName }));
      setEdit(true);
    } else {
      return setError("Change any field");
    }
    setEdit(true);
  };

  const cancelChanges = () => {
    setEdit(!edit);
    setValue("firstName", initialData?.firstName);
    setValue("lastName", initialData?.lastName);
  };

  return (
    <section className="h-full shadow-md border overflow-y-auto  hide-scrollbar bg-gradient-to-r from-white to-gray-100 relative  p-5 mt-3 rounded-lg">
      <Image
        src={"/images/paper.jpg"}
        alt="paper-texture"
        width={600}
        height={300}
        className="absolute w-full  top-0 object-cover h-full overflow-hidden left-0 right-0 bottom-0 opacity-50"
      />
      <div className="flex flex-col overflow-y-auto hide-scrollbar  h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full mb-20 md:mb-0">
          <div>
            <form className="relative z-40">
              <label htmlFor="firstName" className="font-medium text-gray-900">
                First Name :
              </label>
              <input
                type="text"
                disabled={edit}
                {...register("firstName")}
                className="outline-none mb-2 border-none p-3 w-full bg-transparent "
                placeholder="First name"
              />
              <label htmlFor="firstName" className="font-medium text-gray-900">
                Last Name :
              </label>
              <input
                type="text"
                disabled={edit}
                {...register("lastName")}
                className="outline-none mb-2 border-none p-3 w-full bg-transparent "
                placeholder="Last name"
              />
              <label htmlFor="firstName" className="font-medium text-gray-900">
                User email :
              </label>
              <input
                type="email"
                {...register("email")}
                disabled
                className="outline-none mb-2 border-none p-3 w-full bg-transparent "
                placeholder="abc@gmail.com"
              />
            </form>
            <div className="absolute bottom-5 flexStart left-5 z-50">
              {!edit ? (
                <div className="flexStart">
                  <button
                    title="Save"
                    className="mr-2"
                    onClick={() => handleSave()}
                  >
                    <Image
                      src={"/images/tick.png"}
                      alt="cancel"
                      width={36}
                      height={36}
                      className="opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />
                  </button>
                  <button
                    title="Cancel changes"
                    className="ml-2"
                    onClick={() => cancelChanges()}
                  >
                    <Image
                      src={"/images/cancel.png"}
                      alt="cancel"
                      width={36}
                      height={36}
                      className="opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />
                  </button>
                </div>
              ) : (
                <button
                  title="Edit"
                  className="mr-2"
                  onClick={() => handleEdit()}
                >
                  <Image
                    src={"/images/pencil.png"}
                    alt="cancel"
                    width={36}
                    height={36}
                    className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </button>
              )}
              {error && (
                <p className=" text-sm font-medium text-yellow-500">{error}</p>
              )}
            </div>
          </div>

          <div
            className="w-full bg-[#C5B9A6] overflow-hidden mt-5 border h-full md:max-h-[250px]
             md:rotate-6 hover:rotate-0 transition-all
           duration-300 origin-top-left border-gray-200 relative shadow-md rounded-lg p-5"
          >
            <Image
              src={"/images/paper.jpg"}
              width={300}
              height={300}
              alt="paper"
              className="absolute w-full h-full object-cover scale-125 opacity-45"
            />
            <div className="w-2 h-2 absolute top-2 left-2 rounded-full bg-gradient-to-r from-black to-gray-300 shadow-2xl border-[0.2px] border-gray-300/90"></div>

            <h5 className="font-medium text-gray-900 mb-1">Joined on :</h5>
            <input
              type="text"
              {...register("created")}
              className="bg-transparent outline-none border-none"
              placeholder="created @"
            />
            <h5 className="font-medium text-gray-900 mb-1 mt-3">
              Last active :
            </h5>
            <span className="text-gray-500 ">12/05/2024</span>
            <h5 className="font-medium text-gray-900 mb-1 mt-3">
              Current Plan :
            </h5>
            <span className="text-gray-500 ">Free Trial</span>
            <Image
              src={"/images/post.png"}
              alt="post"
              width={200}
              height={200}
              className="absolute w-[120px] md:w-[200px] -bottom-10 right-0 md:-right-20 opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

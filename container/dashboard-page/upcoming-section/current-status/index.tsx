import { TaskCnxt } from "@/libs/context";
import { useAppSelector } from "@/libs/hooks";
import Image from "next/image";
import React from "react";

const CurrentUserStatus = () => {
  const name = useAppSelector((store) => store.user.userData.name);
  const { tasks } = TaskCnxt();
  return (
    <div className="rounded-xl h-[300px] relative lg:h-full overflow-hidden flexCenter  col-span-4 border-8 border-gray-50 shadow-xl">
      <Image
        src={"/images/dashboard.jpg"}
        alt="dashboard"
        width={400}
        height={270}
        className="w-full h-full relative opacity-95  object-cover object-center rounded-md"
      />
      <div className="absolute w-full h-full  p-6">
        <div className="w-full h-full relative">
          <div className="flex flex-col">
            <h4 className=" text-xl md:text-2xl font-semibold [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500">
              Good Morning, {name}
            </h4>
            <h6 className="mt-2">You have {tasks.length} Task for today</h6>
          </div>
          <div className=" absolute flex flex-col max-h-[65%] h-fit md:h-full md:min-h-[190px] w-full md:w-[250px] bg-white shadow-lg border border-gray-200/60  p-3 rounded-xl bottom-0 right-0">
            <h5 className="[text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500">
              Up next
            </h5>
            <div className=" h-fit md:h-full grid grid-cols-2 md:grid-cols-1 mt-3  gap-3">
              <div className=" flexStart">
                <hr className="h-full min-w-1 bg-green-400 rounded-md" />
                <div className="flex flex-col justify-between   text-xs ml-1">
                  <p className="font-medium">
                    Design Team Meeting -Discurs new Project wireframe
                  </p>
                  <p className="text-[10px] text-gray-500 mt-2 ">
                    11:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
              <div className="flexStart">
                <hr className="h-full min-w-1 bg-violet-400 rounded-md" />
                <div className="flex flex-col text-xs ml-1 justify-between">
                  <p className="font-medium">
                    Design Team Meeting -Discurs new Project wireframe
                  </p>
                  <p className="text-[10px] text-gray-500 mt-2 ">
                    11:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentUserStatus;

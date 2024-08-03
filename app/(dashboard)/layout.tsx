"use client";
import isAuth from "@/components/protect/IsAuth";
import Sidbar from "@/components/sidebar/Sidbar";
import { TaskContextProvider } from "@/libs/context/taskContext";
import { TimerContextProvider } from "@/libs/context/TimerContext";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="p-5 w-full h-screen flex ">
      <TimerContextProvider>
        <TaskContextProvider>
          <Sidbar />
          <div className="w-full  pl-5 py-2  ">{children}</div>
        </TaskContextProvider>
      </TimerContextProvider>
    </div>
  );
};

export default isAuth(DashboardLayout);

import Sidbar from "@/components/sidebar/Sidbar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="p-5 w-full h-screen flex ">
      <Sidbar />
      <div className="w-full  pl-5 py-2  ">{children}</div>
    </div>
  );
};

export default DashboardLayout;

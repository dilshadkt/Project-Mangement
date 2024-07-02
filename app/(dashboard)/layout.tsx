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
      {children}
    </div>
  );
};

export default DashboardLayout;

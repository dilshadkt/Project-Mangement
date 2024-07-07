import Header from "@/components/header/Header";
import React from "react";

const SettingsSection = () => {
  return (
    <section className="text-sm flex w-full  h-full">
      <div className="flex-1 flex flex-col">
        <Header heading="Settings" />
      </div>
    </section>
  );
};

export default SettingsSection;

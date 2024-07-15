import Header from "@/components/header/Header";
import React from "react";
import BannerSection from "./banner-section";
import FormSection from "./form-section";

const SettingsSection = () => {
  return (
    <section className="text-sm flex flex-col w-full  h-full">
      <Header heading="Settings" />
      <BannerSection />
      <FormSection />
    </section>
  );
};

export default SettingsSection;

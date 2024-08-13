import ConfimationForm from "@/components/forms/confirmForm";
import BannerSection from "@/container/getstart-page/banner-section";
import React from "react";

const ConfirmationSection = () => {
  return (
    <section>
      <section className="w-full h-screen p-5 grid grid-cols-2">
        <BannerSection />
        <div className="w-full h-full  flexCenter">
          <div className="max-w-[70%] w-full  2xl:max-w-[450px] flex flex-col">
            <ConfimationForm />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ConfirmationSection;

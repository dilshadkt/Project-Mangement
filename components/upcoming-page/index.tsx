import React from "react";
import Header from "../header/Header";
import UpcomingFormSection from "@/container/dashboard-page/upcoming-section/form-section";

const UpcomingSection = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header heading="Upcoming Tasks" />
      <UpcomingFormSection />
    </div>
  );
};

export default UpcomingSection;

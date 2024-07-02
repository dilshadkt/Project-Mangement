import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <div className="w-full bg-gray-900 h-full text-red-300 rounded-xl flexCenter relative">
      <h4 className="absolute top-0 left-0 text-white font-semibold m-5  text-2xl">
        Organic <br /> Mind
      </h4>
      <Image
        src={"/images/getstart.png"}
        alt="get-start"
        width={350}
        height={350}
      />
    </div>
  );
};

export default BannerSection;

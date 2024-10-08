import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <div className="flex  z-30  mt-5 rounded-lg p-5 bg-gradient-to-r from-white to-gray-100 relative  h-[170px] md:min-h-[200px] shadow-md border floating">
      <Image
        src={"/images/paper.jpg"}
        alt="paper-texture"
        width={600}
        height={300}
        className="absolute w-full  top-0 object-cover h-[170px] md:h-[200px] overflow-hidden left-0 right-0 bottom-0 opacity-50"
      />
      <Image
        src={"/images/fly.png"}
        alt="paper-texture"
        width={40}
        height={40}
        className="absolute w-6 md:w-10 bottom-5 left-56 opacity-30 "
      />
      <Image
        src={"/images/down.png"}
        alt="paper-texture"
        width={70}
        height={70}
        className="absolute top-5  w-6 md:w-10  right-40 left-0 mx-auto opacity-20  -rotate-12"
      />
      <Image
        src={"/svg/success.svg"}
        alt="success"
        width={170}
        height={170}
        className="absolute top-5  w-[110px] md:w-[170px]  right-5 opacity-50 border shadow-md -rotate-12"
      />
      <Image
        src={"/svg/goal.svg"}
        alt="gaols"
        width={170}
        height={170}
        className="absolute top-5 left-0  w-[110px] md:w-[170px] opacity-50 bg-white border shadow-md -rotate-12"
      />

      <div
        className="absolute flexCenter -bottom-1/4 left-0 right-0 mx-auto 
       w-[110px] md:w-[160px] shadow-md border-2 border-white rounded-full  aspect-square"
      >
        <Image
          src={"/images/men.png"}
          width={400}
          height={400}
          alt="profile"
          className=" rounded-full scale-150 w-full h-full object-cover "
        />
        <div className="relative w-full h-full  flexCenter">
          <div className=" absolute  bottom-1 md:bottom-3 bg-gradient-to-r from-white to-gray-300 border shadow-md  right-3 flexCenter w-5 md:w-8 rounded-full aspect-square">
            <Image
              src={"/images/focus.png"}
              alt="focus"
              width={150}
              height={150}
              className="w-full h-full scale-150 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import React from "react";

const GetStartSection = () => {
  return (
    <section className="w-full h-screen p-5 grid grid-cols-2">
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
      <div className="w-full h-full flexCenter">
        <div className="max-w-[70%] 2xl:max-w-[450px] flex flex-col">
          <h5 className="bold-38 text-gray-900">Productive Mind</h5>
          <p className="my-5  text-textGray regular-14">
            With only the features you need , Organic Mind is customized for
            individuals seeking a stress-free way stay focused on thier goals,
            projects,and tasks.
          </p>
          <PrimaryButton text="Get started" />
          <div className="medium-14 text-textGray w-full flex justify-center my-4">
            <p className="cursor-pointer w-fit">
              {" "}
              Already have an account? sign in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartSection;

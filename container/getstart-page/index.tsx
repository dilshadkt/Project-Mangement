import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import React from "react";
import BannerSection from "./banner-section";
import Link from "next/link";

const GetStartSection = () => {
  return (
    <section className="w-full h-screen p-5 grid grid-cols-2">
      <BannerSection />
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
            <Link href={"/auth/login"} className="cursor-pointer w-fit">
              {" "}
              Already have an account? sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartSection;

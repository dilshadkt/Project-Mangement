import Image from "next/image";
import React from "react";

const StickPaper = ({
  title,
  id,
  image,
  desc,
}: {
  title: string;
  id?: string;
  image?: any;
  desc?: any;
}) => {
  return (
    <div
      id={id}
      className="bg-[#f2d948] max-h-[400px]   min-h-[350px] shadow-lg rotate-2 z-30
 origin-top-left transition-all duration-200 cursor-grab p-4 pt-6 hover:rotate-0 overflow-hidden rounded-md  relative"
    >
      {/* TEXTURE IMAGE  */}
      <Image
        src={"/images/paper.jpg"}
        alt="paper texture"
        width={250}
        height={400}
        className="absolute w-full h-full top-0 object-cover left-0 right-0 bottom-0 opacity-50"
      />
      {image && (
        <Image
          src={image}
          alt="bg-image"
          width={250}
          height={400}
          className="absolute w-full h-full top-0 object-cover left-0 right-0 bottom-0 opacity-50"
        />
      )}

      <div className="relative z-50">
        <h4 className="medium-18 text-gray-700">{title}</h4>
        {desc && <p className="mt-3 text-textGray">{desc}</p>}
      </div>
      <div className="w-2 h-2 absolute top-2 left-2 rounded-full bg-gradient-to-r from-black to-gray-300 shadow-2xl border-[0.2px] border-gray-300/90"></div>
    </div>
  );
};

export default StickPaper;

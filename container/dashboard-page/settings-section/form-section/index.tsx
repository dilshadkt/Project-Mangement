import Image from "next/image";
import React from "react";

const FormSection = () => {
  return (
    <section className="h-full shadow-md border  hide-scrollbar bg-gradient-to-r from-white to-gray-100 relative  p-5 mt-3 rounded-lg">
      <Image
        src={"/images/paper.jpg"}
        alt="paper-texture"
        width={600}
        height={300}
        className="absolute w-full  top-0 object-cover h-full overflow-hidden left-0 right-0 bottom-0 opacity-50"
      />
      <form action="" className="flex flex-col overflow-y-auto">
        <div className="grid grid-cols-2">
          <div>
            <label htmlFor="firstName" className="font-medium text-gray-900">
              First Name :
            </label>
            <input
              type="text"
              className="outline-none mb-2 border-none p-3 w-full bg-transparent "
              placeholder="Dilshad"
            />
            <label htmlFor="firstName" className="font-medium text-gray-900">
              Last Name :
            </label>
            <input
              type="text"
              className="outline-none mb-2 border-none p-3 w-full bg-transparent "
              placeholder="KT"
            />
            <label htmlFor="firstName" className="font-medium text-gray-900">
              User email :
            </label>
            <input
              type="email"
              className="outline-none mb-2 border-none p-3 w-full bg-transparent "
              placeholder="hmydilshadkt@gmail.com"
            />
            <label htmlFor="firstName" className="font-medium text-gray-900">
              User role :
            </label>
            <input
              type="text"
              className="outline-none mb-2 border-none p-3 w-full bg-transparent "
              placeholder="Free plan"
            />
            <label htmlFor="firstName" className="font-medium text-gray-900">
              Mobile :
            </label>
            <input
              type="text"
              className="outline-none mb-2 border-none p-3 w-full bg-transparent "
              placeholder="Free plan"
            />
          </div>
          <div className="w-full bg-[#C5B9A6] overflow-hidden mt-5 border max-h-[250px] rotate-6 hover:rotate-0 transition-all duration-300 origin-top-left border-gray-200 relative shadow-md rounded-lg p-5">
            <Image
              src={"/images/paper.jpg"}
              width={300}
              height={300}
              alt="paper"
              className="absolute w-full h-full object-cover scale-125 opacity-45"
            />
            <div className="w-2 h-2 absolute top-2 left-2 rounded-full bg-gradient-to-r from-black to-gray-300 shadow-2xl border-[0.2px] border-gray-300/90"></div>

            <h5 className="font-medium text-gray-900 mb-1">Joined on :</h5>
            <span className="text-gray-500 ">12/05/2024</span>
            <h5 className="font-medium text-gray-900 mb-1 mt-3">
              Last active :
            </h5>
            <span className="text-gray-500 ">12/05/2024</span>
            <Image
              src={"/images/post.png"}
              alt="post"
              width={200}
              height={200}
              className="absolute -bottom-10 -right-20 opacity-40"
            />
          </div>
        </div>

        <div></div>
      </form>
    </section>
  );
};

export default FormSection;

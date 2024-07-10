"use client";
import { RootState } from "@/libs/store";
import DOMPurify from "dompurify";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Modal = ({ stickId }: { stickId: string }) => {
  const sticks = useSelector((store: RootState) => store.stick.stick.stiks);
  const activeStick = sticks.filter((stick) => stick._id === stickId)[0];
  const { title, desc } = activeStick;
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div
        className="bg-[#f2d948]  modal-box max-h-[470px]  w-2/6  min-h-[400px] shadow-lg  z-30
                  rigin-top-left transition-all duration-200 cursor-pointer group p-4 pt-6  overflow-hidden rounded-md  relative"
      >
        <Image
          src={"/images/down.png"}
          alt="down"
          width={170}
          height={170}
          className="absolute top-0 bottom-0 left-0 right-0 m-auto z-10 opacity-10"
        />
        <Image
          src={"/images/fly.png"}
          alt="down"
          width={70}
          height={70}
          className="absolute  bottom-5 left-0  z-10 opacity-10"
        />
        <div className="absolute bottom-5 right-5 z-50">
          <button title="Edit" className="mr-2">
            <Image
              src={"/images/pencil.png"}
              alt="cancel"
              width={36}
              height={36}
              className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          </button>
          <button title="delete">
            <Image
              src={"/images/trash.png"}
              alt="cancel"
              width={32}
              height={32}
              className="opacity-40 hover:opacity-80 hover:scale-110 transition-all duration-300"
            />
          </button>
        </div>
        <Image
          src={"/images/paper.jpg"}
          alt="paper texture"
          width={250}
          height={400}
          className="absolute w-full h-full top-0 object-cover left-0 right-0 bottom-0 opacity-50"
        />
        <div className="relative z-50">
          <h4 className="medium-18 text-gray-700">{title}</h4>

          {desc && (
            <div
              className="mt-3 text-textGray"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(desc),
              }}
            ></div>
          )}
        </div>

        <div className="modal-action p-0 absolute top-0 right-5 z-50">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-transparent" title="cancel">
              <Image
                src={"/images/cancel.png"}
                alt="cancel"
                width={32}
                height={32}
                className="opacity-60 hover:opacity-80 hover:scale-110 transition-all duration-300"
              />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;

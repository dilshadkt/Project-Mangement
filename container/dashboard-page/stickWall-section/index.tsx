"use client";
import Modal from "@/components/modal";
import StickPaper from "@/components/Stick-paper";
import AddPaper from "@/components/Stick-paper/add-paper/AddPaper";
import { RootState } from "@/libs/store";
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StickWallSection = () => {
  const sticks = useSelector((store: RootState) => store.stick.stick);
  const [selectedStick, setSelectedStick] = useState<string | null>(null);

  //DRAGABLE STATE
  const [parent, tapes, setTapes] = useDragAndDrop<HTMLDivElement, any>([], {
    plugins: [animations()],
    draggable: (el) => {
      return el.id !== "no-drag";
    },
  });
  // COLLECTING ALL STICKS
  useEffect(() => {
    setTapes(sticks.stiks);
  }, [sticks]);

  return (
    <section className="relative mt-8 w-full h-full  border shadow-md rounded-xl border-gray-200   overflow-hidden ">
      <div
        ref={parent}
        className=" hidden  relative z-30 w-full h-full overflow-y-auto hide-scrollbar md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-5  p-5"
      >
        {tapes.map((item) => (
          <StickPaper
            setSelectedStick={setSelectedStick}
            title={item?.title}
            desc={item?.desc}
            key={item?._id}
            id={item?._id}
          />
        ))}

        {/*STICK FOR CREATE NEW   */}
        <AddPaper title={"item"} id="no-drag" />
      </div>
      <div className="relative z-30 w-full h-full overflow-y-auto hide-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-5  p-5">
        {tapes.map((item) => (
          <StickPaper
            setSelectedStick={setSelectedStick}
            title={item?.title}
            desc={item?.desc}
            key={item?._id}
            id={item?._id}
          />
        ))}

        {/*STICK FOR CREATE NEW   */}
        <AddPaper title={"item"} id="no-drag" />
      </div>
      {/* MODAL FOR EDIT AND UPDATEA THE STICK  */}
      <Modal stickId={selectedStick as string} />

      <Image
        src={"/images/wall.jpg"}
        alt="wall"
        width={600}
        height={600}
        className="w-full h-full   top-0 left-0 absolute object-cover opacity-40"
      />
    </section>
  );
};

export default StickWallSection;

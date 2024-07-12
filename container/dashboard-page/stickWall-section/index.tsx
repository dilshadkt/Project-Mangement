"use client";
import Modal from "@/components/modal";
import StickPaper from "@/components/Stick-paper";
import AddPaper from "@/components/Stick-paper/add-paper/AddPaper";
import { RootState } from "@/libs/store";
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const StickWallSection = () => {
  const sticks = useSelector((store: RootState) => store.stick.stick);
  const loading = useSelector((store: RootState) => store.stick.loading);
  const [selectedStick, setSelectedStick] = useState<string | null>(null);
  const [parent, tapes, setTapes] = useDragAndDrop<HTMLDivElement, any>([], {
    plugins: [animations()],
    draggable: (el) => {
      return el.id !== "no-drag";
    },
  });
  useEffect(() => {
    setTapes(sticks.stiks);
  }, [sticks]);

  return (
    <section className="relative mt-8 w-full h-full  border shadow-md rounded-xl border-gray-200  overflow-hidden ">
      <div
        ref={parent}
        className="relative z-30 w-full h-full overflow-y-auto hide-scrollbar grid grid-cols-3 2xl:grid-cols-4 gap-5  p-5"
      >
        {loading
          ? new Array(7)
              .fill("  ")
              .map((index) => <StickPaper key={nanoid()} title="" />)
          : tapes.map((item) => (
              <StickPaper
                setSelectedStick={setSelectedStick}
                title={item?.title}
                desc={item?.desc}
                key={item?._id}
                id={item?._id}
              />
            ))}

        <AddPaper title={"item"} id="no-drag" />
      </div>
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

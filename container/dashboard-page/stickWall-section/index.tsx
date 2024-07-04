"use client";
import StickPaper from "@/components/Stick-paper";
import Image from "next/image";
import React from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";
import AddPaper from "@/components/Stick-paper/add-paper/AddPaper";
import Drawyer from "@/components/drawyer";
const StickWallSection = () => {
  const [parent, tapes] = useDragAndDrop<HTMLDivElement, any>(
    [
      {
        title: "Depeche Mode",
        desc: "Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden ber",
      },
      { title: "Duran Duran" },
      { title: "Pet Shop Boys" },
      { title: "Kraftwerk" },
    ],
    {
      plugins: [animations()],
      draggable: (el) => {
        return el.id !== "no-drag";
      },
    }
  );
  return (
    <section className="relative mt-8 w-full h-full  border shadow-md rounded-xl border-gray-200  overflow-hidden ">
      <div
        ref={parent}
        className="relative z-30 w-full h-full overflow-y-auto hide-scrollbar grid grid-cols-3 2xl:grid-cols-4 gap-5  p-5"
      >
        {tapes.map((item) => (
          <StickPaper title={item.title} desc={item?.desc} key={item.title} />
        ))}
        <AddPaper title={"item"} id="no-drag" />
      </div>

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

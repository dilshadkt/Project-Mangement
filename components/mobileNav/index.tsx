"use client";
import React, { useEffect, useState } from "react";
import { sideBar } from "../sidebar/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section
      className={`fixed h-[75px] bg-white shadow-md bottom-0 w-full left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <ul className="w-full h-full grid gap-2 grid-cols-5">
        {sideBar.slice(0, 5).map((item) => (
          <Link href={item.path} className="flexCenter">
            <li
              className={`${
                pathName === item.path && ` -translate-y-5`
              } flexCenter flex-col text-xs  transition-all duration-500 relative p-2 rounded-xl w-full`}
            >
              <item.icon />
              <span className="text-gray-600 mt-1">{item.title}</span>
              <Image
                src={"/images/paper.jpg"}
                alt="paper texture"
                width={80}
                height={80}
                className="absolute top-0 bottom-0 right-0 left-0 m-auto rounded-2xl -z-10 shadow-xl"
              />
              <div
                className={` ${
                  pathName === item.path && "translate-y-7 blur-md  "
                } absolute bg-black w-[80%] h-[80%]  -z-20  transition-all duration-500 rounded-xl left-0 right-0 bottom-0 top-0 m-auto`}
              ></div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default MobileNavbar;

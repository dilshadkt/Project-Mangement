"use client";
import { getSticks } from "@/libs/features/stick/action";
import { logout } from "@/libs/features/user/userSlice";
import { AppDispatch, RootState } from "@/libs/store";
import axios from "@/utils/axios";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lists, sideBar } from "./constant";

type serachItemsProps = {
  title: string;
  path: string;
};
const Sidbar = () => {
  const pathName = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [searchItems, setSearchItems] = useState<serachItemsProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const user = useSelector((store: RootState) => store.user);
  const sticks = useSelector((store: RootState) => store.stick.stick.stiks);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("auth/logout");
      dispatch(logout());
      localStorage.removeItem("token");
      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const logoutUser = (item: (typeof sideBar)[0]) => {
    if (item.title === "Sign Out") {
      handleLogout();
    } else {
      navigate.push(item.path);
    }
  };

  useEffect(() => {
    dispatch(getSticks(""));
  }, [dispatch]);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    const filtered = sideBar.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const filteredSticks = sticks.filter((stick) =>
      stick.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const filteredStickWithPath = filteredSticks.map((item) => ({
      title: item.title,
      path: "/stick-wall",
    }));

    setSearchItems(() =>
      [...filteredStickWithPath, ...filtered].map((item) => ({
        title: item.title,
        path: item.path,
      }))
    );
  };

  return (
    <>
      <section
        className={`bg-sidebarGray rounded-xl flex  w-[330px]  flex-col  p-4 h-full  ${
          sideBarOpen ? `translate-x-0 ` : `-translate-x-[120%] absolute  `
        } transition-all duration-300 ease-in`}
      >
        <nav className="flexBetween w-full text-textGray font-semibold">
          <h4>Menu</h4>
          <span onClick={() => setSideBarOpen(false)}>
            <MenuIcon className="cursor-pointer hover:text-yellow-600" />
          </span>
        </nav>
        <div className="relative">
          <input
            type="text"
            className="p-2 rounded-lg bg-transparent border my-3 w-full text-sm"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearch(e)}
          />

          {search.length !== 0 && (
            <div className="absolute  shadow-md  border w-full min-h-56 overflow-hidden text-gray-600 h-full text-xs  bg-white z-40 top-14 rounded-lg">
              <div className="w-full h-full  p-3 py-5 relative">
                <Image
                  src={"/images/paper.jpg"}
                  alt="paper texture"
                  fill
                  className="z-30 opacity-50 absolute bottom-0"
                />
                {searchItems.length === 0 ? (
                  <span>{`no result found "${search}"`}</span>
                ) : (
                  <ul className="flex flex-col relative z-50 overflow-y-auto  gap-4 h-full">
                    {searchItems.map((item) => (
                      <Link href={item.path} onClick={() => setSearch("")}>
                        <li className="flexStart group">
                          <div className="w-2 h-2 group-hover:bg-gray-800 rounded-full bg-yellow-500"></div>
                          <span className="ml-3">{item.title}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="text-xs mt-2 flex flex-col  h-full">
          <h5 className="text-textGray font-medium">Tasks</h5>
          <div className="flex flex-col  h-full overflow-y-auto ">
            <div className="h-full flex flex-col  ">
              <ul className="my-2 mb-3  ">
                {sideBar.slice(0, 4).map((item) => (
                  <Link href={item.path} key={item.id}>
                    <li
                      key={item.id}
                      className={`relative overflow-hidden my-[2px]  group flexBetween hover:shadow-md cursor-pointer text-textGray py-2 group hover:bg-[#EBEBEB] ${
                        pathName === item.path && `bg-[#EBEBEB]`
                      } px-2 rounded-lg`}
                    >
                      <Image
                        src={"/images/paper.jpg"}
                        alt="wall texture"
                        width={200}
                        height={30}
                        className={`absolute w-full h-full object-cover opacity-0 group-hover:opacity-60 ${
                          pathName === item.path && `opacity-60`
                        } scale-x-125`}
                      />
                      <div className="relative z-30">
                        <item.icon className="opacity-70 w-5" />
                        <span className="ml-3 ">{item.title}</span>
                      </div>
                      {item.value === "stickWall" ? (
                        <span className="px-2  z-30 bg-[#EBEBEB] group-hover:bg-white rounded-[4px]">
                          {sticks.length}
                        </span>
                      ) : null}
                    </li>
                  </Link>
                ))}
              </ul>
              <hr />
              <div className="mt-3  ">
                <h5 className="text-textGray font-medium">Lists</h5>
                <ul className="mt-2">
                  {lists.map((list) => (
                    <li className="px-2  group relative overflow-hidden py-2 my-1 flexBetween  hover:shadow-md rounded-lg cursor-pointer ">
                      <Image
                        src={"/images/paper.jpg"}
                        alt="wall texture"
                        width={200}
                        height={30}
                        className={`absolute w-full h-full object-cover opacity-0 group-hover:opacity-60  scale-x-125`}
                      />
                      <div className="flexStart relative z-30">
                        <div className="w-[14px] h-[14px] bg-yellow-300 rounded-[4px]"></div>
                        <span className="capitalize ml-3"> {list.title}</span>
                      </div>
                      <div></div>
                    </li>
                  ))}
                  <li className="px-2  flexStart  text-gray-500  py-2 my-1   rounded-lg cursor-pointer">
                    <AddIcon /> <span className="ml-3">Add New List</span>
                  </li>
                </ul>
                {/* <hr />
                <div className="mt-3">
                  <h5 className="text-textGray font-medium">Tags</h5>
                  <ul className="flex gap-1 flex-wrap mt-2">
                    {tags.map((tag) => (
                      <li className="py-1 cursor-pointer px-2 flexCenter rounded-md bg-yellow-200 ">
                        {tag.title}
                      </li>
                    ))}
                    <li className="py-[6px] cursor-pointer px-2 rounded-md flexStart bg-yellow-200 ">
                      <div className=" font-medium flexCenter">
                        <AddIcon fontSize="inherit" />
                      </div>
                      <span className="ml-1">Add Tag</span>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="rounded-lg border border-gray-200 p-3">
                  <div className="border relative p-1 py-2 rounded-lg">
                    <div className="absolute top-0 bottom-0 left-3 my-auto rounded-sm  w-3 h-3 bg-yellow-300"></div>
                    <input
                      type="text"
                      placeholder="List Name"
                      className="bg-transparent border-none outline-none pl-8"
                    />
                  </div>
                  <ul className="flexBetween my-2">
                    <li className="rounded-sm  w-3 h-3 bg-yellow-300"></li>
                    <li className="rounded-sm  w-3 h-3 bg-yellow-300"></li>
                    <li className="rounded-sm  w-3 h-3 bg-yellow-300"></li>
                    <li className="rounded-sm  w-3 h-3 bg-yellow-300"></li>
                    <li className="rounded-sm  w-3 h-3 bg-yellow-300"></li>
                    <li className="rounded-sm  w-3 h-3 bg-yellow-300"></li>
                    <li className="rounded-sm  w-3 h-3 bg-yellow-300"></li>
                    <li className="rounded-sm  w-3 h-3 bg-yellow-300"></li>
                  </ul>
                </div> */}
              </div>
            </div>
            <ul className="mt-2">
              {sideBar.slice(4).map((item) => (
                <li
                  onClick={() => logoutUser(item)}
                  key={item.id}
                  className="flexBetween cursor-pointer text-textGray py-2 group hover:bg-[#EBEBEB] px-2 rounded-lg"
                >
                  <div>
                    <item.icon className="opacity-70 w-5" />
                    <span className="ml-3 ">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <span
        className={`${sideBarOpen ? `hidden` : `block`} p-3`}
        onClick={() => setSideBarOpen(true)}
      >
        <MenuIcon className="cursor-pointer hover:text-yellow-600" />
      </span>
    </>
  );
};

export default Sidbar;

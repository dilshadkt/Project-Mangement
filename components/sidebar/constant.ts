import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NoteIcon from "@mui/icons-material/Note";
import TuneIcon from "@mui/icons-material/Tune";
import LogoutIcon from "@mui/icons-material/Logout";
export const sideBar = [
  {
    id: 1,
    title: "Upcoming",
    icon: KeyboardDoubleArrowLeftIcon,
    path: "/upcoming",
    value: "upcoming",
  },
  {
    id: 2,
    title: "Today",
    icon: FormatListBulletedIcon,
    path: "/",
    value: "today",
  },
  {
    id: 3,
    title: "Timer",
    icon: AccessTimeIcon,
    path: "/calender",
    value: "calender",
  },
  {
    id: 4,
    title: "Stick Wall",
    icon: NoteIcon,
    path: "/stick-wall",
    value: "stickWall",
  },
  {
    id: 5,
    title: "Settings",
    icon: TuneIcon,
    path: "/settings",
    value: "settings",
  },
  {
    id: 6,
    title: "Sign Out",
    icon: LogoutIcon,
    path: "/signout",
    value: "signout",
  },
];

export const authFormDetails = {
  signin: [
    {
      id: 1,
      type: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Passwrod",
      name: "password",
    },
  ],
  signup: [
    {
      id: 1,
      type: "text",
      placeholder: "First Name",
      name: "firstName",
    },
    {
      id: 2,
      type: "text",
      placeholder: "Last Name",
      name: "lastName",
    },
    {
      id: 3,
      type: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      id: 4,
      type: "password",
      placeholder: "Password",
      name: "password",
    },
  ],
};

export const lists = [
  {
    id: 1,
    title: "personal",
    color: "",
  },
  {
    id: 2,
    title: "work",
    color: "",
  },
  {
    id: 3,
    title: "list 1",
    color: "",
  },
];

export const tags = [
  {
    id: 1,
    title: "Tag 1",
  },
  {
    id: 2,
    title: "Tag 2",
  },
];

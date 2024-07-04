import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoteIcon from "@mui/icons-material/Note";
import TuneIcon from "@mui/icons-material/Tune";
import LogoutIcon from "@mui/icons-material/Logout";
export const sideBar = [
  {
    id: 1,
    title: "Upcoming",
    icon: KeyboardDoubleArrowLeftIcon,
    path: "/upcoming",
  },
  {
    id: 2,
    title: "Today",
    icon: FormatListBulletedIcon,
    path: "/",
  },
  {
    id: 3,
    title: "Calender",
    icon: CalendarMonthIcon,
    path: "/calender",
  },
  {
    id: 4,
    title: "Stick Wall",
    icon: NoteIcon,
    path: "/stick-wall",
  },
  {
    id: 5,
    title: "Settings",
    icon: TuneIcon,
    path: "/Settings",
  },
  {
    id: 6,
    title: "Sign Out",
    icon: LogoutIcon,
    path: "/signout",
  },
];

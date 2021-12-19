import { AiFillHome as home, AiFillContacts as contacts } from "react-icons/ai";
import { SiAboutdotme as aboutUs, SiBloglovin as blog } from "react-icons/si";
import { MdMiscellaneousServices as services } from "react-icons/md";
export const navItems = [
  {
    title: "داشبورد",
    icon: home,
    id: 0,
    route :"/"
  },
  {
    title: "بلاگ",
    icon: blog,
    id: 1,
    route :"/blog"

  },
  {
    title: "خدمات",
    icon: services,
    id: 2,
    route :"/sevices"

  },
  {
    title: "درباره ما",
    icon: aboutUs,
    id: 3,
    route :"/about"

  },
  {
    title: "تماس باما",
    icon: contacts,
    id: 4,
    route :"/contact"

  },
];

import {
  AiOutlineCloudDownload as download,
  AiOutlineUserSwitch as users,
  AiOutlineFile as files,
} from "react-icons/ai";
import { IoLocationOutline as locations } from "react-icons/io5";

export const itemData = [
  {
    title: "دانلود",
    Icon: download,
    amount: 2621,
    classes: "bg-blue-600",
    id: 0,
  },
  {
    title: "کاربران",
    Icon: users,
    amount: 1300,
    classes: "bg-green-600",
    id: 1,
  },
  {
    title: "فایل ها",
    Icon: files,
    amount: 74,
    classes: "bg-yellow-600",
    id: 2,
  },
  {
    title: "مکان ها",
    Icon: locations,
    amount: 85,
    classes: "bg-violet-600",
    id: 3,
  },
];
